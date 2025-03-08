"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images = [
  "/amor2.jpg",
  "/amor1.jpg",
  "/amor3.jpg",
  "/amor4.jpg",
  "/amor5.jpg",
  "/amor6.jpg",
  "/amor7.jpg",
  "/amor8.jpg",
  "/amor9.jpg",
  "/amor10.jpg",
]; // 🔹 Certifique-se de que as imagens estão em /public/

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div key={index} className="flex-[0_0_100%]">
            <Image src={src} alt={`Slide ${index}`} width={1800} height={500} className="w-full h-[500px] rounded-xl" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
