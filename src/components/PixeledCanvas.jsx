"use client";

import { PixelatedCanvas } from "./pixeldedCanvasStruct";

export function PixelateCanvas({image, className, width, height}) {
  return (
    <div className="mx-auto mt-8 flex w-full items-center justify-center">
      <PixelatedCanvas
        src={image ? image : "https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        width={width ? width : 600}
        height={height? height: 400}
        cellSize={3}
        dotScale={0.5}
        shape="square"
        backgroundColor="#3A3A3A"
        dropoutStrength={0.09}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        responsive
        objectFit="cover"
        sampleAverage
        className={"rounded-xl shadow-lg obje" + className} />
    </div>
  );
}
