"use client";

import AboutUsSection from "@/components/about-us-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import OurWorkSection from "@/components/our-work-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Our Work Section */}
      <OurWorkSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQs Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
