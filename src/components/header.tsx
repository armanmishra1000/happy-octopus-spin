"use client";

import { Search, ShoppingCart, User, Menu, Heart, X, Phone, Globe, Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [cartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);

  const categories = [
    {
      name: "NewBorn",
      href: "/category/newborn",
      subcategories: [
        { name: "All NewBorn", href: "/category/newborn" },
        { name: "Bodysuits & Rompers", href: "/category/newborn/bodysuits" },
        { name: "Sleepwear", href: "/category/newborn/sleepwear" },
        { name: "Accessories", href: "/category/newborn/accessories" },
      ]
    },
    {
      name: "Girls",
      href: "/category/girls",
      subcategories: [
        { name: "All Girls", href: "/category/girls" },
        { name: "Dresses", href: "/category/girls/dresses" },
        { name: "Tops & Shirts", href: "/category/girls/tops" },
        { name: "Bottoms", href: "/category/girls/bottoms" },
        { name: "Shoes", href: "/category/girls/shoes" },
      ]
    },
    {
      name: "Boys",
      href: "/category/boys",
      subcategories: [
        { name: "All Boys", href: "/category/boys" },
        { name: "Suits & Sets", href: "/category/boys/suits" },
        { name: "Shirts", href: "/category/boys/shirts" },
        { name: "Bottoms", href: "/category/boys/bottoms" },
        { name: "Shoes", href: "/category/boys/shoes" },
      ]
    },
    {
      name: "Toys",
      href: "/category/toys",
      subcategories: [
        { name: "All Toys", href: "/category/toys" },
        { name: "Plush Toys", href: "/category/toys/plush" },
        { name: "Educational", href: "/category/toys/educational" },
        { name: "Outdoor", href: "/category/toys/outdoor" },
      ]
    },
    {
      name: "Designers",
      href: "/designers",
      subcategories: [
        { name: "All Designers", href: "/designers" },
        { name: "Premium Brands", href: "/designers/premium" },
        { name: "Exclusive Collections", href: "/designers/exclusive" },
      ]
    },
    {
      name: "Sale",
      href: "/sale",
      isHighlight: true
    }
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#f9f7f4] border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs">
            {/* Left: Promo Message */}
            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <Gift className="h-3.5 w-3.5" />
              <span>Free Shipping on Orders Over ₹2,000</span>
            </div>

            {/* Right: Utility Links */}
            <div className="flex items-center gap-4 ml-auto">
              <Link href="/customer-service" className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">+91 9327697184</span>
              </Link>
              <Link href="/rewards" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1">
                <span className="hidden sm:inline">Rewards</span>
              </Link>
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
                <Globe className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">India | ₹ INR</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-5">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Askkart"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Center: Search Bar (Desktop) */}
            <div className="hidden lg:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for products, brands..."
                  className="w-full px-4 py-2.5 pr-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b8956a] focus:border-transparent transition-all"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Utility Icons - Right aligned */}
            <div className="flex items-center gap-4 lg:gap-5">
              {/* Search (Mobile Only) */}
              <button
                className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Account */}
              <Link
                href="/account"
                className="hidden sm:flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors group"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
                <span className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Account</span>
              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="hidden sm:flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors group"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                <span className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Wishlist</span>
              </Link>

              {/* Cart with Badge */}
              <Link
                href="/cart"
                className="flex flex-col items-center relative text-gray-700 hover:text-gray-900 transition-colors group"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#b8956a] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
                <span className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">Cart</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar (Desktop) */}
      <nav className="hidden lg:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <ul className="flex items-center justify-center gap-10 py-4">
            {categories.map((category) => (
              <li
                key={category.name}
                className="relative"
                onMouseEnter={() => category.subcategories && setOpenMegaMenu(category.name)}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <Link
                  href={category.href}
                  className={`text-xs uppercase tracking-wider font-medium transition-colors hover:text-[#b8956a] relative group ${
                    category.isHighlight ? 'text-red-600' : 'text-gray-900'
                  }`}
                >
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8956a] group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Mega Menu Dropdown */}
                {category.subcategories && openMegaMenu === category.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-xs">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                      <div className="space-y-2">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-gray-700 hover:text-[#b8956a] hover:translate-x-1 transition-all py-2 border-b border-gray-100 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Search */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 pr-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#b8956a]"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Mobile Navigation */}
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className={`block text-sm font-medium py-2 ${
                      category.isHighlight ? 'text-red-600' : 'text-gray-900'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                  {category.subcategories && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block text-xs text-gray-600 py-1.5"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Utility Links */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <Link href="/account" className="flex items-center gap-2 text-sm text-gray-700">
                <User className="h-4 w-4" />
                My Account
              </Link>
              <Link href="/wishlist" className="flex items-center gap-2 text-sm text-gray-700">
                <Heart className="h-4 w-4" />
                Wishlist
              </Link>
              <Link href="/rewards" className="flex items-center gap-2 text-sm text-gray-700">
                <Gift className="h-4 w-4" />
                Rewards
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
