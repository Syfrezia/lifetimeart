"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import kitchen from "@public/assets/kitchen.jpg";
import loft from "@public/assets/loft.png";
import bathroom from "@public/assets/bathroom.png";
import extension from "@public/assets/extension.png";
import restoration from "@public/assets/restoration.png";
import external from "@public/assets/external.png";

import kitchenIcon from "@public/kitchen-icon.svg";
import loftIcon from "@public/loft-icon.svg";
import bathroomIcon from "@public/bathroom-icon.svg";
import extensionIcon from "@public/extension-icon.svg";
import restorationIcon from "@public/restoration-icon.svg";
import externalIcon from "@public/external-icon.svg";

import { SectionPill } from "./common/section-pill";

const services = [
  {
    id: "kitchens",
    title: "Kitchens",
    icon: kitchenIcon,
    image: kitchen,
    description:
      "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you'll love to cook and gather in.",
  },
  {
    id: "loft-conversions",
    title: "Loft Conversions",
    icon: loftIcon,
    image: loft,
    description:
      "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    icon: bathroomIcon,
    image: bathroom,
    description:
      "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
  },
  {
    id: "extensions",
    title: "Extensions",
    icon: extensionIcon,
    image: extension,
    description:
      "Expand your living space without compromising on style. Whether it's a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
  },
  {
    id: "restorations",
    title: "Restorations",
    icon: restorationIcon,
    image: restoration,
    description:
      "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
  },
  {
    id: "external-works",
    title: "External Works",
    icon: externalIcon,
    image: external,
    description:
      "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
  },
];

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string>("kitchens");

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? "" : serviceId);
  };

  const currentService = services.find(
    (service) => service.id === expandedService
  );

  return (
    <section id="services" className="py-16 lg:py-24 xl:py-32 bg-[#FAFAFA]">
      <div className="xl:max-w-[1440px] mx-auto px-4 xs:px-6 lg:px-8 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 flex flex-col items-center gap-4">
          <SectionPill>Services</SectionPill>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#101014]">
            What we do
          </h2>
          <p className="text-[#3D3D47] text-lg max-w-2xl mx-auto">
            Find out which one of our services fits the needs of your project
          </p>
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          {/* Image */}
          {currentService && (
            <div className="w-full max-w-[295px] mx-auto h-[300px] rounded-lg overflow-hidden">
              <Image
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Accordion */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`border-b border-gray-200 ${
                  index === services.length - 1 ? "border-b-0" : ""
                }`}
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="font-medium text-black">
                      {service.title}
                    </span>
                  </div>
                  {expandedService === service.id ? (
                    <Plus className="w-5 h-5 text-[#3D3D47] transform rotate-45 transition-transform" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#3D3D47] transition-transform" />
                  )}
                </button>

                {expandedService === service.id && (
                  <div className="px-4 pb-4">
                    <p className="text-[#3D3D47] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Side - Image */}
          <div className="order-1">
            {currentService && (
              <div className="w-full max-w-[432px] lg:max-w-[432px] xl:max-w-[560px] 2xl:max-w-[600px] 3xl:max-w-[680px] h-[685px] mx-auto top-8">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full max-w-[432px] lg:max-w-[432px] xl:max-w-[560px] 2xl:max-w-[600px] 3xl:max-w-[680px] max-h-[685px] object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {/* Right Side - Accordion */}
          <div className="order-2 space-y-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`border-b border-gray-200 ${
                  index === services.length - 1 ? "border-b-0" : ""
                }`}
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                    <span className="font-medium text-lg text-black">
                      {service.title}
                    </span>
                  </div>
                  {expandedService === service.id ? (
                    <Plus className="w-6 h-6 text-[#3D3D47] transform rotate-45 transition-transform" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#3D3D47] transition-transform" />
                  )}
                </button>

                {expandedService === service.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
