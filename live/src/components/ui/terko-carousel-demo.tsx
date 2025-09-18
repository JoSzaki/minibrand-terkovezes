"use client";

import { Carousel } from "./carousel";

export function TerkoCarouselDemo() {
  const slideData = [
    {
      title: "Antik Térkő",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Modern Térkő",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Színes Térkő",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Természetes Kő",
      button: "Részletek",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}