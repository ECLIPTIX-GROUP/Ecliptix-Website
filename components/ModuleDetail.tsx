import React from 'react';
import { ArrowLeft, Cpu, Activity, Database, Zap, Settings, Code, Layers } from 'lucide-react';
import { ProductModule } from '../types';

interface ModuleDetailProps {
  module: ProductModule;
  productName: string;
  themeColor: 'green' | 'blue';
  onBack: () => void;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, productName, themeColor, onBack }) => {
  const isGreen = themeColor === 'green';
  const accentColor = isGreen ? 'text-green-400' : 'text-blue-400';
  const bgAccentColor = isGreen ? 'bg-green-500' : 'bg-blue-500';
  const borderColor = isGreen ? 'border-green-500' : 'border-blue-500';

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background Grid - Blueprint Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className={`group flex items-center gap-2 text-slate-400 hover:${accentColor} transition-colors font-mono text-xs uppercase tracking-widest mb-8`}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système {productName}
        </button>

        {/* Header Block */}
        <div className={`border-l-4 ${borderColor} pl-8 mb-16 relative`}>
           <div className={`absolute -left-[5px] top-0 w-2 h-2 ${bgAccentColor} rounded-full`}></div>
           <div className={`absolute -left-[5px] bottom-0 w-2 h-2 ${bgAccentColor} rounded-full`}></div>
           
           <div className="flex items-center gap-4 mb-2">
             <div className={`p-2 rounded bg-white/5 border border-white/10 ${accentColor}`}>
                {React.cloneElement(module.icon as React.ReactElement<any>, { size: 24 })}
             </div>
             <span className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Architecture Modulaire // {module.id}</span>
           </div>
           
           <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">
             {module.title}
           </h1>
           <p className={`text-xl font-mono ${accentColor} uppercase tracking-widest`}>
             {module.subtitle}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Technical Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="hud-panel p-8 bg-slate-900/50">
               <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                 <Activity size={18} className={accentColor} /> 
                 Protocole Opérationnel
               </h3>
               <p className="text-slate-300 leading-loose font-light whitespace-pre-wrap">
                 {module.fullDescription}
               </p>
            </div>

            {/* System Architecture */}
            <div className="hud-panel p-8 bg-slate-900/50 relative overflow-hidden">
               {/* Decorative circuitry */}
               <div className={`absolute top-0 right-0 p-12 opacity-5 pointer-events-none ${accentColor}`}>
                  <Cpu size={200} />
               </div>

               <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                 <Layers size={18} className={accentColor} /> 
                 Architecture Système
               </h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l border-white/10 pl-4">
                 {module.architecture}
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {module.keyFeatures?.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-3 p-4 border border-white/5 bg-black/20">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full ${bgAccentColor} shrink-0`}></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                   </div>
                 ))}
               </div>
            </div>

          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Tech Specs Table */}
            <div className="bg-slate-900 border border-white/10 rounded-lg overflow-hidden">
              <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                 <span className="font-mono text-xs text-white uppercase tracking-wider">Spécifications</span>
                 <Settings size={14} className="text-slate-500" />
              </div>
              <div className="divide-y divide-white/5">
                {module.specs?.map((spec, idx) => (
                  <div key={idx} className="p-4 flex flex-col gap-1 hover:bg-white/5 transition-colors">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{spec.label}</span>
                    <span className={`font-mono text-sm ${accentColor}`}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="p-6 border border-white/10 rounded-lg bg-black/40">
               <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                 <Code size={14} /> Stack Technique
               </h4>
               <div className="flex flex-wrap gap-2">
                 {module.techTags.map((tag, idx) => (
                   <span key={idx} className={`px-2 py-1 bg-${themeColor}-500/10 border border-${themeColor}-500/20 text-[10px] text-${themeColor}-400 font-mono rounded`}>
                     {tag}
                   </span>
                 ))}
               </div>
            </div>

            <div className={`p-4 border ${borderColor}/30 bg-${themeColor}-900/10 rounded-lg`}>
               <p className="text-[10px] text-slate-400 font-mono text-center">
                 Ce module est prêt pour le déploiement immédiat via le Core Ecliptix.
               </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};