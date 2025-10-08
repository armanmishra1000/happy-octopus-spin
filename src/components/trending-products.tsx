"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Elegant Princess Birthday Dress",
    image: "/dress1.webp",
    href: "/product/elegant-princess-dress"
  },
  {
    id: 2,
    name: "Floral Garden Party Dress",
    image: "/dress2.webp",
    href: "/product/floral-garden-dress"
  },
  {
    id: 3,
    name: "Classic Celebration Dress",
    image: "/dress3.webp",
    href: "/product/classic-celebration-dress"
  },
  {
    id: 4,
    name: "Sweet Dreams Occasion Dress",
    image: "/dress4.webp",
    href: "/product/sweet-dreams-dress"
  }
];

export function TrendingProducts() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading with Decorative Lines */}
        <div className="flex items-center justify-center mb-10 md:mb-12">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent to-gray-300 max-w-[100px] md:max-w-[200px]"></div>
          <h2 className="px-6 md:px-8 text-2xl md:text-3xl font-normal text-gray-900 tracking-wide">
            TRENDING
          </h2>
          <div className="flex-grow h-px bg-gradient-to-l from-transparent to-gray-300 max-w-[100px] md:max-w-[200px]"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#b8956a] focus:ring-offset-2"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-5">
                <h3 className="text-sm md:text-base font-medium text-gray-900 text-center leading-relaxed group-hover:text-[#b8956a] transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/products"
            className="inline-block px-8 py-3 text-sm font-medium text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#b8956a] focus:ring-offset-2"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
