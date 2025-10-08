"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function CustomerFeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, replace with actual API call:
      // const response = await fetch('/api/feedback', {
      //   method: 'POST',
      //   body: JSON.stringify({ name, email, country, rating, comment }),
      // });
      // if (!response.ok) throw new Error('Failed to submit');

      console.log({ name, email, country, rating, comment });

      // Success
      setSubmitStatus("success");
      // Reset form after 2 seconds
      setTimeout(() => {
        setName("");
        setEmail("");
        setCountry("");
        setRating(0);
        setComment("");
        setSubmitStatus("idle");
      }, 2000);
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestinian Territories", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Centered Card Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-0">
            {/* Form Section */}
            <div className="p-6 md:p-8 lg:p-10">
              <h1 className="text-2xl md:text-3xl font-normal mb-6 text-gray-900">
                Customer Feedback
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#b8956a] transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#b8956a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Country Field */}
                  <div>
                    <label htmlFor="country" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Country (optional)
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#b8956a] transition-colors bg-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        backgroundSize: '1.25rem 1.25rem',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value=""></option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Rate our service
                    </label>
                    <div className="flex gap-1 pt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110 focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= (hoveredRating || rating)
                                ? "fill-[#b8956a] text-[#b8956a]"
                                : "fill-none text-gray-300"
                            } transition-colors`}
                            strokeWidth={1.5}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment Field */}
                <div>
                  <label htmlFor="comment" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Add your comment
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={5}
                    required
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#b8956a] transition-colors resize-none"
                  />
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">Thank you! Your feedback has been submitted successfully.</span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="w-full bg-[#b8956a] hover:bg-[#a67f54] text-white font-medium py-2.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Submitted!
                    </>
                  ) : (
                    "Add Review"
                  )}
                </Button>

                {/* reCAPTCHA Notice */}
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="underline hover:text-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    className="underline hover:text-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms
                  </a>{" "}
                  apply.
                </p>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block relative">
              <div className="relative h-full">
                <Image
                  src="/feedback.webp"
                  alt="Customer Feedback"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 0vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
