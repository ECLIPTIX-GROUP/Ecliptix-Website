import React from 'react';
import { ArrowLeft, BrainCircuit, Network, Activity, GitGraph, Share2, Zap } from 'lucide-react';

interface NeuralMappingProps {
  onBack: () => void;
}

export const NeuralMapping: React.FC<NeuralMappingProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background FX */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-ecliptix-orange/5 rounded-full blur-[100px]"></div>
         {/* Grid overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système
        </button>

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-ecliptix-orange/10 border border-ecliptix-orange/30 rounded-lg text-ecliptix-orange">
                 <BrainCircuit size={32} />
              </div>
              <span className="text-ecliptix-orange font-mono text-sm uppercase tracking-[0.3em]">Protocol: Synapse-X</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Neural Mapping</h1>
           <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
             La cartographie neuronale est notre méthodologie propriétaire pour visualiser, analyser et optimiser les flux de données complexes au sein d'une organisation, mimant le fonctionnement du cerveau humain.
           </p>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           
           <div className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-ecliptix-orange/50 transition-all group">
              <Network size={40} className="text-slate-500 group-hover:text-ecliptix-orange mb-6 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-4">Topologie des Données</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Avant de déployer une IA, nous devons comprendre le territoire. Nous créons un jumeau numérique de votre infrastructure de données, identifiant chaque nœud (serveur, API, base de données) et chaque connexion synaptique (flux de données).
              </p>
           </div>

           <div className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-ecliptix-orange/50 transition-all group">
              <Activity size={40} className="text-slate-500 group-hover:text-ecliptix-orange mb-6 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-4">Diagnostic en Temps Réel</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Comme un IRM pour votre entreprise. Notre système détecte les "caillots" numériques (goulots d'étranglement), les zones mortes et les opportunités d'accélération neuronale (automatisation).
              </p>
           </div>

        </div>

        {/* Interactive Visualization Mockup */}
        <div className="bg-black border border-white/10 rounded-2xl p-2 mb-16 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ecliptix-orange via-transparent to-transparent"></div>
           <div className="bg-slate-900/80 rounded-xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Animated Nodes */}
              <div className="absolute inset-0">
                 {[...Array(20)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute bg-ecliptix-orange/30 rounded-full animate-pulse"
                      style={{
                         top: `${Math.random() * 100}%`,
                         left: `${Math.random() * 100}%`,
                         width: `${Math.random() * 10 + 2}px`,
                         height: `${Math.random() * 10 + 2}px`,
                         animationDelay: `${Math.random() * 2}s`
                      }}
                    ></div>
                 ))}
                 <svg className="absolute inset-0 w-full h-full opacity-20">
                    <line x1="10%" y1="10%" x2="50%" y2="50%" stroke="#fb923c" strokeWidth="1" />
                    <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="#fb923c" strokeWidth="1" />
                    <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#fb923c" strokeWidth="1" />
                 </svg>
              </div>
              <div className="relative z-10 text-center">
                 <div className="w-20 h-20 bg-black border-2 border-ecliptix-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_#fb923c]">
                    <GitGraph size={32} className="text-white" />
                 </div>
                 <h4 className="text-white font-mono uppercase tracking-widest text-xs">Visualisation du Cortex</h4>
                 <p className="text-ecliptix-orange text-xs mt-2">Nœuds actifs: 4,092</p>
              </div>
           </div>
        </div>

        <div className="bg-slate-900/30 border-l-4 border-ecliptix-orange p-8">
           <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
             <Zap size={18} className="text-ecliptix-orange" /> L'Avantage Ecliptix
           </h3>
           <p className="text-slate-400 text-sm leading-relaxed">
             La plupart des entreprises empilent des logiciels (Silos). Nous construisons un système nerveux centralisé où chaque donnée est accessible instantanément par l'intelligence artificielle, permettant une prise de décision réflexe.
           </p>
        </div>

      </div>
    </div>
  );
};