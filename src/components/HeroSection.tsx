import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#06060e] text-white pt-32 pb-16 overflow-hidden">
      {/* 1. Centered Container (Isse text screen ke bahar nahi jayega) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Turn Attention <br />
              <span className="text-indigo-400">Into Revenue.</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed">
              We build performance-driven marketing systems that generate qualified leads,
              improve conversions, and turn your growth engine into a predictable revenue machine.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#audit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition flex items-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                Get a Free Growth Audit <span>→</span>
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white px-4 py-3.5 font-medium text-sm transition"
              >
                See How It Works
              </a>
            </div>

            {/* Social Proof / Avatars */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-[#06060e]" />
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#06060e]" />
                <div className="w-8 h-8 rounded-full bg-[#5b51d8] border-2 border-[#06060e]" />
              </div>
              <span className="text-xs sm:text-sm text-gray-400 font-medium">
                Built for ambitious brands ready to scale
              </span>
            </div>
          </div>

          {/* Right Side: Dashboard Preview */}
          <div className="relative w-full">
            <div className="rounded-xl border border-gray-800 bg-[#0d0d1a] p-4 shadow-2xl">
              {/* Dashboard Chart Mockup */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-800/60">
                <div>
                  <p className="text-xs text-gray-400">Revenue Growth</p>
                  <p className="text-2xl font-bold text-white">$248,420</p>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium">
                  +32.8%
                </span>
              </div>
              
              {/* Chart Placeholder / SVG */}
              <div className="h-48 my-4 flex items-end justify-between gap-2 px-2">
                <div className="w-full bg-gradient-to-t from-indigo-900/20 to-indigo-500/50 h-[40%] rounded-t" />
                <div className="w-full bg-gradient-to-t from-indigo-900/20 to-indigo-500/60 h-[60%] rounded-t" />
                <div className="w-full bg-gradient-to-t from-indigo-900/20 to-indigo-500/40 h-[50%] rounded-t" />
                <div className="w-full bg-gradient-to-t from-indigo-900/20 to-indigo-500/80 h-[75%] rounded-t" />
                <div className="w-full bg-gradient-to-t from-indigo-900/20 to-indigo-500 h-[90%] rounded-t" />
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-800/60 text-center">
                <div className="bg-[#121225] p-2 rounded">
                  <p className="text-[10px] text-gray-400">Paid Ads</p>
                  <p className="text-sm font-bold">2.8x</p>
                </div>
                <div className="bg-[#121225] p-2 rounded">
                  <p className="text-[10px] text-gray-400">Lead Gen</p>
                  <p className="text-sm font-bold">1,284</p>
                </div>
                <div className="bg-[#121225] p-2 rounded">
                  <p className="text-[10px] text-gray-400">Automation</p>
                  <p className="text-sm font-bold">94%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Ticker (Only 1 time render) */}
      <div className="mt-16 border-y border-gray-800/60 bg-[#090915] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold text-gray-400 tracking-wider">
          <span>🎯 PERFORMANCE MARKETING</span>
          <span>📈 LEAD GENERATION</span>
          <span>📊 CONVERSION OPTIMIZATION</span>
          <span>💾 CRM & AUTOMATION</span>
          <span>⚡ DATA-DRIVEN GROWTH</span>
        </div>
      </div>
    </section>
  );
}          <span>⚡ DATA-DRIVEN GROWTH</span>
        </div>
      </div>
    </section>
  );
}
