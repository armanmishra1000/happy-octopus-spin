"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="w-1/4">
            {/* Can be used for secondary nav if needed */}
          </div>
          <div className="w-1/2 text-center">
            <Link href="/" className="text-4xl font-serif font-bold text-gray-800">
              ask kart
            </Link>
          </div>
          <div className="w-1/4 flex items-center justify-end space-x-4">
            <button className="text-gray-600 hover:text-primary">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-primary">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
        <nav className="flex items-center justify-center space-x-8 py-2 border-t">
          <Link href="/" className="text-gray-600 hover:text-primary tracking-wider">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-primary tracking-wider">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary tracking-wider">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary tracking-wider">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};