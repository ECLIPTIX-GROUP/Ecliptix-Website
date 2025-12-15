
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Cpu, Activity, Database, Zap, Settings, Code, Layers, Terminal, BarChart, Wifi, Shield, Box, ChevronRight, Copy, Check } from 'lucide-react';
import { ProductModule } from '../types';

interface ModuleDetailProps {
  module: ProductModule;
  productName: string;
  themeColor: 'green' | 'blue' | 'purple' | 'orange';
  onBack: () => void;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, productName, themeColor, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'integration'>('overview');
  const [copied, setCopied] = useState(false);

  // Theme Logic
  const getTheme = () => {
    switch(themeColor) {
      case 'green': return { 
        accent: 'text-green-400', 
        bgAccent: 'bg-green-500', 
        border: 'border-green-500', 
        bgSoft: 'bg-green-500/10',
        shadow: 'shadow-green-500/20',
        gradient: 'from-green-500/20'
      };
      case 'purple': return { 
        accent: 'text-purple-400', 
        bgAccent: 'bg-purple-500', 
        border: 'border-purple-500', 
        bgSoft: 'bg-purple-500/10',
        shadow: 'shadow-purple-500/20',
        gradient: 'from-purple-500/20'
      };
      case 'orange': return { 
        accent: 'text-orange-400', 
        bgAccent: 'bg-orange-500', 
        border: 'border-orange-500', 
        bgSoft: 'bg-orange-500/10',
        shadow: 'shadow-orange-500/20',
        gradient: 'from-orange-500/20'
      };
      default: return { 
        accent: 'text-blue-400', 
        bgAccent: 'bg-blue-500', 
        border: 'border-blue-500', 
        bgSoft: 'bg-blue-500/10',
        shadow: 'shadow-blue-500/20',
        gradient: 'from-blue-500/20'
      };
    }
  };

