
import React from 'react';
import { ArrowLeft, CheckCircle2, Clock, FileText, Settings, Target, Zap, ChevronRight, Layers, PenTool, Cpu, Activity, Hexagon } from 'lucide-react';
import { ProcessStep } from '../types';

interface ProcessDetailProps {
  step: ProcessStep;
  onBack: () => void;
}

export const ProcessDetail: React.FC<ProcessDetailProps> = ({ step, onBack }) => {
  
  // Dynamic styles based on color theme
  const getThemeClasses = () => {
    switch (step.color) {
      case 'orange': return { text: 'text-ecliptix-orange', bg: 'bg-ecliptix-orange', border: 'border-ecliptix-orange', shadow: 'shadow-orange-500/20', gradient: 'from-orange-500/20' };
      case 'blue': return { text: 'text-blue-400', bg: 'bg-blue-500', border: 'border-blue-500', shadow: 'shadow-blue-500/20', gradient: 'from-blue-500/20' };
      case 'green': return { text: 'text-green-400', bg: 'bg-green-500', border: 'border-green-500', shadow: 'shadow-green-500/20', gradient: 'from-green-500/20' };
      case 'purple': return { text: 'text-purple-400', bg: 'bg-purple-500', border: 'border-purple-500', shadow: 'shadow-purple-500/20', gradient: 'from-purple-500/20' };
      default: return { text: 'text-white', bg: 'bg-white', border: 'border-white', shadow: 'shadow-white/20', gradient: 'from-white/20' };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Dynamic Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className={`absolute top-[-10%] right-[-10%] w-[800px] h-[800px] ${theme.bg}/10 rounded-full blur-[150px]`}></div>
         <div className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] ${theme.bg}/5 rounded-full blur-[120px]`}></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className={`group flex items-center gap-2 text-slate-400 hover:${theme.text} transition-colors font-mono text-xs uppercase tracking-widest mb-12`}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour Séquence
        </button>

        {/* Cinematic Header */}
        <div className="relative mb-20">
           {/* Giant Background Number */}
           <div className={`absolute -top-20 -left-10 text-[200px] md:text-[300px] font-black ${theme.text} opacity-[0.03] select-none pointer-events-none leading-none z-0`}>
              {step.number}
           </div>

           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <span className={`px-3 py-1 rounded-full bg-white/5 border ${theme.border}/30 ${theme.text} text-[10px] font-mono uppercase tracking-[0.2em] backdrop-blur-sm`}>
                       Phase Active
                    </span>
                    <div className={`h-px w-12 ${theme.bg}/50`}></div>
                 </div>
                 
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                   {step.title}
                 </h1>
                 
                 <p className={`text-2xl font-light ${theme.text} font-mono mb-8`}>
                   // {step.subtitle}
                 </p>

                 <p className="text-lg text-slate-300 font-light leading-relaxed border-l-2 border-white/10 pl-6 max-w-xl">
                   {step.fullDescription}
                 </p>
              </div>

              {/* Holographic Visualizer */}
              <div className="relative h-[400px] w-full bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden flex items-center justify-center group">
                 {/* Scanline */}
                 <div className={`absolute top-0 left-0 w-full h-1 ${theme.bg} opacity-50 animate-[scan_3s_linear_infinite]`}></div>
                 
                 {/* Central Element */}
                 <div className="relative z-10">
                    <div className={`w-40 h-40 rounded-full border-2 ${theme.border} flex items-center justify-center relative`}>
                       <div className={`absolute inset-0 ${theme.bg} opacity-10 rounded-full animate-ping`}></div>
                       <div className={`absolute -inset-4 border border-dashed ${theme.border}/50 rounded-full animate-[spin_10s_linear_infinite]`}></div>
                       <div className={`absolute -inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_reverse_infinite]`}></div>
                       
                       {React.cloneElement(step.icon as React.ReactElement<any>, { size: 64, className: theme.text })}
                    </div>
                 </div>

                 {/* Data Points */}
                 <div className="absolute bottom-8 left-8">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Durée de Phase</div>
                    <div className={`text-2xl font-bold text-white flex items-center gap-2`}>
                       <Clock size={20} className={theme.text} /> {step.duration}
                    </div>
                 </div>

                 <div className="absolute top-8 right-8">
                    <Activity className={`${theme.text} animate-pulse`} size={24} />
                 </div>
              </div>
           </div>
        </div>

        {/* Bento Grid Layout for Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
           
           {/* Objectives Card (Large) */}
           <div className="md:col-span-8 p-8 rounded-3xl bg-slate-900/60 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg}/10 blur-3xl rounded-full group-hover:blur-2xl transition-all`}></div>
              
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                 <div className={`p-2 rounded-lg ${theme.bg}/10 ${theme.text}`}>
                    <Target size={20} />
                 </div>
                 Objectifs Stratégiques
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {step.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                       <div className={`mt-1.5 w-2 h-2 rounded-full ${theme.bg} shadow-[0_0_10px_currentColor] shrink-0`}></div>
                       <span className="text-slate-300 text-sm leading-relaxed">{obj}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Tools Card (Sidebar) */}
           <div className="md:col-span-4 p-8 rounded-3xl bg-black/40 border border-white/10 flex flex-col relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                 <div className={`p-2 rounded-lg ${theme.bg}/10 ${theme.text}`}>
                    <Settings size={20} />
                 </div>
                 Arsenal & Outils
              </h3>
              
              <div className="flex flex-wrap gap-2 content-start">
                 {step.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-default">
                       {tool}
                    </span>
                 ))}
              </div>
              
              <div className="mt-auto pt-8">
                 <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase">
                    <Cpu size={12} /> Tech Stack Verified
                 </div>
              </div>
           </div>

           {/* Methodology (Full Width) */}
           <div className="md:col-span-12 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-black border border-white/10 relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${theme.bg}`}></div>
              <div className="absolute right-0 top-0 p-12 opacity-5 pointer-events-none">
                 <Layers size={200} className="text-white" />
              </div>

              <div className="relative z-10 max-w-4xl">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <PenTool size={24} className={theme.text} /> Méthodologie Appliquée
                 </h3>
                 <div className="text-lg text-slate-300 font-light leading-loose whitespace-pre-line">
                    {step.methodology}
                 </div>
              </div>
           </div>

           {/* Deliverables (Grid) */}
           <div className="md:col-span-12">
              <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 ml-2">Livrables de Sortie (Output)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                 {step.deliverables.map((del, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-${theme.border} transition-all group cursor-default`}>
                       <div className={`mb-4 ${theme.text} opacity-50 group-hover:opacity-100 transition-opacity`}>
                          <FileText size={24} />
                       </div>
                       <p className="text-sm font-medium text-white group-hover:translate-x-1 transition-transform">{del}</p>
                    </div>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};
