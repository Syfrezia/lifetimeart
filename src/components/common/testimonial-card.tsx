import Image from "next/image";

interface TestimonialCardProps {
  rating: number;
  testimonial: string;
  clientName: string;
  clientImage: string;
  className?: string;
  variant?: "default" | "highlighted";
}

export default function TestimonialCard({
  rating = 5,
  testimonial,
  clientName,
  clientImage,
  className = "",
  variant = "default",
}: TestimonialCardProps) {
  const isHighlighted = variant === "highlighted";

  return (
    <div
      className={`${
        isHighlighted ? "bg-[#E9ECF2]" : "bg-white"
      } rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col ${className}`}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src="/rating-star.svg"
            alt="star"
            width={20}
            height={20}
            className={`w-4 h-4 md:w-5 md:h-5 ${
              index < rating ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <div className="flex-1 mb-6">
        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          {testimonial}
        </p>
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
          <Image
            src={clientImage}
            alt={clientName}
            fill
            className="object-cover"
          />
        </div>
        <span className="font-semibold text-sm md:text-base text-gray-900">
          {clientName}
        </span>
      </div>
    </div>
  );
}
