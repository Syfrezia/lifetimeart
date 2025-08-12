"use client";

import AboutUsSection from "@/components/about-us-section";
import ContactSection from "@/components/contact-section";
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
      <section id="faqs" className="py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 xs:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
          <div>lorem ipsum</div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
