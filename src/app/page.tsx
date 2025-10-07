import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "NewBorn", href: "/category/newborn", imageUrl: "https://placehold.co/400x500/EAD9D2/5B3B3B?text=NewBorn" },
  { name: "Kids", href: "/category/kids", imageUrl: "https://placehold.co/400x500/D2E2E2/5B3B3B?text=Kids" },
  { name: "Toys", href: "/category/toys", imageUrl: "https://placehold.co/400x500/E2D2D2/5B3B3B?text=Toys" },
];

const newArrivals = [
  { name: "Patchwork Jumper", category: "Stella McCartney Kids", price: "$150", href: "/product/1", imageUrl: "https://placehold.co/400x500/D1E0E0/5B3B3B" },
  { name: "Sherpa Hat", category: "Dolce & Gabbana", price: "$80", href: "/product/2", imageUrl: "https://placehold.co/400x500/EAD9D2/5B3B3B" },
  { name: "Fluffy Faux Fur Jacket", category: "Molo", price: "$220", href: "/product/3", imageUrl: "https://placehold.co/400x500/D2E2D2/5B3B3B" },
  { name: "Suede Platform Boots", category: "UGG", price: "$180", href: "/product/4", imageUrl: "https://placehold.co/400x500/E2D2D2/5B3B3B" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-brand-secondary/30 flex items-center justify-center text-center text-gray-800">
          <Image 
            src="https://placehold.co/1600x900/C08B5C/FFFFFF?text=Askkart" 
            alt="Hero image" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-50"
          />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold">Askkart</h1>
            <p className="text-lg mt-4 max-w-xl">by Om Suraj Collection (babies products and fashion). Shop baby essentials online from our curated collection.</p>
            <Button size="lg" className="mt-8 bg-white text-gray-800 hover:bg-gray-200 rounded-full px-8 py-3 h-auto">
              Shop Now
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link href={category.href} key={category.name} className="group">
                <div className="overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-wider uppercase">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="bg-brand-primary text-white py-16 text-center">
           <h2 className="text-4xl font-bold">New Arrivals</h2>
           <p className="mt-2">Their new favourite outfit awaits...</p>
           <div className="container mx-auto px-4 mt-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {newArrivals.map((product) => (
                  <div key={product.name} className="group text-center">
                    <Link href={product.href}>
                      <div className="bg-gray-100 overflow-hidden">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-4 text-white">
                        <p className="text-sm opacity-80">{product.category}</p>
                        <h3 className="font-medium mt-1">{product.name}</h3>
                        <p className="text-sm mt-1">{product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
             </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}