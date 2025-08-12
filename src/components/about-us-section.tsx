"use client";

import Image from "next/image";

import about1 from "@public/assets/about-us-1.jpg";
import about2 from "@public/assets/about-us-2.jpg";
import about3 from "@public/assets/about-us-3.jpg";
import about4 from "@public/assets/about-us-4.jpg";
import about5 from "@public/assets/about-us-5.png";
import { SectionPill } from "./common/section-pill";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 lg:py-24 xl:py-32">
      <div className="xl:max-w-[1440px] min-h-[290px] mx-auto xl:px-20 px-5 sm:px-10 md:grid md:grid-cols-2 flex flex-col gap-20">
        <div className="xl:max-w-[600px] flex flex-col gap-1.5">
          <SectionPill>About us</SectionPill>
          <h2 className="text-[3rem] text-[#101014] leading-[55px] tracking-[-0.8px]">
            Home
            <br />
            Improvement
            <br />
            Specialists
          </h2>
        </div>
        <p className="xl:max-w-[600px] text-pretty text-[#3D3D47] font-normal text-xl leading-[170%]">
          Welcome to LifetimeArt , your trusted home improvement experts,
          dedicated to transforming homes with precision and care. With years of
          experience in building kitchens, bathrooms, garages, and more, we take
          pride in delivering top-quality craftsmanship and a seamless customer
          experience. Our mission is to bring your vision to life while ensuring
          clear communication and expert guidance at every step. Let&rsquo;s
          create a home you&rsquo;ll love!
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mt-16 xl:mt-20">
        <div className="max-w-[1960px] mx-auto">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {/* Image 1 - Dining Room */}
            <div className="flex-shrink-0">
              <Image
                src={about1}
                alt="Modern dining room design"
                width={400}
                height={500}
                className="w-[400px] h-[500px] object-cover"
              />
            </div>

            {/* Image 2 - Living Room */}
            <div className="flex-shrink-0">
              <Image
                src={about2}
                alt="Contemporary living room design"
                width={400}
                height={500}
                className="w-[400px] h-[500px] object-cover"
              />
            </div>

            {/* Image 3 - Exterior */}
            <div className="flex-shrink-0">
              <Image
                src={about3}
                alt="Modern house exterior in nature"
                width={400}
                height={500}
                className="w-[400px] h-[500px] object-cover"
              />
            </div>

            {/* Image 4 - Kitchen */}
            <div className="flex-shrink-0">
              <Image
                src={about4}
                alt="Modern kitchen design"
                width={400}
                height={500}
                className="w-[400px] h-[500px] object-cover"
              />
            </div>

            {/* Image 5 - Loft/Bedroom */}
            <div className="flex-shrink-0">
              <Image
                src={about5}
                alt="Modern loft bedroom design"
                width={400}
                height={500}
                className="w-[400px] h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-16 xl:mt-20">
        <div className="xl:max-w-[1440px] mx-auto px-5 sm:px-10 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 lg:gap-12">
            {/* Years Experience */}
            <div className="text-center lg:text-left">
              <h3 className="text-7xl font-light text-[#101014] mb-2">8</h3>
              <h4 className="text-xl font-semibold text-[#101014] mb-2">
                Years experience
              </h4>
              <p className="text-[#3D3D47] leading-[150%]">
                Improving homes with expert craftsmanship for years
              </p>
            </div>

            {/* Projects Completed */}
            <div className="text-center lg:text-left">
              <h3 className="text-7xl font-light text-[#101014] mb-2">26</h3>
              <h4 className="text-xl font-semibold text-[#101014] mb-2">
                Projects completed
              </h4>
              <p className="text-[#3D3D47] leading-[150%]">
                Over 250 successful projects delivered with quality and care
              </p>
            </div>

            {/* Skilled Tradespeople */}
            <div className="text-center lg:text-left">
              <h3 className="text-7xl font-light text-[#101014] mb-2">30</h3>
              <h4 className="text-xl font-semibold text-[#101014] mb-2">
                Skilled Tradespeople
              </h4>
              <p className="text-[#3D3D47] leading-[150%]">
                Our team of 30 experts ensures top-quality results
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-center lg:text-left">
              <h3 className="text-7xl font-light text-[#101014] mb-2">100%</h3>
              <h4 className="text-xl font-semibold text-[#101014] mb-2">
                Client satisfaction
              </h4>
              <p className="text-[#3D3D47] leading-[150%]">
                All of our clients are satisfied with our work and service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
