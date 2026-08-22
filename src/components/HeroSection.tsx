import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#080811] text-white pt-28 pb-12 overflow-hidden">
      {/* Main Centered Container - Navbar ke saath perfect align hoga */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: Mobile me 1 column, Laptop/Desktop me 2 column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: Text Content (Laptop: 6 cols, Mobile: Full width) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Turn Attention <br />
              <span className="text-indigo-400">Into Revenue.</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              We build performance-driven marketing systems that generate qualified leads,
              improve conversions, and turn your growth engine into a predictable revenue machine.
            </p>

            {/* Buttons (Mobile friendly) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <a
                href="#audit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-center"
              >
                Get a Free Growth Audit <span>→</span>
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white px-5 py-3.5 font-medium text-sm transition text-center border border-gray-800 sm:border-none rounded-xl"
              >
                See How It Works
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-[#080811]" />
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#080811]" />
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#080811]" />
              </div>
              <span className="text-xs sm:text-sm text-gray-400 font-medium">
                Built for ambitious brands ready to scale
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Dashboard Box (Laptop: 6 cols, Mobile: Full width) */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl border border-gray-800/80 bg-[#0c0c1a] p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              
              {/* Header Stats */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-800/80">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Revenue Growth</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white mt-1">$248,420</p>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-semibold">
                  +32.8%
                </span>
              </div>

              {/* Chart Visual */}
              <div className="h-44 sm:h-52 my-5 flex items-end justify-between gap-2 sm:gap-3 px-1">
                <div className="w-full bg-indigo-600/30 hover:bg-indigo-600/50 transition h-[35%] rounded-t-lg" />
                <div className="w-full bg-indigo-600/40 hover:bg-indigo-600/60 transition h-[55%] rounded-t-lg" />
                <div className="w-full bg-indigo-600/50 hover:bg-indigo-600/70 transition h-[45%] rounded-t-lg" />
                <div className="w-full bg-indigo-600/70 hover:bg-indigo-600/80 transition h-[75%] rounded-t-lg" />
                <div className="w-full bg-indigo-500 hover:bg-indigo-400 transition h-[95%] rounded-t-lg shadow-lg shadow-indigo-500/20" />
              </div>

              {/* Metric Footer Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                <div className="bg-[#121226] p-2.5 sm:p-3 rounded-xl border border-gray-800 text-center">
                  <p className="text-[10px] sm:text-xs text-gray-400">Paid Ads</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">2.8x</p>
                </div>
                <div className="bg-[#121226] p-2.5 sm:p-3 rounded-xl border border-gray-800 text-center">
                  <p className="text-[10px] sm:text-xs text-gray-400">Lead Gen</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">1,284</p>
                </div>
                <div className="bg-[#121226] p-2.5 sm:p-3 rounded-xl border border-gray-800 text-center">
                  <p className="text-[10px] sm:text-xs text-gray-400">Automation</p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">94%</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* SINGLE BADGES BANNER (Duplicate Badges Remove Kar Diye Hain) */}
      <div className="mt-14 sm:mt-20 border-y border-gray-800/80 bg-[#090915] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center lg:justify-between items-center gap-4 text-[11px] sm:text-xs font-semibold text-gray-400 tracking-wider">
          <span className="flex items-center gap-1.5">🎯 PERFORMANCE MARKETING</span>
          <span className="hidden sm:inline text-gray-7xl">•</span>
          <span className="flex items-center gap-1.5">📈 LEAD GENERATION</span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span className="flex items-center gap-1.5">📊 CONVERSION OPTIMIZATION</span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span className="flex items-center gap-1.5">💾 CRM & AUTOMATION</span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span className="flex items-center gap-1.5">⚡ DATA-DRIVEN GROWTH</span>
        </div>
      </div>
    </section>
  );
}
