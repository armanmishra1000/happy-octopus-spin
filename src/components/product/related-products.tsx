import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center mb-8 text-2xl font-semibold text-gray-900">Complete the look</h2>

        {/* Horizontal Scroller */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-6 lg:gap-8 pb-4" style={{ minWidth: "min-content" }}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex-shrink-0 w-[240px] overflow-hidden transition-all duration-300"
              >
                <div className="relative aspect-[3/4] bg-white overflow-hidden mb-3">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-normal uppercase tracking-wider text-gray-500">
                    {product.brand}
                  </p>
                  <h3 className="text-xs font-normal line-clamp-2 text-gray-900">{product.name}</h3>
                  <p className="text-xs font-medium text-gray-900">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
