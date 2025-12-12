import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-[1px] bg-ecliptix-orange"></div>
               <h2 className="text-xs font-bold font-mono text-ecliptix-orange tracking-[0.3em] uppercase">Identité Corporative</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
              Au-delà de la <br/>
              <span className="text-slate-500">stratosphère digitale.</span>
            </h3>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 border-l border-white/20 pl-6">
              Ecliptix n'est pas une simple entreprise technologique. C'est une station de recherche orbitale dédiée à l'avancement de l'intelligence machine. Nous construisons les infrastructures cognitives qui piloteront les entreprises de demain.
            </p>
          </div>

          {/* Visual "Window to Space" */}
          <div className="relative h-[300px] md:h-[400px] w-full">
            {/* Main Holographic Panel */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-black border border-white/10 backdrop-blur-sm clip-path-polygon" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
               
               {/* Decorative Lines */}
               <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
               <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
               
               {/* Internal Grid */}
               <div className="absolute inset-4 border border-white/5 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

               {/* Central Floating Element */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 border border-ecliptix-orange/30 rounded-full animate-spin-slow flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 border border-dashed border-white/20 rounded-full animate-spin-reverse"></div>
                  <div className="absolute w-2 h-2 bg-ecliptix-orange rounded-full top-0 shadow-[0_0_10px_#fb923c]"></div>
               </div>
               
               {/* Data Readouts */}
               <div className="absolute bottom-8 left-8 text-[10px] font-mono text-ecliptix-orange/80 space-y-1">
                 <div>COORD: 48.85N, 2.35E</div>
                 <div>ALT: 400 KM</div>
                 <div>SYNC: 100%</div>
               </div>
            </div>
          </div>
        </div>

        {/* MISSION / VISION / VALUES - GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: MISSION */}
          <div className="hud-panel p-6 md:p-8 bg-black/40 group hover:bg-white/5 transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-50 transition-opacity">
               <Target size={80} className="text-white" />
             </div>
             <div className="w-12 h-12 bg-ecliptix-orange/20 border border-ecliptix-orange/40 rounded-lg flex items-center justify-center mb-6 text-ecliptix-orange">
                <Target size={24} />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 font-mono uppercase tracking-wider">Mission</h4>
             <div className="h-0.5 w-12 bg-ecliptix-orange mb-4"></div>
             <p className="text-slate-400 text-sm leading-relaxed">
               Démocratiser l'accès aux technologies de pointe (IA, Drones, IoT) pour résoudre les défis structurels de l'Afrique. Nous transformons la complexité technologique en leviers de croissance simples et accessibles.
             </p>
          </div>

          {/* Card 2: VISION */}
          <div className="hud-panel p-6 md:p-8 bg-black/40 group hover:bg-white/5 transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-50 transition-opacity">
               <Eye size={80} className="text-white" />
             </div>
             <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                <Eye size={24} />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 font-mono uppercase tracking-wider">Vision</h4>
             <div className="h-0.5 w-12 bg-blue-500 mb-4"></div>
             <p className="text-slate-400 text-sm leading-relaxed">
               Devenir le centre de gravité de l'innovation technologique en Afrique de l'Ouest. Nous imaginons un futur où l'agriculture est précise, les entreprises sont automatisées et la souveraineté numérique est une réalité.
             </p>
          </div>

          {/* Card 3: VALEURS */}
          <div className="hud-panel p-6 md:p-8 bg-black/40 group hover:bg-white/5 transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-50 transition-opacity">
               <ShieldCheck size={80} className="text-white" />
             </div>
             <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center justify-center mb-6 text-green-400">
                <ShieldCheck size={24} />
             </div>
             <h4 className="text-xl font-bold text-white mb-2 font-mono uppercase tracking-wider">Valeurs</h4>
             <div className="h-0.5 w-12 bg-green-500 mb-4"></div>
             <ul className="space-y-3">
               <li className="flex items-center gap-2 text-sm text-slate-400">
                 <Zap size={14} className="text-green-400" /> Excellence Opérationnelle
               </li>
               <li className="flex items-center gap-2 text-sm text-slate-400">
                 <Globe size={14} className="text-green-400" /> Impact Local Réel
               </li>
               <li className="flex items-center gap-2 text-sm text-slate-400">
                 <Cpu size={14} className="text-green-400" /> Innovation Pragmatique
               </li>
             </ul>
          </div>

        </div>

      </div>
    </section>
  );
};