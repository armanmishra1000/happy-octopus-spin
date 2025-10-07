"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  customerName: string;
  productName: string;
  rating: 5;
  timeAgo: string;
  reviewTitle: string;
  reviewText: string;
  verified?: boolean;
  imagePath: string;
}

const reviews: Review[] = [
  {
    id: 1,
    customerName: "Priya",
    productName: "Elegant Princess Birthday Dress",
    rating: 5,
    timeAgo: "7 days ago",
    reviewTitle: "Absolutely stunning!",
    reviewText: "This dress was so beautiful on my daughter's birthday! Everyone loved it. The quality exceeded my expectations and it arrived right on time. Thank you so much!",
    verified: true,
    imagePath: "/review-1.jpg",
  },
  {
    id: 2,
    customerName: "Anjali M.",
    productName: "Floral Garden Party Dress",
    rating: 5,
    timeAgo: "2 weeks ago",
    reviewTitle: "A dress that sets the mood 💖",
    reviewText: "My little princess looked absolutely gorgeous! The dress fit perfectly and the detailing is exquisite. Worth every penny!",
    verified: true,
    imagePath: "/review-2.jpg",
  },
  {
    id: 3,
    customerName: "Neha",
    productName: "Sequined Birthday Gown",
    rating: 5,
    timeAgo: "3 weeks ago",
    reviewTitle: "Happy customer!",
    reviewText: "I bought this dress for my daughter's 5th birthday, and I'm very happy with it! The quality is great, it looked beautiful, and my daughter felt like a princess on her special day.",
    verified: true,
    imagePath: "/review-3.jpg",
  },
  {
    id: 4,
    customerName: "Meera S.",
    productName: "Velvet Winter Party Dress",
    rating: 5,
    timeAgo: "1 month ago",
    reviewTitle: "Perfect fit!",
    reviewText: "This dress fit perfectly and made my little one feel so special. The velvet fabric is soft and luxurious. Highly recommend!",
    imagePath: "/review-4.jpg",
  },
  {
    id: 5,
    customerName: "Kavya",
    productName: "Butterfly Garden Dress",
    rating: 5,
    timeAgo: "1 month ago",
    reviewTitle: "My daughter's dream dress ✨",
    reviewText: "I just received my daughter's dress and we absolutely love it! The quality, the design, and the fit are perfect. My daughter is so happy and I'm so grateful!",
    verified: true,
    imagePath: "/review-1.jpg",
  },
  {
    id: 6,
    customerName: "Divya R.",
    productName: "Tulle Princess Gown",
    rating: 5,
    timeAgo: "2 months ago",
    reviewTitle: "Beautiful!",
    reviewText: "This dress was perfect for my daughter's party. Everyone was in awe. The customer service was super helpful too. Highly recommend!",
    imagePath: "/review-2.jpg",
  },
  {
    id: 7,
    customerName: "Riya K.",
    productName: "Lace Flower Girl Dress",
    rating: 5,
    timeAgo: "2 months ago",
    reviewTitle: "Princess vibes 👑",
    reviewText: "The dress is absolutely beautiful and my daughter looked like royalty. The attention to detail is amazing!",
    verified: true,
    imagePath: "/review-3.jpg",
  },
  {
    id: 8,
    customerName: "Simran",
    productName: "Sequin Party Dress",
    rating: 5,
    timeAgo: "3 months ago",
    reviewTitle: "Absolutely stunning!",
    reviewText: "It's such a stunning and sparkly dress. My daughter twirled all day long. The quality is exceptional!",
    imagePath: "/review-4.jpg",
  },
  {
    id: 9,
    customerName: "Aarti P.",
    productName: "Silk Festive Dress",
    rating: 5,
    timeAgo: "3 months ago",
    reviewTitle: "Worth every rupee!",
    reviewText: "This dress is beautiful and very well made. It looked just like the picture and the quality is amazing. Will definitely order again!",
    verified: true,
    imagePath: "/review-1.jpg",
  },
  {
    id: 10,
    customerName: "Shreya",
    productName: "Embroidered Lehenga",
    rating: 5,
    timeAgo: "4 months ago",
    reviewTitle: "Absolutely love!",
    reviewText: "The dress was just like the picture, so beautiful! The embroidery work is exquisite. My daughter felt like a princess. Highly satisfied!",
    imagePath: "/review-2.jpg",
  },
];

export function RealMomentsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
            🌸 Real Moments, Real Smiles
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            See what our happy customers are saying about their special moments
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <Button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-lg hover:bg-gray-50 border border-gray-200 p-0 ${
              !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
            } transition-opacity duration-300 hidden md:flex items-center justify-center`}
            variant="ghost"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-none w-[300px] md:w-[340px] snap-start"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  {/* Image */}
                  <div className="relative h-[320px] bg-gray-100 overflow-hidden">
                    <Image
                      src={review.imagePath}
                      alt={`${review.customerName} - ${review.productName}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 300px, 340px"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Rating and Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#b8956a] text-[#b8956a]"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{review.timeAgo}</span>
                    </div>

                    {/* Review Title */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      {review.reviewTitle}
                    </h3>

                    {/* Review Text */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1">
                      {review.reviewText}
                    </p>

                    {/* Customer Name */}
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                      <p className="text-xs font-medium text-gray-900">
                        {review.customerName}
                      </p>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                          <svg
                            className="h-3 w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <Button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-lg hover:bg-gray-50 border border-gray-200 p-0 ${
              !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
            } transition-opacity duration-300 hidden md:flex items-center justify-center`}
            variant="ghost"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </Button>
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-xs text-gray-400 mt-6 md:hidden">
          ← Swipe to see more reviews →
        </p>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
