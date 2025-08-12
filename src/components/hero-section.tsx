"use client";

import Image from "next/image";

import logo from "@public/lifetime-logo.svg";
import star from "@public/star.svg";
import diningImage from "@public/assets/dining.jpg";
import diningCropped from "@public/assets/dining-cropped.jpg";
import { ArrowUpRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-background xl:bg-[#101014] w-full"
    >
      {/* Header - moved outside to ensure full width */}
      <header className="xl:fixed xl:bg-gradient-to-b xl:from-[#101014]/80 xl:to-[#101014]/0 top-0 z-20 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:max-w-[1440px] xl:w-full flex justify-between py-[40px] px-[30px] xl:px-20 bg-[#101014] xl:bg-transparent">
        <span className="flex items-center gap-2 text-white">
          <Image
            src={logo}
            alt="Lifetime Art Logo"
            width={32}
            height={32}
            className="w-auto h-8"
          />
          <p className="text-white text-2xl font-medium">LifetimeArt</p>
        </span>

        <span className="flex items-center gap-[30px] text-lg text-white font-medium">
          <p>About</p>
          <p>Services</p>
          <p>Our Work</p>
          <p>FAQs</p>
          <p>Contact</p>
        </span>
      </header>

      <div className="bg-[#101014] xl:bg-transparent xl:pb-6">
        {/* Background Image - Tablet only */}
        <div className="relative pt-[1.125rem] pb-5 hidden lg:block xl:hidden">
          <div className="relative rounded-[16px] overflow-hidden">
            <Image
              src={diningImage}
              alt="Hero Section Background Image"
              width={1240}
              height={695}
              className="w-full h-auto object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#101014] opacity-75 rounded-[16px]"></div>
          </div>
        </div>

        {/* Desktop Hero Layout (xl and above) */}
        <div className="hidden xl:block xl:max-w-[1440px] xl:mx-auto xl:pt-10">
          <div className="grid grid-cols-2 gap-0 min-h-[calc(100vh-120px)]">
            {/* Left side - Dark background with content */}
            <div className="flex flex-col justify-center px-12 2xl:px-16 3xl:px-20 py-12 space-y-14">
              <div className="space-y-2">
                {/* Available for work badge */}
                <span className="bg-[#28282C] px-3 py-2 rounded-full w-fit flex items-center gap-2">
                  <div className="size-4 bg-stone-400 flex justify-center items-center rounded-full">
                    <div className="size-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-normal">
                    Available for work
                  </span>
                </span>

                <div className="space-y-6">
                  {/* Main heading */}
                  <h1 className="text-white text-4xl 2xl:text-5xl 3xl:text-6xl font-medium leading-tight">
                    Your trusted partner
                    <br />
                    for quality home
                    <br />
                    improvement
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 text-lg 2xl:text-xl leading-relaxed max-w-md">
                    LifetimeArt delivers expert home improvements, creating
                    beautiful and functional spaces with quality craftsmanship.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors w-fit">
                <span className="font-medium">Work with us</span>
                <ArrowUpRightIcon className="size-5" />
              </button>
            </div>

            {/* Right side - Image with testimonial overlay */}
            <div className="relative max-h-[835.5px]">
              <Image
                src={diningCropped}
                alt="Beautiful dining room with modern design"
                width={652.72}
                height={835.5}
                className="h-[835.5px] rounded-xl object-cover object-center"
                priority
              />

              {/* Testimonial overlay */}
              <div className="max-w-[240px] absolute bottom-8 right-27 bg-black/20 backdrop-blur-sm rounded-lg p-6">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={star}
                      alt="Star Rating"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-white text-sm leading-relaxed">
                  "LifetimeArt has been a game-changer for my home. Their
                  ability to blend functionality with exquisite design is
                  unparalleled."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
