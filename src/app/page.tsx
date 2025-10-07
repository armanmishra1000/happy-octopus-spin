import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CustomerFeedbackForm } from "@/components/customer-feedback-form";
import { RealMomentsCarousel } from "@/components/real-moments-carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "NewBorn", href: "/category/newborn", description: "Best Choice for Your NewBorn", image: "/newborn.webp" },
  { name: "Girls", href: "/category/girls", description: "Shop Girl", image: "/girls.webp" },
  { name: "Boys", href: "/category/boys", description: "Shop Boy", image: "/boy.webp" },
  { name: "Toys", href: "/category/toys", description: "New Arrivals Toys", image: "/toys.webp" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Top Promotional Banner */}
        <section className="bg-accent-navy text-white">
          <Link href="/rewards" className="block">
            <div className="container mx-auto px-4 lg:px-8 py-3 text-center">
              <h2 className="text-sm font-medium">Askkart Rewards</h2>
              <p className="text-xs opacity-90">Collect double Points when you shop our New Arrivals collection. Log in or join Rewards</p>
            </div>
          </Link>
        </section>

        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/childrensalon/video/upload/c_fill,h_600,q_99,w_1920/f_auto:video/cms/homepage-divali-desktop-8yba01sjjrc484gkokgkw00s8.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

          {/* Hero Content */}
          <div className="relative z-10 text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-2">
              The Joy of Childhood
            </h1>
            <p className="text-lg md:text-xl font-serif drop-shadow-md mb-6">
              Happy Moments
            </p>
            <div className="mb-8">
              <p className="text-sm md:text-base max-w-2xl mx-auto drop-shadow-md opacity-95">
                Discover bright and beautiful outfits for all of their special celebrations.
              </p>
            </div>
            <Link href="/shop">
              <Button variant="premium" size="lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-center mb-12 text-gray-900">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {categories.map((category) => (
                <Link
                  href={category.href}
                  key={category.name}
                  className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-2">SHOP {category.name.toUpperCase()}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Real Moments Carousel */}
        <RealMomentsCarousel />

        {/* Customer Feedback Form Section */}
        <CustomerFeedbackForm />

      </main>
      <Footer />
    </div>
  );
}