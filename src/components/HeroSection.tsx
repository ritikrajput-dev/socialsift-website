"use client";

import React from "react";
import {
  ArrowRight,
  BarChart3,
  Database,
  LineChart,
  Target,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  const services = [
    { icon: Target, text: "PERFORMANCE MARKETING" },
    { icon: LineChart, text: "LEAD GENERATION" },
    { icon: BarChart3, text: "CONVERSION OPTIMIZATION" },
    { icon: Database, text: "CRM & AUTOMATION" },
    { icon: Zap, text: "DATA-DRIVEN GROWTH" },
  ];

  const stats = [
    ["REVENUE", "$248K", "+32.8%"],
    ["LEADS", "4,821", "+24.4%"],
    ["ROAS", "4.82x", "+18.2%"],
    ["CVR", "8.7%", "+12.6%"],
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#070812] text-white">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#665cff]/10 blur-[140px]" />

      {/* IMPORTANT: space below fixed/absolute navbar */}
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-[110px] sm:px-8 lg:px-10 lg:pt-[125px]">
        <div className="grid items-center gap-12 pb-14 lg:grid-cols-2 lg:gap-14 lg:pb-16">
          {/* LEFT */}
          <div className="w-full max-w-[560px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#665cff]/30 bg-[#665cff]/10 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#9b95ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8178ff]" />
              Performance Marketing Agency
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
              Turn Attention
              <br />
              Into{" "}
              <span className="bg-gradient-to-r from-[#928aff] to-[#5f57ff] bg-clip-text text-transparent">
                Revenue.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-white/55 sm:text-lg">
              We build performance-driven marketing systems that generate
              qualified leads, improve conversions, and turn your growth
              engine into a predictable revenue machine.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#665cff] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#766dff]"
              >
                Get a Free Growth Audit
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:bg-white/[0.07] hover:text-white"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-xs text-white/40">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-[#070812] bg-[#3c3870]" />
                <span className="h-8 w-8 rounded-full border-2 border-[#070812] bg-[#5a54a0]" />
                <span className="h-8 w-8 rounded-full border-2 border-[#070812] bg-[#7972cc]" />
              </div>
              <span>Built for ambitious brands ready to scale</span>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[590px]">
              <div className="absolute -inset-8 rounded-[40px] bg-[#665cff]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e1b] shadow-2xl shadow-black/40">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Growth Dashboard
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {stats.map(([label, value, change]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                      >
                        <p className="text-[9px] text-white/35">{label}</p>
                        <p className="mt-1 text-lg font-semibold">{value}</p>
                        <p className="mt-0.5 text-[9px] text-[#8d86ff]">
                          {change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] text-white/40">
                          Revenue Growth
                        </p>
                        <p className="mt-1 text-xl font-semibold">
                          $248,420
                        </p>
                      </div>

                      <span className="rounded-md bg-[#665cff]/10 px-2 py-1 text-[9px] text-[#aaa5ff]">
                        +32.8%
                      </span>
                    </div>

                    <div className="relative mt-3 h-[175px]">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="border-t border-white/[0.05]" />
                        <div className="border-t border-white/[0.05]" />
                        <div className="border-t border-white/[0.05]" />
                        <div className="border-t border-white/[0.05]" />
                      </div>

                      <svg
                        viewBox="0 0 600 180"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="revenueGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#8178ff"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#8178ff"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 145 C50 135 70 125 110 132 C150 138 170 115 210 120 C250 125 265 88 305 100 C345 112 355 72 395 82 C435 92 450 55 485 65 C520 75 540 30 565 45 C580 52 590 35 600 28 V180 H0 Z"
                          fill="url(#revenueGradient)"
                        />

                        <path
                          d="M0 145 C50 135 70 125 110 132 C150 138 170 115 210 120 C250 125 265 88 305 100 C345 112 355 72 395 82 C435 92 450 55 485 65 C520 75 540 30 565 45 C580 52 590 35 600 28"
                          fill="none"
                          stroke="#8178ff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <circle cx="600" cy="28" r="5" fill="#8178ff" />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[9px] text-white/25">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Aug</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-3 grid grid-cols-3 gap-2.5">
                    <Metric icon={Target} label="Paid Ads" value="2.8x" />
                    <Metric icon={LineChart} label="Lead Gen" value="1,284" />
                    <Metric icon={Zap} label="Automation" value="94%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-white/[0.06]">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
            {services.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-wide text-white/45"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#665cff]/20 bg-[#665cff]/10 text-[#8981ff]">
                  <Icon size={13} />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Metric = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#665cff]/10 text-[#8981ff]">
        <Icon size={13} />
      </div>

      <div>
        <p className="text-[8px] text-white/35">{label}</p>
        <p className="text-xs font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default HeroSection;
