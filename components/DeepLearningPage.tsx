import React from 'react';
import { ArrowLeft, Cpu, Brain, Layers, GitMerge, Bot, Database, Sparkles } from 'lucide-react';

interface DeepLearningPageProps {
  onBack: () => void;
}

export const DeepLearningPage: React.FC<DeepLearningPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background FX */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[100px]"></div>
         {/* Neural network lines */}
         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système
        </button>

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400">
                 <Brain size={32} />
              </div>
              <span className="text-purple-400 font-mono text-sm uppercase tracking-[0.3em]">Core: Cortex-V4</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Deep Learning</h1>
           <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
             Au cœur d'Ecliptix réside une architecture de réseaux de neurones profonds capable d'apprendre, de s'adapter et de raisonner sur des données complexes non structurées.
           </p>
        </div>

        {/* Architecture Diagram (Conceptual) */}
        <div className="mb-20">
           <h3 className="text-white font-bold text-lg mb-8 text-center uppercase tracking-widest">Architecture Neuronale Multi-Modale</h3>
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              
              <div className="p-6 bg-slate-900 border border-white/10 rounded-xl w-64">
                 <Database className="mx-auto mb-4 text-slate-500" />
                 <h4 className="text-white font-bold mb-2">Input Layer</h4>
                 <p className="text-xs text-slate-500">Images Satellites, Audio Wolof, Texte, Données IoT</p>
              </div>

              <div className="hidden md:flex flex-col gap-2">
                 <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                 <div className="w-16 h-0.5 bg-gradient-to-r from-slate-500 to-purple-500"></div>
              </div>

              <div className="p-6 bg-slate-900 border-2 border-purple-500/50 rounded-xl w-64 relative shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                 <div className="absolute -top-3 -right-3 bg-purple-500 text-black text-[10px] font-bold px-2 py-1 rounded">Hidden Layers</div>
                 <Layers className="mx-auto mb-4 text-purple-400" />
                 <h4 className="text-white font-bold mb-2">Transformer Engine</h4>
                 <p className="text-xs text-slate-400">Attention Mechanism, Fine-Tuning, Context Windows</p>
              </div>

              <div className="hidden md:flex flex-col gap-2">
                 <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-ecliptix-orange"></div>
                 <div className="w-2 h-2 bg-ecliptix-orange rounded-full animate-ping delay-100"></div>
              </div>

              <div className="p-6 bg-slate-900 border border-white/10 rounded-xl w-64">
                 <Sparkles className="mx-auto mb-4 text-ecliptix-orange" />
                 <h4 className="text-white font-bold mb-2">Output Layer</h4>
                 <p className="text-xs text-slate-500">Diagnostic, Prédiction, Génération de Texte/Audio</p>
              </div>

           </div>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           <div className="flex gap-4">
              <div className="mt-1">
                 <div className="p-2 bg-white/5 rounded text-purple-400"><GitMerge size={20} /></div>
              </div>
              <div>
                 <h4 className="text-white font-bold text-lg mb-2">Apprentissage par Transfert</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Nous ne réinventons pas la roue. Nous partons de modèles SOTA (State of the Art) comme GPT-4 ou Vision Transformers, et nous les "affinons" (Fine-Tuning) sur nos datasets africains propriétaires.
                 </p>
              </div>
           </div>

           <div className="flex gap-4">
              <div className="mt-1">
                 <div className="p-2 bg-white/5 rounded text-purple-400"><Bot size={20} /></div>
              </div>
              <div>
                 <h4 className="text-white font-bold text-lg mb-2">IA Générative (LLM)</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Nos modèles ne se contentent pas de classifier ; ils créent. Génération de rapports agronomiques, rédaction d'emails marketing, synthèse vocale en langues locales.
                 </p>
              </div>
           </div>

           <div className="flex gap-4">
              <div className="mt-1">
                 <div className="p-2 bg-white/5 rounded text-purple-400"><Cpu size={20} /></div>
              </div>
              <div>
                 <h4 className="text-white font-bold text-lg mb-2">Edge Computing (TinyML)</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   La puissance du Cloud, sans le Cloud. Nous compressons nos modèles (Quantization) pour qu'ils tournent directement sur les drones et les smartphones, sans internet.
                 </p>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
};