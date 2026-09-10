import React from "react";

const IntroAbout = () => {
  return (
    <section className="w-full bg-slate-50 pb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A community-driven village growing through sustainable tourism,
            local industries, agriculture, and disaster resilience.
          </p>
        </div>

        {/* Main Introduction */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              🌱
            </div>

            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Growing Together, Building a Better Future
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Resilient Village is a community-driven village committed to
              sustainable development by harnessing its potential in tourism,
              industry, and agriculture as key drivers of local economic growth
              and community well-being.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              With its rich natural resources and strong human potential, the
              village strives to create a productive, independent, safe, and
              sustainable community for present and future generations.
            </p>
          </div>

          {/* Right - Resilience */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-2xl">
                🛡️
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Disaster-Resilient Village
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Resilient Village is committed to building a community that is
                prepared, responsive, and capable of facing various potential
                disasters.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Disaster preparedness is strengthened through community capacity
                building, environmental management, risk mapping, evacuation
                planning, emergency information, and collaboration among the
                village government, local communities, volunteers, and relevant
                stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Village Potential */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Village Potential
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Three Pillars of Our Village
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Local potential is developed sustainably to create opportunities
              and improve the quality of life for the community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Tourism */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition group-hover:scale-110">
                🏞️
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">Tourism</h3>

              <p className="mt-4 leading-7 text-slate-600">
                We develop natural attractions, cultural heritage, and local
                wisdom into sustainable tourism destinations that preserve our
                identity while creating opportunities for the community.
              </p>
            </div>

            {/* Industry */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition group-hover:scale-110">
                🏭
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Industry & Local Enterprises
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Local industries, SMEs, and community-based businesses help
                drive innovation, create employment opportunities, and increase
                the value of locally produced goods and services.
              </p>
            </div>

            {/* Agriculture */}
            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-2xl transition group-hover:scale-110">
                🌾
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Agriculture
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Sustainable farming practices support food security, protect
                natural resources, increase productivity, and strengthen the
                long-term economic prosperity of our community.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-24 overflow-hidden rounded-3xl bg-emerald-600 px-8 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl">
            Stronger Together, Resilient for the Future
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
            Through collaboration, innovation, and community participation,
            Resilient Village is committed to becoming a strong, sustainable,
            and prosperous village—prepared for disasters while continuing to
            grow through its tourism, industry, and agricultural potential.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm">
            🌱 Sustainable · 🛡️ Resilient · 🤝 Community Driven
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroAbout;
