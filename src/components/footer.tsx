import { Facebook, Instagram, Pinterest, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-600">
        <div>
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">ask kart</h3>
          <p className="text-sm">123 Fashion Ave, Suite 101</p>
          <p className="text-sm">New York, NY 10001</p>
          <p className="text-sm mt-2">contact@askkart.com</p>
          <p className="text-sm">+1 234 567 890</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/account" className="hover:underline">My Account</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/category/kids" className="hover:underline">Kids</Link></li>
            <li><Link href="/category/girls" className="hover:underline">Girls</Link></li>
            <li><Link href="/category/boys" className="hover:underline">Boys</Link></li>
            <li><Link href="/category/newborn" className="hover:underline">Newborn</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Our Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Askkart. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
            <Pinterest className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};