"use client";

import { useState, useRef } from "react";
import Card from "./common/card";

export default function OurWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      imageSrc: "/assets/our-work-1.png",
      title: "Modern kitchen refit",
      description:
        "This kitchen transformation brought sleek, modern design and enhanced functionality to our client's home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
      category: "Kitchen",
      duration: "4 weeks",
      testimonial:
        "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
      clientName: "Rachel Morgan",
      clientImage: "/assets/rachel-morgan.png",
      layout: "horizontal" as const,
      variant: "default" as const,
    },
    {
      id: 2,
      imageSrc: "/assets/external.png",
      title: "External garden path build",
      description:
        "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
      category: "External Works",
      duration: "6 weeks",
      testimonial:
        "The team at LifetimeArt did an amazing job on our garden path. It's sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
      clientName: "Michael Turner",
      clientImage: "/assets/michael-turner.png",
      layout: "horizontal" as const,
      variant: "dark" as const,
    },
    {
      id: 3,
      imageSrc: "/assets/bathroom.png",
      title: "Bathroom renovation",
      description:
        "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
      category: "Bathroom",
      duration: "7 weeks",
      testimonial:
        "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn't be happier with the result!",
      clientName: "Laura Davies",
      clientImage: "/assets/laura-davies.png",
      layout: "horizontal" as const,
      variant: "default" as const,
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / projects.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / projects.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Section Pill */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-full font-medium mb-4 md:mb-6">
            Our work
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Get inspired by our work
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            See how we've transformed homes with our expert craftsmanship and
            attention to detail.
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
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-[280px] sm:w-[320px] snap-center first:ml-0 last:mr-0"
              >
                <Card
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  duration={project.duration}
                  testimonial={project.testimonial}
                  clientName={project.clientName}
                  clientImage={project.clientImage}
                  layout="horizontal"
                  variant={project.variant}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Vertical Layout */}
        <div className="hidden md:block space-y-6 lg:space-y-8">
          {projects.map((project) => (
            <div key={project.id}>
              <Card
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                category={project.category}
                duration={project.duration}
                testimonial={project.testimonial}
                clientName={project.clientName}
                clientImage={project.clientImage}
                layout="horizontal"
                variant={project.variant}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Carousel Dots - Only show on mobile */}
        <div className="flex md:hidden justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === activeIndex
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
