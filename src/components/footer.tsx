import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101014] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Image
              src="/lifetime-logo.svg"
              alt="LifetimeArt"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="ml-3 text-lg md:text-xl font-bold">
              LifetimeArt
            </span>
          </div>

          {/* Right Section - Quick Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4 md:mb-6">Quick links</h3>

            {/* Links in 2-column grid for both mobile and desktop */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                About us
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Testimonials
              </a>
              <a
                href="#work"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Our work
              </a>
              <a
                href="#faqs"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                FAQs
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear} LifetimeArt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
