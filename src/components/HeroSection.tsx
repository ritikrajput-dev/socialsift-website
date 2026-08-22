import React from "react";
import { ArrowRight, BarChart3, Database, LineChart, Target, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#070812] text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#655cff]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#655cff]/30 bg-[#655cff]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#9b95ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7c72ff]" />
              Performance Marketing Agency
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn Attention
              <br />
              Into{" "}
              <span className="bg-gradient-to-r from-[#8b82ff] to-[#5f57ff] bg-clip-text text-transparent">
                Revenue.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/55 sm:text-xl">
              We build performance-driven marketing systems that generate
              qualified leads, improve conversions, and turn your growth
              engine into a predictable revenue machine.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#665cff] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#766dff] hover:shadow-[0_0_35px_rgba(102,92,255,0.3)]"
              >
                Get a Free Growth Audit
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/40">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-[#070812] bg-[#3b376d]" />
                <div className="h-8 w-8 rounded-full border-2 border-[#070812] bg-[#57519b]" />
                <div className="h-8 w-8 rounded-full border-2 border-[#070812] bg-[#7770c9]" />
              </div>
              <span>Built for ambitious brands ready to scale</span>
            </div>
          </div>

          {/* Right dashboard */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-[#665cff]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e1b]/95 shadow-2xl shadow-black/40">
              {/* Browser/header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Growth Dashboard
                </span>
              </div>

              <div className="p-5 sm:p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Revenue", "$248K", "+32.8%"],
                    ["Leads", "4,821", "+24.4%"],
                    ["ROAS", "4.82x", "+18.2%"],
                    ["CVR", "8.7%", "+12.6%"],
                  ].map(([label, value, change]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-white/35">
                        {label}
                      </p>
                      <p className="mt-1 text-lg font-semibold">{value}</p>
                      <p className="mt-1 text-[10px] text-[#8d86ff]">
                        {change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/40">Revenue Growth</p>
                      <p className="mt-1 text-2xl font-semibold">$248,420</p>
                    </div>

                    <div className="rounded-lg border border-[#665cff]/20 bg-[#665cff]/10 px-2.5 py-1 text-[10px] text-[#aaa5ff]">
                      +32.8%
                    </div>
                  </div>

                  <div className="relative h-44">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[1, 2, 3, 4].map((line) => (
                        <div
                          key={line}
                          className="border-t border-white/[0.05]"
                        />
                      ))}
                    </div>

                    <svg
                      viewBox="0 0 600 180"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#7168ff"
                            stopOpacity="0.28"
                          />
                          <stop
                            offset="100%"
                            stopColor="#7168ff"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 145 C45 140, 60 125, 100 130 S155 115, 190 120 S235 85, 270 100 S320 72, 350 80 S405 50, 440 65 S490 32, 530 45 S565 22, 600 28 V180 H0 Z"
                        fill="url(#chartGradient)"
                      />

                      <path
                        d="M0 145 C45 140, 60 125, 100 130 S155 115, 190 120 S235 85, 270 100 S320 72, 350 80 S405 50, 440 65 S490 32, 530 45 S565 22, 600 28"
                        fill="none"
                        stroke="#8178ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      <circle cx="600" cy="28" r="5" fill="#8178ff" />
                    </svg>
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] text-white/25">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Aug</span>
                  </div>
                </div>

                {/* Campaigns */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Paid Ads", "2.8x", Target],
                    ["Lead Gen", "1,284", LineChart],
                    ["Automation", "94%", Zap],
                  ].map(([label, value, Icon]) => {
                    const IconComponent = Icon as React.ElementType;

                    return (
                      <div
                        key={label as string}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#665cff]/10 text-[#8b83ff]">
                          <IconComponent size={15} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-[9px] text-white/35">
                            {label as string}
                          </p>
                          <p className="text-sm font-semibold">
                            {value as string}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services strip */}
        <div className="border-t border-white/[0.06]">
          <div className="grid grid-cols-2 gap-4 py-7 sm:grid-cols-3 lg:grid-cols-5">
            {[
              [Target, "Performance Marketing"],
              [LineChart, "Lead Generation"],
              [BarChart3, "Conversion Optimization"],
              [Database, "CRM & Automation"],
              [Zap, "Data-Driven Growth"],
            ].map(([Icon, text]) => {
              const IconComponent = Icon as React.ElementType;

              return (
                <div
                  key={text as string}
                  className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-white/45"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#665cff]/20 bg-[#665cff]/10 text-[#8981ff]">
                    <IconComponent size={14} />
                  </div>
                  <span>{text as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
