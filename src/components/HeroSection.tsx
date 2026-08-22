export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080811] text-white pt-28 pb-16">
      {/* Main Centered Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Heading & Text */}
          <div className="flex flex-col items-start space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Turn Attention <br />
              <span className="text-indigo-400">Into Revenue.</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              We build performance-driven marketing systems that generate qualified leads,
              improve conversions, and turn your growth engine into a predictable revenue machine.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#audit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
              >
                Get a Free Growth Audit <span>→</span>
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white px-4 py-3 font-medium transition"
              >
                See How It Works
              </a>
            </div>

            {/* Avatar / Social Proof Fix */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full bg-indigo-400 ring-2 ring-[#080811]" />
                <div className="inline-block h-8 w-8 rounded-full bg-indigo-500 ring-2 ring-[#080811]" />
                <div className="inline-block h-8 w-8 rounded-full bg-indigo-600 ring-2 ring-[#080811]" />
              </div>
              <span className="text-sm text-gray-400 font-medium">
                Built for ambitious brands ready to scale
              </span>
            </div>

          </div>

          {/* Right Side: Dashboard Image / Graphic */}
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            {/* Yahan aapka Dashboard Component / Image rahega */}
          </div>

        </div>
      </div>

      {/* Feature Badges / Ticker (EK HI BAAR RENDER KAREIN) */}
      <div className="mt-16 border-t border-b border-gray-800/50 py-4 bg-[#0a0a16]/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center gap-6 text-xs sm:text-sm font-semibold text-gray-400 tracking-wider">
          <span>🎯 PERFORMANCE MARKETING</span>
          <span>📈 LEAD GENERATION</span>
          <span>📊 CONVERSION OPTIMIZATION</span>
          <span>💾 CRM & AUTOMATION</span>
          <span>⚡ DATA-DRIVEN GROWTH</span>
        </div>
      </div>
    </section>
  );
}
