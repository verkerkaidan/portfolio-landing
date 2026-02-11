"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { SlideshowProps } from "./about.types";

export default function Slideshow({ images }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-40 h-28 sm:w-60 sm:h-40 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`Slideshow image ${currentIndex + 1}`}
          className="w-full h-full object-fill"
          width={160}
          height={112}
        />
      </div>
    </div>
  );
}
