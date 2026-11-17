import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { myProjects } from "../constants/data";
import { motion as M, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import Project from "../components/Project";
import { Button } from "../components/ui/button";
import { isVideoSource } from "../lib/utils";


const PREVIEW_WIDTH = 320; // w-80
const PREVIEW_HEIGHT = 224; // h-56
const CURSOR_GAP = 16;
const VIEWPORT_PADDING = 8;

// Posisi preview relatif viewport (clientX/clientY), dibalik ke kiri/atas
// saat ruang di kanan/bawah habis supaya selalu di samping kursor.
const getPreviewPosition = ({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = window;
    const fitsRight = clientX + CURSOR_GAP + PREVIEW_WIDTH <= innerWidth - VIEWPORT_PADDING;
    const fitsBottom = clientY + CURSOR_GAP + PREVIEW_HEIGHT <= innerHeight - VIEWPORT_PADDING;
    return {
        left: Math.max(
            VIEWPORT_PADDING,
            fitsRight ? clientX + CURSOR_GAP : clientX - CURSOR_GAP - PREVIEW_WIDTH
        ),
        top: Math.max(
            VIEWPORT_PADDING,
            fitsBottom ? clientY + CURSOR_GAP : clientY - CURSOR_GAP - PREVIEW_HEIGHT
        ),
    };
};

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e) => {
        const { left, top } = getPreviewPosition(e);
        x.set(left);
        y.set(top);
    };
    const [preview, setPreview] = useState(null);

    // Saat hover mulai, preview langsung menempel di samping kursor:
    // motion value di-set dan spring di-jump agar tidak meluncur dari posisi lama.
    const handlePreviewChange = (image, event) => {
        if (image && event) {
            const { left, top } = getPreviewPosition(event);
            x.set(left);
            y.set(top);
            springX.jump(left);
            springY.jump(top);
        }
        setPreview(image);
    };
    return (
        <section
            id="portofolio"
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing cv-auto"
        >
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={handlePreviewChange} />
            ))}
            <div className="flex justify-center mt-10">
                <Button
                    asChild
                    variant="outline"
                    className="h-10 gap-2 rounded-full border-white/10 bg-[#272949] px-6 text-neutral-200 hover:text-white"
                >
                    <Link to="/portofolio">
                        Show More
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
            </div>
            {preview &&
                createPortal(
                    isVideoSource(preview) ? (
                        <M.video
                            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                            src={preview}
                            style={{ x: springX, y: springY }}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    ) : (
                        <M.img
                            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                            src={preview}
                            alt=""
                            style={{ x: springX, y: springY }}
                        />
                    ),
                    document.body
                )}
        </section>
    );
};

export default Projects;