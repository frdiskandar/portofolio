import { useState } from "react";
import { Link } from "react-router-dom";
import { myProjects } from "../constants/data";
import { motion as M, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import Project from "../components/Project";
import { Button } from "../components/ui/button";


const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };
    const [preview, setPreview] = useState(null);
    return (
        <section
            id="portofolio"
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing cv-auto"
        >
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
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
            {preview && (
                <M.img
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                    src={preview}
                    style={{ x: springX, y: springY }}
                />
            )}
        </section>
    );
};

export default Projects;