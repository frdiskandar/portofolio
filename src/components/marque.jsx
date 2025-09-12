import { twMerge } from "tailwind-merge";
import { Marquee } from "./marqueComponents";

const firstRow = [
    { img: "assets/personal/1388982.png" },
    { img: "assets/personal/helloria-16.jpg" },
    { img: "assets/personal/WhatsApp Image 2025-09-12 at 10.36.32_971dfc36.jpg" },
    { img: "assets/personal/WhatsApp Image 2025-09-12 at 10.32.30_776a93f1.jpg" },]
const secondRow = [
    "alibabaCertifikat.png",
    "codepolitanapp.png",
    "dicodingai.png",
    "rakaminuiux.png",
    "dicodingbackend.png",
    "dicodingfrondend.png"
];

const ReviewCard = ({
    img,
}) => {
    return (
        <figure
            className={twMerge(
                "relative h-full w-64  cursor-pointer overflow-hidden rounded-xl border p-4",
                // dark styles
                "border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation",
            )}
        >
            <img src={img != "" ? img : "assets/farid.jpg"} alt="" className="w-2xl h-2xl min-h-36 max-h-36 rounded-xl overflow-hidden object-cover" />
        </figure>
    );
};

export default function SertivicateComponent() {
    return (
        <div className="relative flex w-full flex-col items-center box-border justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((img, index) => (
                    <ReviewCard key={index} img={`assets/sertivicate/${img}`} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
