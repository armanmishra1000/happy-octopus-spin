"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

interface MobileSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSearchOverlay({ isOpen, onClose }: MobileSearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Popular searches (would come from API in production)
  const popularSearches = [
    "Birthday Dresses",
    "Newborn Sets",
    "Party Wear",
    "Designer Collection",
    "Summer Dresses",
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("recentSearches");
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
  }, []);

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Save to recent searches
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem("recentSearches", JSON.stringify(updated));

      // Navigate to search results (would be implemented)
      console.log("Searching for:", searchQuery);
      onClose();
    }
  };

  const handleRecentClick = (search: string) => {
    setSearchQuery(search);
    // Navigate to search results
    console.log("Searching for:", search);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white shadow-lg animate-slide-down">
        <div className="container mx-auto px-4 py-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">Search</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8956a]"
              aria-label="Close search"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands..."
                className="w-full pl-12 pr-4 py-3 text-sm border-2 border-gray-300 rounded-full focus:outline-none focus:border-[#b8956a] transition-colors"
              />
            </div>
          </form>

          {/* Search Suggestions */}
          <div className="max-h-[60vh] overflow-y-auto">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Recent Searches
                  </h3>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8956a] rounded px-2 py-1"
                  >
                    Clear
                  </button>
                </div>
                <ul className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleRecentClick(search)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8956a]"
                      >
                        {search}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Popular Searches */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Popular Searches
              </h3>
              <ul className="space-y-2">
                {popularSearches.map((search, index) => (
                  <li key={index}>
                    <Link
                      href={`/search?q=${encodeURIComponent(search)}`}
                      onClick={onClose}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#b8956a]"
                    >
                      {search}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 300ms ease-out;
        }
      `}</style>
    </>
  );
}
