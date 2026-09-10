import React, { useEffect, useState } from "react";
import { HeroImgAbout } from "../../common/constants";

const HeroAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === HeroImgAbout.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? HeroImgAbout.length - 1 : prev - 1,
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === HeroImgAbout.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-slate-900 sm:h-[650px] lg:h-[700px]">
      {/* =========================
          SLIDES
      ========================== */}
      {HeroImgAbout.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "visible scale-100 opacity-100"
              : "invisible scale-105 opacity-0"
          }`}
        >
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      ))}

      {/* =========================
          CONTENT
      ========================== */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to
              <span className="block text-emerald-400">Resilient Village</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              A strong and sustainable community built on resilience, local
              potential, and collaboration through tourism, industry, and
              agriculture.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 hover:shadow-xl"
              >
                Explore Our Village
              </button>

              <button
                type="button"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          PREVIOUS BUTTON
      ========================== */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 sm:left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* =========================
          NEXT BUTTON
      ========================== */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 sm:right-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* =========================
          SLIDE INDICATORS
      ========================== */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {HeroImgAbout.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === index
                ? "w-10 bg-emerald-400"
                : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* =========================
          SLIDE NUMBER
      ========================== */}
      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-sm text-white sm:flex">
        <span className="font-semibold">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>

        <span className="h-px w-8 bg-white/40" />

        <span className="text-white/60">
          {String(HeroImgAbout.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default HeroAbout;
