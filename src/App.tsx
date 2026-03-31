import { useEffect, useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-dvh bg-[#0a0908] text-[#f5f0e8] flex flex-col relative overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(201,98,47,0.4) 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(201,98,47,0.3) 0%, transparent 70%)',
            animation: 'pulse 10s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-6 py-12 md:px-12">
        <div className="text-center max-w-6xl mx-auto">
          {/* Decorative line */}
          <div
            className={`h-px w-16 md:w-24 bg-[#c9622f] mx-auto mb-8 md:mb-12 transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />

          {/* Hello */}
          <div className="overflow-hidden mb-2 md:mb-4">
            <h1
              className={`font-serif text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.04em] transition-all duration-1000 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: '200ms',
              }}
            >
              Hello
            </h1>
          </div>

          {/* World */}
          <div className="overflow-hidden">
            <h1
              className={`font-serif text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.04em] italic text-[#c9622f] transition-all duration-1000 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: '400ms',
              }}
            >
              World
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`mt-8 md:mt-12 text-sm md:text-base tracking-[0.3em] uppercase text-[#f5f0e8]/50 transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              transitionDelay: '700ms',
            }}
          >
            A warm greeting from the digital realm
          </p>

          {/* Decorative dots */}
          <div
            className={`flex justify-center gap-2 md:gap-3 mt-8 md:mt-12 transition-all duration-1000 ease-out ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f5f0e8]/20"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`relative z-10 pb-6 md:pb-8 text-center transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1100ms' }}
      >
        <p
          className="text-[10px] md:text-xs tracking-[0.15em] text-[#f5f0e8]/30"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}

export default App;
