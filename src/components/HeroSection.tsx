import React from "react";

export default function Hero() {
  return (
    <div className="w-full bg-[#080811] text-white pt-28 pb-12 overflow-hidden">
      {/* Container: Navbar ke saath ekdum align rahega */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Heading & Buttons (5 Columns wide on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Turn Attention <br />
              <span className="text-indigo-400">Into Revenue.</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We build performance-driven marketing systems that generate qualified leads,
              improve conversions, and turn your growth engine into a predictable revenue machine.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#audit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-medium text-sm transition shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                Get a Free Growth Audit <span>→</span>
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white px-4 py-3 font-medium text-sm transition"
              >
                See How It Works
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-indigo-500 ring-2 ring-[#080811]" />
                <div className="w-7 h-7 rounded-full bg-purple-500 ring-2 ring-[#080811]" />
                <div className="w-7 h-7 rounded-full bg-blue-500 ring-2 ring-[#080811]" />
              </div>
              <span className="text-xs text-gray-400 font-medium">
                Built for ambitious brands ready to scale
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Dashboard Box (7 Columns wide on desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl border border-gray-800 bg-[#0d0d1a]/80 p-5 shadow-2xl backdrop-blur-sm">
              
              {/* Top Revenue Stat */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <div>
                  <p className="text-xs text-gray-400">Revenue Growth</p>
                  <p className="text-2xl font-bold text-white">$248,420</p>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-semibold">
                  +32.8%
                </span>
              </div>

              {/* Chart Graphics */}
              <div className="h-52 my-4 flex items-end justify-between gap-3 px-2">
                <div className="w-full bg-indigo-600/30 h-[35%] rounded-t-md" />
                <div className="w-full bg-indigo-600/40 h-[50%] rounded-t-md" />
                <div className="w-full bg-indigo-600/50 h-[45%] rounded-t-md" />
                <div className="w-full bg-indigo-600/70 h-[70%] rounded-t-md" />
                <div className="w-full bg-indigo-500 h-[90%] rounded-t-md" />
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#131326] p-3 rounded-lg border border-gray-800 text-center">
                  <p className="text-[11px] text-gray-400">Paid Ads</p>
                  <p className="text-base font-bold text-white">2.8x</p>
                </div>
                <div className="bg-[#131326] p-3 rounded-lg border border-gray-800 text-center">
                  <p className="text-[11px] text-gray-400">Lead Gen</p>
                  <p className="text-base font-bold text-white">1,284</p>
                </div>
                <div className="bg-[#131326] p-3 rounded-lg border border-gray-800 text-center">
                  <p className="text-[11px] text-gray-400">Automation</p>
                  <p className="text-base font-bold text-white">94%</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* TICKER / BADGES SECTION - Outside Grid */}
      <div className="mt-16 border-y border-gray-800/80 bg-[#0a0a16] py-3.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-xs font-semibold text-gray-400 tracking-wider">
          <span>🎯 PERFORMANCE MARKETING</span>
          <span>📈 LEAD GENERATION</span>
          <span>📊 CONVERSION OPTIMIZATION</span>
          <span>💾 CRM & AUTOMATION</span>
          <span>⚡ DATA-DRIVEN GROWTH</span>
        </div>
      </div>
    </div>
  );
}
