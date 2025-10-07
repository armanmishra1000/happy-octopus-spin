import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/data/products";
import { ImageGallery } from "@/components/product/image-gallery";
import { ProductDetails } from "@/components/product/product-details";
import { ProductAccordion } from "@/components/product/product-accordion";
import { RelatedProducts } from "@/components/product/related-products";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChevronRight } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.relatedProducts);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li>
                <Link
                  href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-gray-900 transition-colors"
                >
                  {product.category}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-gray-900 font-medium truncate">{product.name}</li>
            </ol>
          </div>
        </nav>

        {/* Product Main Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Image Gallery */}
              <div>
                <ImageGallery images={product.images} productName={product.name} />
              </div>

              {/* Right: Product Details */}
              <div>
                <ProductDetails product={product} />
              </div>
            </div>
          </div>
        </section>

        {/* Product Information Accordion */}
        <section className="py-8 border-t border-gray-200">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <ProductAccordion product={product} />
          </div>
        </section>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}

// Generate static params for all products
export function generateStaticParams() {
  // For static generation, we would return all product IDs
  // For now, return empty array to use dynamic rendering
  return [];
}
