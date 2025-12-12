import React from 'react';
import { ArrowRight, Satellite, Activity, ChevronDown } from 'lucide-react';

interface HeroProps {
  onDiscover: () => void;
  onOpenJournal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscover, onOpenJournal }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-ecliptix-orange selection:text-black">
      
      {/* 1. CINEMATIC BACKGROUND LAYERS */}
      
      {/* Perspective Grid Floor */}
      <div className="absolute inset-0 perspective-[500px] pointer-events-none">
         <div className="absolute bottom-[-30%] left-[-50%] w-[200%] h-[100%] bg-[linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(60deg)] animate-[gridFlow_20s_linear_infinite] mask-image-gradient-to-t-from-black-to-transparent opacity-50"></div>
      </div>

      {/* Atmospheric Nebula / Aurora */}
      <div className="absolute top-[-20%] left-[10%] w-[70vw] h-[70vw] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen animate-float pointer-events-none"></div>

      {/* 2. THE ECLIPSE CORE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
        
        {/* Volatile Corona Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-ecliptix-orange/20 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[32vw] md:h-[32vw] bg-ecliptix-orange/10 rounded-full blur-[50px] animate-[spin_15s_linear_infinite]"></div>

        {/* The Black Body (Void) */}
        <div className="relative w-[58vw] h-[58vw] md:w-[28vw] md:h-[28vw] bg-black rounded-full shadow-[0_0_80px_rgba(0,0,0,1)] z-10 flex items-center justify-center">
           {/* Inner Atmosphere */}
           <div className="absolute inset-0 rounded-full shadow-[inset_-4px_-4px_30px_rgba(251,146,60,0.6)]"></div>
        </div>

        {/* Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] md:w-[50vw] md:h-[50vw] border border-white/5 rounded-full animate-[spin_80s_linear_infinite] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[46vw] md:h-[46vw] border border-dashed border-white/5 rounded-full animate-[spin_50s_linear_reverse_infinite] opacity-40"></div>
      </div>

      {/* 3. FOREGROUND CONTENT & HUD */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Floating Widgets - Desktop Only */}
        <div className="absolute left-8 top-1/3 hidden lg:flex flex-col gap-3 opacity-60 animate-float pointer-events-none">
           <div className="flex items-center gap-2 text-[10px] font-mono text-ecliptix-orange border-l-2 border-ecliptix-orange pl-3">
              <Satellite size={12} /> SAT_LINK: ACTIVE
           </div>
           <div className="text-[9px] font-mono text-slate-500 pl-3 leading-relaxed">
              LAT: 16.0345° N<br/>LON: 16.4682° W<br/>SIGNAL: 98.4%
           </div>
        </div>

        <div className="absolute right-8 bottom-1/3 hidden lg:flex flex-col items-end gap-3 opacity-60 animate-float-delayed pointer-events-none">
           <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 border-r-2 border-blue-400 pr-3">
              SYS_DIAGNOSTIC <Activity size={12} />
           </div>
           <div className="text-[9px] font-mono text-slate-500 text-right pr-3 leading-relaxed">
              MEMORY: 64TB<br/>CPU LOAD: OPTIMAL<br/>ENCRYPTION: AES-4096
           </div>
        </div>

        {/* Status Badge */}
        <div className="animate-[fadeIn_1s_ease-out] mb-8 backdrop-blur-md bg-white/5 border border-white/10 px-5 py-2 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(251,146,60,0.15)] hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono text-white tracking-[0.2em] uppercase">
            Intelligence Artificielle Souveraine
          </span>
        </div>

        {/* Massive Cinematic Title */}
        <h1 className="relative text-6xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] mb-8 select-none text-center">
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-600 blur-md opacity-50 animate-pulse-slow">
            ECLIPTIX
          </span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-500 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]">
            ECLIPTIX
          </span>
        </h1>
        
        {/* Slogan */}
        <p className="text-lg md:text-2xl font-light text-slate-400 tracking-wide mb-12 max-w-2xl text-center leading-relaxed animate-[fadeIn_1.5s_ease-out] px-6">
          Façonnez le futur. <span className="text-white font-semibold drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">Éclipsez l'impossible.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md md:max-w-none justify-center animate-[fadeIn_2s_ease-out]">
          <button 
            onClick={onDiscover}
            className="group relative px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-slate-200 transition-all clip-path-polygon flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
          >
             <span className="relative z-10 flex items-center gap-2">
               Explorer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </button>
          
          <button 
            onClick={onOpenJournal}
            className="group px-10 py-4 bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-ecliptix-orange hover:text-ecliptix-orange transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.2)] hover:-translate-y-1"
            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
          >
             Journal de bord
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-60 z-20 pointer-events-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-ecliptix-orange to-transparent"></div>
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">Scroll Down</span>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};