"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Truck, RotateCcw } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="space-y-6">
      {/* Brand */}
      <div>
        <Link href={`/brand/${product.brand.toLowerCase().replace(/\s+/g, "-")}`}>
          <h2 className="text-lg font-semibold text-gray-900 hover:underline">{product.brand}</h2>
        </Link>
      </div>

      {/* Product Title */}
      <h1 className="text-2xl md:text-3xl font-normal text-gray-900">{product.name}</h1>

      {/* Price */}
      <div className="text-xl font-medium text-gray-900">{product.price}</div>

      {/* Size Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="size-select" className="text-sm font-medium text-gray-900">
            Select Size
          </label>
          <Link href="/size-guide" className="text-xs text-gray-600 hover:text-gray-900 underline">
            Measurements & Size Guide
          </Link>
        </div>
        <select
          id="size-select"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        >
          <option value="">Select Size</option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Delivery & Returns Info */}
      <div className="flex items-center gap-6 py-4 border-y border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Truck className="h-5 w-5" />
          <span>2-5 working days</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <RotateCcw className="h-5 w-5" />
          <span>28 days to return</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="outline"
          size="lg"
          className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
        >
          <Heart className="h-5 w-5 mr-2" />
          Add to Wishlist
        </Button>
        <Button
          size="lg"
          className="w-full bg-[#b8956a] hover:bg-[#a67f54] text-white"
          disabled={!selectedSize}
        >
          Add to Bag
        </Button>
      </div>

      {/* More Information Link */}
      <div className="pt-4">
        <a href="#product-info-bottom" className="text-sm text-gray-600 hover:text-gray-900 underline">
          More product information
        </a>
      </div>
    </div>
  );
}
