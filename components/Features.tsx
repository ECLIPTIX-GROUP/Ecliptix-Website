import React from 'react';
import { Zap, Orbit, Cpu, Globe2 } from 'lucide-react';

const stats = [
  { value: "98.5%", label: "Efficacité", icon: <Zap />, sub: "Optimisation Énergétique" },
  { value: "24/7", label: "Rotation", icon: <Orbit />, sub: "Opérations Continues" },
  { value: "<10ms", label: "Ping", icon: <Cpu />, sub: "Connexion Neuronale" },
  { value: "GLOBAL", label: "Portée", icon: <Globe2 />, sub: "Couverture Satellitaire" },
];

export const Features: React.FC = () => {
  return (
    <div className="py-20 border-y border-white/10 bg-black/40 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative bg-white/5 border border-white/5 p-6 rounded-sm text-center group hover:border-ecliptix-orange/30 transition-colors">
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none"></div>
              
              <div className="flex justify-center mb-4 opacity-50 group-hover:opacity-100 group-hover:text-ecliptix-orange transition-all">
                {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
              </div>

              <div className="text-3xl md:text-5xl font-mono font-bold text-white mb-2 tracking-tighter shadow-glow">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};