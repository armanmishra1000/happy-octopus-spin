"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[10.5px]">Customer Service</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-color-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-color-black transition-colors">
                  Create a Return
                </Link>
              </li>
              <li>
                <Link href="/delivery-returns" className="hover:text-color-black transition-colors">
                  Delivery & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-color-black transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-color-black transition-colors">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[10.5px]">Contact Us</h4>
            <div className="text-xs text-gray-600 space-y-3">
              <div>
                <p className="font-medium text-gray-900 mb-1">Call Us</p>
                <p className="text-xs mb-1">Need help? Give us a call.</p>
                <p>
                  <span className="font-medium">India:</span>{" "}
                  <a href="tel:+919327697184" className="hover:text-color-black transition-colors">
                    +91 9327697184
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Email Us</p>
                <p>
                  <a href="mailto:askkart@askkart.co.in" className="hover:text-color-black transition-colors">
                    askkart@askkart.co.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[10.5px]">About Us</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/the-store" className="hover:text-color-black transition-colors">
                  Visit Our Store
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-color-black transition-colors">
                  About Askkart
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-color-black transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-color-black transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[10.5px]">Get The Newsletter</h4>
            <p className="text-xs text-gray-600 mb-4">Find out about the latest offers from Askkart</p>
            <form className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-navy focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent-navy text-white text-xs font-medium rounded hover:bg-accent-navy/90 transition-colors"
                >
                  →
                </button>
              </div>
            </form>
            <div className="space-y-3">
              <Link href="/rewards" className="block">
                <div className="bg-accent-blush p-3 rounded text-xs font-medium text-gray-900 hover:bg-accent-blush/80 transition-colors">
                  Join Askkart Rewards
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/suraj.collection.surat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-color-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/om_surajcollection/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-color-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright & Legal Links */}
            <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap justify-center">
              <span>© Copyright {new Date().getFullYear()} Askkart</span>
              <span>•</span>
              <Link href="/terms-conditions" className="hover:text-color-black transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-color-black transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <span>
                Powered by{" "}
                <a
                  href="https://getspace.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-color-black transition-colors"
                >
                  Getspace
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
