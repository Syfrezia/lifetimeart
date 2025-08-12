import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  testimonial?: string;
  clientName?: string;
  clientImage?: string;
  className?: string;
  variant?: "default" | "horizontal" | "dark";
  layout?: "vertical" | "horizontal";
}

export default function Card({
  imageSrc,
  title,
  description,
  category,
  duration,
  testimonial,
  clientName,
  clientImage,
  className = "",
  variant = "default",
  layout = "vertical",
}: CardProps) {
  const isHorizontal = layout === "horizontal";
  const isDark = variant === "dark";

  if (isHorizontal) {
    return (
      <div
        className={`${
          isDark ? "bg-[#101014] text-white" : "bg-[#E9ECF2]"
        } rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative h-64 md:h-auto md:w-1/2 lg:w-2/5">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h3>

              <p
                className={`text-sm md:text-base lg:text-lg leading-relaxed mb-6 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-full font-medium ${
                    isDark ? "bg-gray-700 text-white" : "bg-gray-900 text-white"
                  }`}
                >
                  {category}
                </span>
                <span
                  className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-full font-medium ${
                    isDark
                      ? "bg-gray-800 text-gray-300"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {duration}
                </span>
              </div>
            </div>

            {/* Testimonial */}
            {testimonial && (
              <div
                className={`border-l-4 pl-4 md:pl-6 ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <blockquote
                  className={`text-sm md:text-base leading-relaxed mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span
                    className={`text-2xl leading-none ${
                      isDark ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    &ldquo;
                  </span>
                  {testimonial}
                  <span
                    className={`text-2xl leading-none ${
                      isDark ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    &rdquo;
                  </span>
                </blockquote>

                {/* Client */}
                {clientName && (
                  <div className="flex items-center gap-3">
                    {clientImage && (
                      <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                        <Image
                          src={clientImage}
                          alt={clientName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span
                      className={`font-semibold text-sm md:text-base ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {clientName}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        isDark ? "bg-[#101014] text-white" : "bg-[#E9ECF2]"
      } rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="relative h-64 md:h-72 lg:h-80">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 lg:p-10">
        <h3
          className={`text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm md:text-base lg:text-lg leading-relaxed mb-6 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-full font-medium ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-900 text-white"
            }`}
          >
            {category}
          </span>
          <span
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-full font-medium ${
              isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
            }`}
          >
            {duration}
          </span>
        </div>

        {/* Testimonial */}
        {testimonial && (
          <div
            className={`border-l-4 pl-4 md:pl-6 ${
              isDark ? "border-gray-700" : "border-gray-100"
            }`}
          >
            <blockquote
              className={`text-sm md:text-base leading-relaxed mb-4 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span
                className={`text-2xl leading-none ${
                  isDark ? "text-gray-600" : "text-gray-400"
                }`}
              >
                &ldquo;
              </span>
              {testimonial}
              <span
                className={`text-2xl leading-none ${
                  isDark ? "text-gray-600" : "text-gray-400"
                }`}
              >
                &rdquo;
              </span>
            </blockquote>

            {/* Client */}
            {clientName && (
              <div className="flex items-center gap-3">
                {clientImage && (
                  <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                    <Image
                      src={clientImage}
                      alt={clientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span
                  className={`font-semibold text-sm md:text-base ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {clientName}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
