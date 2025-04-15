import React from "react";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    text: "FLKeys News leveraged TenAI for their Customer Support.",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/67596fb93b86b2fda211fe15_cult.fit.avif",
    brandLogo: "/investor_logo1.svg",
  },
  {
    text: "Founders Fund leveraged TenAI for their share market Support team.",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/67596fb9ceeb860a66541d7f_super.money.avif",
    brandLogo: "/investor_logo2.svg",
  },
  {
    text: "Freight Center leveraged TenAI for their employee training.",
    image:
      "https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/67d934420aa676b219f94cbf_FIIC.avif",
    brandLogo: "/investor_logo3.svg",
  },
];

const Reviews = () => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-black flex flex-col items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Badge
            lassName="bg-white dark:bg-slate-800 border border-slate-500 dark:border-slate-300 font-[Manrope] text-slate-700 dark:text-slate-300 text-xs rounded-4xl px-2 py-1 flex items-center gap-2"
            title={"Reviews"}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-[Manrope] font-semibold text-center mb-4 dark:text-gray-200 leading-snug">
          Learn Why <br /> Clients Love TenAI
        </h1>
        <p className="text-slate-700 dark:text-slate-400 text-sm text-center mb-12">
          Here’s what our customers had to say
        </p>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          {reviews.map((review, index) => (
            <section
              key={index}
              className="w-full max-w-xs rounded-xl shadow-lg overflow-hidden bg-white dark:bg-slate-800"
            >
              <div className="relative">
                <img
                  src={review.image}
                  alt="Review"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={review.brandLogo}
                    alt="Brand Logo"
                    className="h-60 w-60 object-contain invert"
                  />
                </div>
              </div>
              <div className="p-4 text-left">
                <p className="text-slate-800 dark:text-slate-300 font-semibold text-base font-[Manrope]">
                  {review.text}
                </p>
                <p className="mt-4 text-blue-600 dark:text-blue-400 text-sm  italic font-[Manrope] font-medium flex items-center gap-1 cursor-pointer hover:underline">
                  Read more <span>→</span>
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
