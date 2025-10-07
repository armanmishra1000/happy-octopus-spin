import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "NewBorn", href: "/category/newborn", description: "Best Choice for Your NewBorn", image: "/newborn.webp" },
  { name: "Girls", href: "/category/girls", description: "Shop Girl", image: "/girls.webp" },
  { name: "Boys", href: "/category/boys", description: "Shop Boy", image: "/boy.webp" },
  { name: "Toys", href: "/category/toys", description: "New Arrivals Toys", image: "/toys.webp" },
];

const newArrivals = [
  { name: "Stylish Three Piece Suit for Boys", category: "Boys Clothing", price: "₹1,895", href: "/product/1" },
  { name: "Stylish 3-Piece Boys Suit Set", category: "Boys Clothing", price: "₹2,045", href: "/product/2" },
  { name: "Boys Stylish Waistcoat Bow Tie Party Wear Set", category: "Boys Clothing", price: "₹2,195", href: "/product/3" },
  { name: "Boys Casual Jacket Set", category: "Boys Clothing", price: "₹1,895", href: "/product/4" },
];

const bestSellers = [
  { name: "Soft Plush Multicolor Ball for Kids", category: "Toys", price: "₹395", href: "/product/5", isBestSeller: true },
  { name: "Classic Yellow Pooh Plush Toy", category: "Toys", price: "₹395", href: "/product/6", isBestSeller: true },
  { name: "Adorable Pink Bunny Plush Toy", category: "Toys", price: "₹425", href: "/product/7", isBestSeller: true },
  { name: "Stylish Jacket Set for Boys", category: "Boys Clothing", price: "₹1,985", href: "/product/8", isBestSeller: true },
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

        {/* Promotional Banner */}
        <section className="bg-[#8B1538] py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <Link href="/new-arrivals" className="block text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                Their new favourite outfit awaits . . .
              </h2>
            </Link>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="section-padding bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-3 text-gray-900">New Arrivals</h2>
              <p className="text-xs text-gray-600">Their new favourite outfit awaits...</p>
            </div>
            {/* Horizontal Scroller */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-6 lg:gap-8 pb-4" style={{ minWidth: 'min-content' }}>
                {newArrivals.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="group flex-shrink-0 w-[280px] sm:w-[300px] overflow-hidden transition-all duration-300"
                  >
                    <div className="relative aspect-[3/4] bg-white overflow-hidden mb-4">
                      <Image
                        src="/product.webp"
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-normal uppercase tracking-wider text-gray-500">{product.category}</p>
                      <h3 className="text-xs font-normal line-clamp-2 text-gray-900">{product.name}</h3>
                      <p className="text-xs font-medium text-gray-900">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Discover What's New Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-center mb-12 text-gray-900">Discover What&apos;s New</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <Link href="/collections/latest" className="group relative overflow-hidden aspect-[3/4] block">
                <Image
                  src="/product.webp"
                  alt="Latest Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Latest Collection</h3>
                  <p className="text-xs opacity-90 mb-4">
                    Discover the newest arrivals that will keep them stylish and comfortable all season long.
                  </p>
                  <span className="inline-block text-xs font-medium border-b border-white pb-1 group-hover:border-transparent transition-colors">
                    Shop Now →
                  </span>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/collections/special-moments" className="group relative overflow-hidden aspect-[3/4] block">
                <Image
                  src="/product.webp"
                  alt="Special Moments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Special Moments</h3>
                  <p className="text-xs opacity-90 mb-4">
                    Perfect outfits for celebrations, parties, and all their memorable occasions.
                  </p>
                  <span className="inline-block text-xs font-medium border-b border-white pb-1 group-hover:border-transparent transition-colors">
                    Shop Now →
                  </span>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/collections/seasonal" className="group relative overflow-hidden aspect-[3/4] block">
                <Image
                  src="/product.webp"
                  alt="Seasonal Favorites"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Seasonal Favorites</h3>
                  <p className="text-xs opacity-90 mb-4">
                    Shop our curated collection of seasonal must-haves, perfect for every weather and occasion.
                  </p>
                  <span className="inline-block text-xs font-medium border-b border-white pb-1 group-hover:border-transparent transition-colors">
                    Shop Now →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Brands Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-center mb-12 text-gray-900">Our Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
              {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6", "Brand 7", "Brand 8"].map((brand, index) => (
                <Link
                  key={index}
                  href={`/brand/${brand.toLowerCase().replace(" ", "-")}`}
                  className="flex items-center justify-center aspect-square grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <span className="text-xs font-semibold text-gray-600">{brand}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/brands">
                <Button variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white uppercase tracking-wider text-xs font-semibold">
                  SHOP ALL BRANDS
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="section-padding bg-color-soft-gray">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="mb-3 text-gray-900">Best Sellers</h2>
              <p className="text-xs text-gray-600">Shop our best-selling favorites</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {bestSellers.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group bg-white overflow-hidden block transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] bg-white overflow-hidden p-4">
                    {product.isBestSeller && (
                      <span className="absolute top-3 left-3 z-10 bg-accent-navy text-white text-xs font-medium px-3 py-1 rounded-full">
                        Best Seller
                      </span>
                    )}
                    <Image
                      src="/product.webp"
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-normal uppercase tracking-wider text-gray-500 mb-1">{product.category}</p>
                    <h3 className="text-xs font-normal mb-2 text-gray-900 line-clamp-2">{product.name}</h3>
                    <p className="text-xs font-medium text-gray-900">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards Banner Section */}
        <section className="section-padding bg-[#f5f0e8]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left order-1">
                <h2 className="mb-4 text-gray-900 font-normal">A World of Askkart Rewards</h2>
                <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                  Collect Points as you shop and unlock a world of exclusive treats and exciting Rewards as you reach higher levels.
                </p>
                <Link href="/rewards">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-[#b8956a] hover:bg-[#a67f54] text-white uppercase tracking-wider rounded-full px-8 py-6 text-sm font-medium"
                  >
                    JOIN TODAY
                  </Button>
                </Link>
              </div>
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden order-2">
                <Image
                  src="/rewards.webp"
                  alt="Askkart Rewards"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-center mb-12 text-gray-900">
              We love hearing from you . . .
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="text-center">
                <blockquote className="mb-6">
                  <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                    &ldquo;I&apos;d like to take this opportunity to say what amazing customer service you have. I will be recommending Askkart to friends and family and will certainly carry on purchasing from you.&rdquo;
                  </p>
                </blockquote>
                <footer>
                  <p className="text-xs font-semibold text-gray-900">RAJESH</p>
                  <p className="text-xs text-gray-600">India</p>
                </footer>
              </div>

              {/* Testimonial 2 */}
              <div className="text-center">
                <blockquote className="mb-6">
                  <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                    &ldquo;My order arrived in just two days. Askkart also has helpful sizing guidance, making it easy to find the perfect fit for my children.&rdquo;
                  </p>
                </blockquote>
                <footer>
                  <p className="text-xs font-semibold text-gray-900">PRIYA</p>
                  <p className="text-xs text-gray-600">India</p>
                </footer>
              </div>

              {/* Testimonial 3 */}
              <div className="text-center">
                <blockquote className="mb-6">
                  <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                    &ldquo;Hello from a happy customer. I ordered yesterday afternoon and they were delivered by 11.00am today. Gorgeous quality and beautifully packaged.&rdquo;
                  </p>
                </blockquote>
                <footer>
                  <p className="text-xs font-semibold text-gray-900">AMIT</p>
                  <p className="text-xs text-gray-600">India</p>
                </footer>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}