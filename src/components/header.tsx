"use client";

import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [cartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-color-light-gray sticky top-0 z-50">
      {/* Top Bar - Logo and Utility Icons */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Askkart"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Utility Icons - Right aligned */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-color-text-primary hover:text-color-black transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Account */}
              <Link
                href="/account"
                className="text-color-text-primary hover:text-color-black transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="text-color-text-primary hover:text-color-black transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </Link>

              {/* Cart with Badge */}
              <Link
                href="/cart"
                className="relative text-color-text-primary hover:text-color-black transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-navy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden text-color-text-primary hover:text-color-black transition-colors"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 bg-gray-50 py-4">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-navy focus:border-transparent"
                  autoFocus
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="hidden lg:block border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <ul className="flex items-center justify-center space-x-8 py-3">
            <li>
              <Link
                href="/"
                className="text-xs uppercase tracking-normal text-color-text-primary hover:text-color-black transition-colors font-normal"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-xs uppercase tracking-normal text-color-text-primary hover:text-color-black transition-colors font-normal"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/new-arrivals"
                className="text-xs uppercase tracking-normal text-color-text-primary hover:text-color-black transition-colors font-normal"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="text-xs uppercase tracking-normal text-color-text-primary hover:text-color-black transition-colors font-normal"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-normal text-color-text-primary hover:text-color-black transition-colors font-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};