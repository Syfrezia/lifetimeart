"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRightIcon } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1])); // First item open by default

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What area are you based in?",
      answer:
        "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on size and complexity. We'll provide an estimated schedule during your consultation and keep you updated throughout the process.",
    },
    {
      id: 3,
      question: "Do you offer free quotes?",
      answer:
        "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
    },
    {
      id: 4,
      question: "Will I need planning permission for my project?",
      answer:
        "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
    },
    {
      id: 5,
      question: "Do you provide a guarantee for your work?",
      answer:
        "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
    },
    {
      id: 6,
      question: "Can I stay in my home while the work is being done?",
      answer:
        "In most cases, yes—though it may depend on the scope of work and areas affected. We'll discuss options to minimise disruption.",
    },
    {
      id: 7,
      question: "How do I get started with a project?",
      answer:
        "Simply get in touch with our team. We'll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
    },
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Section Pill */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-full font-medium mb-4 md:mb-6">
            FAQs
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Answering Your Questions
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed">
            Got more questions? Send us your enquiry below
          </p>

          {/* Get in touch button */}
          <button className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-full font-medium transition-colors duration-200 group">
            Get in touch
            <div className="ml-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
              <ArrowUpRightIcon className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {openItems.has(faq.id) && (
                <div className="px-6 pb-5 md:px-8 md:pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
