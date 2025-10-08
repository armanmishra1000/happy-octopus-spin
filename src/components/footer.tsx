"use client";

import { Facebook, Instagram, Mail, Phone, Smartphone, Globe, Shield, CreditCard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#f9f7f4] border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Column 1: Brand & Newsletter (25%) */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.webp"
              alt="Askkart"
              width={140}
              height={46}
              className="h-11 w-auto mb-4"
            />
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Quality Kids Fashion Since 2024
            </p>

            <h4 className="font-semibold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">
              Get The Newsletter
            </h4>
            <p className="text-[11px] text-gray-600 mb-4">
              Join 10,000+ happy parents. Exclusive offers & updates.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-10 pr-3 py-2.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b8956a] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-[#b8956a] text-white text-xs font-medium rounded-md hover:bg-[#a67f54] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <p className="text-[10px] text-gray-500 leading-relaxed">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>

          {/* Column 2: Customer Service */}
          <div className="lg:pl-4">
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[11px]">
              Customer Service
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About Askkart */}
          <div className="lg:pl-4">
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[11px]">
              About Askkart
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <Link href="/about" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Visit Our Store
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies & Legal */}
          <div className="lg:pl-4">
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[11px]">
              Policies & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <Link href="/terms-conditions" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[#b8956a] transition-colors hover:translate-x-1 inline-block">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect With Us */}
          <div className="lg:pl-4">
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-[11px]">
              Connect With Us
            </h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <Phone className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-0.5">Call Us</p>
                  <a href="tel:+919327697184" className="hover:text-[#b8956a] transition-colors">
                    +91 9327697184
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-600">
                <Mail className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 mb-0.5">Email Us</p>
                  <a href="mailto:askkart@askkart.co.in" className="hover:text-[#b8956a] transition-colors">
                    askkart@askkart.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-5">
              <p className="text-[11px] text-gray-600 mb-3">Follow us @askkart</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/suraj.collection.surat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#b8956a] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/om_surajcollection/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#b8956a] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* App Downloads */}
            <div>
              <p className="text-[11px] text-gray-600 mb-2">Download Our App</p>
              <div className="flex flex-col gap-2">
                <Link href="#" className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-md text-[10px] hover:bg-gray-800 transition-colors">
                  <Smartphone className="h-4 w-4" />
                  <div>
                    <div className="text-[8px] opacity-75">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Link>
                <Link href="#" className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-md text-[10px] hover:bg-gray-800 transition-colors">
                  <Smartphone className="h-4 w-4" />
                  <div>
                    <div className="text-[8px] opacity-75">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Payment Icons */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Trust Badges */}
            <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Shield className="h-4 w-4 text-green-600" />
                <span>SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <span>Safe Payments</span>
              </div>
              <div className="text-xs text-gray-600">
                ⭐ <span className="font-medium">4.8/5</span> by 2,500+ customers
              </div>
            </div>

            {/* Right: Payment Methods */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-[11px] text-gray-600 font-medium">We Accept:</span>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-700">VISA</div>
                <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-700">MC</div>
                <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-700">AMEX</div>
                <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-700">PayPal</div>
                <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-700">UPI</div>
                <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-semibold text-gray-700">Paytm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-[#f5f2ed]">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left: Copyright */}
            <div className="text-xs text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Askkart. All rights reserved. | Powered by{" "}
              <a
                href="https://apexture.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8956a] transition-colors font-medium"
              >
                Apexture
              </a>
            </div>

            {/* Center: Region Selector */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md border border-gray-300 text-xs text-gray-700 hover:border-[#b8956a] transition-colors">
                <Globe className="h-3.5 w-3.5" />
                <span>India 🇮🇳</span>
                <span className="text-gray-400">|</span>
                <span>₹ INR</span>
              </button>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center gap-3 text-xs text-gray-600 flex-wrap justify-center">
              <Link href="/terms-conditions" className="hover:text-[#b8956a] transition-colors">
                Terms
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/privacy-policy" className="hover:text-[#b8956a] transition-colors">
                Privacy
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/sitemap" className="hover:text-[#b8956a] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