  const theme = getTheme();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Dynamic Blueprint Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className={`absolute top-0 right-0 w-[600px] h-[600px] ${theme.bgAccent} opacity-5 rounded-full blur-[150px]`}></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBack}
            className={`group flex items-center gap-2 text-slate-400 hover:${theme.accent} transition-colors font-mono text-xs uppercase tracking-widest`}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour système
          </button>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
             <div className={`w-2 h-2 rounded-full ${theme.bgAccent} animate-pulse`}></div>
             <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">System Online</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-xl mb-8 group">
           <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} to-transparent opacity-50`}></div>
           <div className={`absolute bottom-0 left-0 w-full h-1 ${theme.bgAccent}`}></div>
           
           <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className={`p-2 rounded-lg bg-black/40 border border-white/10 ${theme.accent}`}>
                          {React.cloneElement(module.icon as React.ReactElement<any>, { size: 24 })}
                       </div>
                       <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.2em]">{productName} // {module.id}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">{module.title}</h1>
                    <p className={`text-xl font-mono ${theme.accent} uppercase tracking-widest opacity-90`}>{module.subtitle}</p>
                 </div>

                 {/* Telemetry Bar */}
                 <div className="grid grid-cols-3 gap-4 md:gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
                    <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 flex items-center gap-1"><Activity size={10}/> Latency</div>
                       <div className="text-white font-bold font-mono">12<span className="text-xs text-slate-500 ml-1">ms</span></div>
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 flex items-center gap-1"><Wifi size={10}/> Uptime</div>
                       <div className="text-green-400 font-bold font-mono">99.9<span className="text-xs text-slate-500 ml-1">%</span></div>
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 flex items-center gap-1"><Database size={10}/> Load</div>
                       <div className="text-blue-400 font-bold font-mono">45<span className="text-xs text-slate-500 ml-1">%</span></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (Main) */}
          <div className="lg:col-span-8 space-y-8">
             
             {/* Tabs */}
             <div className="flex gap-4 border-b border-white/10 pb-1">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'overview' ? `${theme.border} text-white` : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                >
                  Vue d'ensemble
                </button>
                <button 
                  onClick={() => setActiveTab('integration')}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'integration' ? `${theme.border} text-white` : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                >
                  Integration & Code
                </button>
             </div>

             {activeTab === 'overview' ? (
               <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
                  {/* Description Card */}
                  <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                     <div className={`absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-white`}>
                        <Layers size={140} />
                     </div>
                     <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Zap size={18} className={theme.accent} /> Protocole Opérationnel
                     </h3>
                     <p className="text-slate-300 leading-loose text-sm whitespace-pre-wrap relative z-10">
                        {module.fullDescription}
                     </p>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
                     <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Cpu size={18} className={theme.accent} /> Architecture Système
                     </h3>
                     <p className="text-slate-400 text-xs mb-8 border-l-2 border-white/10 pl-4 italic">
                        {module.architecture}
                     </p>
                     
                     {/* Flow Visualization */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="p-4 bg-slate-800 rounded-lg border border-white/5 text-center">
                           <div className="text-[10px] text-slate-500 uppercase mb-2">Input Source</div>
                           <div className="text-white font-bold text-sm">Données Brutes</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 text-slate-600">
                           <div className={`w-1 h-8 ${theme.bgAccent} md:w-full md:h-1`}></div>
                           <ChevronRight className="rotate-90 md:rotate-0" size={16} />
                        </div>
                        <div className={`p-4 bg-slate-900 rounded-lg border ${theme.border} text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                           <div className={`text-[10px] ${theme.accent} uppercase mb-2`}>Processing Core</div>
                           <div className="text-white font-bold text-sm">{module.title} Engine</div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 text-slate-600">
                           <div className={`w-1 h-8 ${theme.bgAccent} md:w-full md:h-1`}></div>
                           <ChevronRight className="rotate-90 md:rotate-0" size={16} />
                        </div>
                        <div className="p-4 bg-slate-800 rounded-lg border border-white/5 text-center">
                           <div className="text-[10px] text-slate-500 uppercase mb-2">Output Target</div>
                           <div className="text-white font-bold text-sm">Action / Insight</div>
                        </div>
                     </div>
                  </div>

                  {/* Key Features Grid */}
                  <div>
                     <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Capacités Activées</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {module.keyFeatures?.map((feature, idx) => (
                           <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                              <div className={`mt-1 w-2 h-2 rounded-sm ${theme.bgAccent} group-hover:scale-125 transition-transform`}></div>
                              <span className="text-slate-300 text-sm">{feature}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
             ) : (
               <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
                  {/* Mock Terminal */}
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] font-mono text-xs shadow-2xl relative group">
                     <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                        <div className="flex gap-1.5">
                           <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-slate-500">terminal — ecliptix-cli</div>
                        <button onClick={handleCopy} className="text-slate-500 hover:text-white transition-colors">
                           {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        </button>
                     </div>
                     <div className="p-6 text-slate-300 space-y-4">
                        <div>
                           <div className="flex gap-2 mb-1">
                              <span className="text-green-400">root@ecliptix:~$</span>
                              <span className="text-white">pip install ecliptix-core</span>
                           </div>
                           <div className="text-slate-500 pl-4">
                              Downloading packages... 100%<br/>
                              Successfully installed ecliptix-core-2.4.0
                           </div>
                        </div>
                        
                        <div>
                           <div className="flex gap-2 mb-1">
                              <span className="text-green-400">root@ecliptix:~$</span>
                              <span className="text-white">ecliptix init --module="{module.id}"</span>
                           </div>
                           <div className="text-blue-400 pl-4 animate-pulse">
                              {'>'} Initializing Neural Interface... <br/>
                              {'>'} Loading Model Weights ({themeColor} channel)... <br/>
                              {'>'} Establishing Satellite Uplink... <br/>
                           </div>
                           <div className="text-green-400 pl-4 mt-2 font-bold">
                              {'>'} SYSTEM READY. Listening on port 8080.
                           </div>
                        </div>

                        <div className="flex gap-2">
                           <span className="text-green-400">root@ecliptix:~$</span>
                           <span className="w-2 h-4 bg-slate-500 animate-pulse"></span>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-4">
                     <Shield className="text-yellow-500 shrink-0" size={24} />
                     <div>
                        <h4 className="text-yellow-500 font-bold text-sm uppercase mb-1">Authentification Requise</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                           L'accès à l'API de ce module nécessite une clé d'API entreprise valide. Contactez le QG pour obtenir vos identifiants de production.
                        </p>
                     </div>
                  </div>
               </div>
             )}

          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
             
             {/* Tech Stack */}
             <div className="bg-slate-900 border border-white/10 rounded-xl p-6">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                   <Code size={14} /> Stack Technique
                </h4>
                <div className="flex flex-wrap gap-2">
                   {module.techTags.map((tag, idx) => (
                      <span key={idx} className={`px-3 py-1.5 ${theme.bgSoft} border ${theme.border}/30 text-[10px] ${theme.accent} font-mono rounded hover:bg-white/5 transition-colors cursor-default`}>
                         {tag}
                      </span>
                   ))}
                </div>
             </div>

             {/* Specs Table */}
             <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                   <span className="font-mono text-xs text-white uppercase tracking-wider flex items-center gap-2">
                      <Settings size={14} /> Spécifications
                   </span>
                </div>
                <div className="divide-y divide-white/5">
                   {module.specs?.map((spec, idx) => (
                      <div key={idx} className="p-4 flex justify-between items-center hover:bg-white/5 transition-colors">
                         <span className="text-[10px] font-mono text-slate-500 uppercase">{spec.label}</span>
                         <span className={`font-mono text-xs font-bold text-white`}>{spec.value}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Action Box */}
             <div className={`p-6 rounded-xl border ${theme.border}/30 bg-gradient-to-b ${theme.gradient} to-transparent text-center`}>
                <div className="w-16 h-16 mx-auto bg-black/40 rounded-full flex items-center justify-center border border-white/10 mb-4 shadow-lg">
                   <Box size={24} className={theme.accent} />
                </div>
                <h4 className="text-white font-bold mb-2">Prêt à déployer ?</h4>
                <p className="text-xs text-slate-400 mb-6">Activez ce module sur votre instance Ecliptix dès aujourd'hui.</p>
                <button className={`w-full py-3 ${theme.bgAccent} hover:opacity-90 text-black font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg ${theme.shadow}`}>
                   Configurer Module
                </button>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};
