import React from 'react';
import { GraduationCap, ArrowRight, Code2, Cpu, Rocket, BrainCircuit, Database } from 'lucide-react';

interface AcademyPreviewProps {
  onOpen: () => void;
}

export const AcademyPreview: React.FC<AcademyPreviewProps> = ({ onOpen }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-slate-900/30"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
             <div className="inline-flex items-center gap-2 border border-purple-500/30 px-4 py-1 rounded-full bg-purple-500/5 backdrop-blur-md mb-6 animate-pulse-slow">
               <GraduationCap size={14} className="text-purple-400" />
               <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em]">Centre de Formation</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
               Rejoignez la <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Forge Neuronale</span>
             </h2>
             
             <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-purple-500/30 pl-6">
               Ecliptix Academy n'est pas une école classique. C'est un centre d'entraînement intensif pour la prochaine génération d'ingénieurs africains. Apprenez en construisant des solutions réelles.
             </p>

             <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <Code2 size={20} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">Learning by Doing</h4>
                      <p className="text-xs text-slate-500">70% de pratique sur des projets industriels.</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <Cpu size={20} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">Stack Moderne</h4>
                      <p className="text-xs text-slate-500">Python, Docker, Kubernetes, TensorFlow, Flutter.</p>
                   </div>
                </div>
             </div>

             <button 
               onClick={onOpen}
               className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-purple-50 transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
             >
               Explorer le Catalogue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-purple-600" />
             </button>
          </div>

          {/* Cards Visual */}
          <div className="relative">
             {/* Decorative Elements */}
             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent blur-3xl -z-10"></div>
             
             <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="p-6 bg-slate-900/80 border border-purple-500/30 rounded-2xl hover:-translate-y-2 transition-transform duration-500 shadow-xl backdrop-blur-md">
                   <BrainCircuit size={32} className="text-purple-400 mb-4" />
                   <h3 className="text-white font-bold mb-2">GenAI & LLM</h3>
                   <p className="text-xs text-slate-400 leading-relaxed">Maîtrisez les modèles de langage et créez des agents autonomes.</p>
                </div>

                {/* Card 2 - Offset */}
                <div className="p-6 bg-slate-900/80 border border-blue-500/30 rounded-2xl hover:-translate-y-2 transition-transform duration-500 shadow-xl backdrop-blur-md mt-12">
                   <Database size={32} className="text-blue-400 mb-4" />
                   <h3 className="text-white font-bold mb-2">Data & BI</h3>
                   <p className="text-xs text-slate-400 leading-relaxed">Transformez les données brutes en décisions stratégiques.</p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-slate-900/80 border border-green-500/30 rounded-2xl hover:-translate-y-2 transition-transform duration-500 shadow-xl backdrop-blur-md -mt-12">
                   <Rocket size={32} className="text-green-400 mb-4" />
                   <h3 className="text-white font-bold mb-2">IoT & Drones</h3>
                   <p className="text-xs text-slate-400 leading-relaxed">Connectez le monde physique au cloud. Arduino, ESP32, LoRa.</p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-slate-900/80 border border-white/10 rounded-2xl hover:-translate-y-2 transition-transform duration-500 shadow-xl backdrop-blur-md">
                   <Code2 size={32} className="text-white mb-4" />
                   <h3 className="text-white font-bold mb-2">Backend Ops</h3>
                   <p className="text-xs text-slate-400 leading-relaxed">Django, Docker, Cloud AWS. L'infrastructure robuste.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};