"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnail List */}
      <div className="flex flex-col gap-3 w-20">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-md border-2 transition-all ${
              selectedImage === index ? "border-gray-900" : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <Image src={image} alt={`${productName} view ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative aspect-[3/4] overflow-hidden rounded-lg bg-white">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-contain p-4"
          priority
        />
      </div>
    </div>
  );
}
