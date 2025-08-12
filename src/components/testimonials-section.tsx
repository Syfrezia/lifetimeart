"use client";

import { useState, useRef } from "react";
import TestimonialCard from "./common/testimonial-card";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      testimonial:
        "Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 2,
      rating: 5,
      testimonial:
        "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "highlighted" as const,
    },
    {
      id: 3,
      rating: 5,
      testimonial:
        "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 4,
      rating: 5,
      testimonial:
        "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 5,
      rating: 5,
      testimonial:
        "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 6,
      rating: 5,
      testimonial:
        "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "highlighted" as const,
    },
    {
      id: 7,
      rating: 5,
      testimonial:
        "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 8,
      rating: 5,
      testimonial:
        "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 9,
      rating: 5,
      testimonial:
        "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
    {
      id: 10,
      rating: 5,
      testimonial:
        "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      clientName: "Emily Carter",
      clientImage: "/assets/emily-carter.png",
      variant: "default" as const,
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Section Pill */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-full font-medium mb-4 md:mb-6">
            Testimonials
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Hear from our clients
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            Hear from our happy clients about their experience working with
            Refit and the quality of our craftsmanship.
          </p>
        </div>

        {/* Mobile: Horizontal Scrolling Container */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-[280px] sm:w-[320px] snap-center first:ml-0 last:mr-0"
              >
                <TestimonialCard
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  clientName={testimonial.clientName}
                  clientImage={testimonial.clientImage}
                  variant={testimonial.variant}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 2 Rows of Horizontal Scrolling Containers */}
        <div className="hidden md:block space-y-4 lg:space-y-6">
          {/* First Row */}
          <div
            className="flex overflow-x-auto scrollbar-hide gap-4 lg:gap-6 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonials.slice(0, 5).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-[280px] lg:w-[320px] xl:w-[350px]"
              >
                <TestimonialCard
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  clientName={testimonial.clientName}
                  clientImage={testimonial.clientImage}
                  variant={testimonial.variant}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div
            className="flex overflow-x-auto scrollbar-hide gap-4 lg:gap-6 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonials.slice(5, 10).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-[280px] lg:w-[320px] xl:w-[350px]"
              >
                <TestimonialCard
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  clientName={testimonial.clientName}
                  clientImage={testimonial.clientImage}
                  variant={testimonial.variant}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots - Only show on mobile */}
        <div className="flex md:hidden justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === activeIndex
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
