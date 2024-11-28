"use client";
import image1 from "../img/Imagen1.jpg";
import image2 from "../img/Imagen2.jpg";
import image3 from "../img/Imagen3.jpg";
import image4 from "../img/imagen4.jpg";
import image5 from "../img/imagen5.jpg";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageData {
  src: StaticImageData;
}

const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
  {
    src: image4,
  },
  {
    src: image5,
  },
];

export default function CarouselComponent(): JSX.Element 
{
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);  

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
 
  useEffect(() => {    
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);
     
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="mt-1">
      <div className="relative h-[700px]">
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          objectPosition='top' />
      </div>
    </div>
  );
}