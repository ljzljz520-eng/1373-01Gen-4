export default function HeroBanner() {
  return (
    <header className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs sm:text-sm
            bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-aurora-cyan">✦</span>
          <span className="text-starlight/80">欢迎来到星穹天文馆</span>
        </div>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6
            tracking-tight leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="gradient-text">星 途 漫 游</span>
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-starlight/90 mb-4
            animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          天文馆参观路线指南
        </p>
        <p
          className="text-sm sm:text-base text-starlight/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          三条精选路线，串联四大核心展区，带您穿越星辰大海。
          <br className="hidden sm:block" />
          选择适合您的路线，开启难忘的宇宙探索之旅
        </p>

        <div
          className="mt-10 flex items-center justify-center gap-2 animate-float"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex items-center gap-1">
          <span className="text-3xl sm:text-4xl opacity-80">🌌</span>
          <span className="text-2xl sm:text-3xl opacity-60">☄️</span>
          <span className="text-3xl sm:text-4xl opacity-80">🔭</span>
          <span className="text-2xl sm:text-3xl opacity-60">🛍️</span>
          </div>
        </div>
      </div>

        <div
          className="mt-12 text-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="inline-flex flex-col items-center gap-2 text-starlight/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
    </header>
  );
}
