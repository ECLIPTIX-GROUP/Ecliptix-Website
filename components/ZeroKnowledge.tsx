import React from 'react';
import { ArrowLeft, EyeOff, Shield, FileCheck, Lock, Binary, KeyRound } from 'lucide-react';

interface ZeroKnowledgeProps {
  onBack: () => void;
}

export const ZeroKnowledge: React.FC<ZeroKnowledgeProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background FX */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute bottom-[20%] left-[20%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
         {/* Binary rain */}
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système
        </button>

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">
                 <EyeOff size={32} />
              </div>
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">Protocol: ZK-Snarks</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Zero-Knowledge Proofs</h1>
           <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
             Prouver la vérité sans révéler l'information. Nos systèmes permettent de valider des données (identité, solvabilité, conformité) sans jamais exposer les données brutes sous-jacentes.
           </p>
        </div>

        {/* Interactive Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
           <div>
              <h3 className="text-2xl font-bold text-white mb-6">Le Paradoxe de la Confidentialité</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Traditionnellement, pour prouver que vous avez l'âge légal, vous montrez votre carte d'identité, révélant aussi votre nom, adresse et date de naissance exacte. C'est une fuite de données inutile.
              </p>
              <div className="bg-cyan-900/20 border border-cyan-500/30 p-6 rounded-xl">
                 <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                    <Shield size={18} /> La Solution Ecliptix
                 </h4>
                 <p className="text-sm text-slate-300">
                   Avec ZK-Proofs, nous générons une preuve cryptographique mathématique qui dit "VRAI" à la question "A-t-il plus de 18 ans ?", sans jamais transmettre la date de naissance.
                 </p>
              </div>
           </div>

           <div className="relative h-80 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Animation Placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
              
              <div className="flex items-center gap-8 relative z-10">
                 <div className="text-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-white/20 mb-2">
                       <Binary className="text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Donnée Secrète</span>
                 </div>
                 
                 <div className="flex flex-col items-center">
                    <div className="h-px w-16 bg-cyan-500/50 mb-1"></div>
                    <div className="px-2 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded uppercase">Prover</div>
                    <div className="h-px w-16 bg-cyan-500/50 mt-1"></div>
                 </div>

                 <div className="text-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-2">
                       <FileCheck className="text-cyan-400" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Preuve Validée</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors">
              <Lock className="text-cyan-400 mb-4" size={24} />
              <h4 className="text-white font-bold text-sm uppercase mb-2">Identité Numérique</h4>
              <p className="text-xs text-slate-400">Authentification biométrique sans stockage d'empreintes sur nos serveurs.</p>
           </div>
           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors">
              <KeyRound className="text-cyan-400 mb-4" size={24} />
              <h4 className="text-white font-bold text-sm uppercase mb-2">Transactions</h4>
              <p className="text-xs text-slate-400">Validation de paiements mobiles sans révéler le solde ou l'historique du compte.</p>
           </div>
           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors">
              <FileCheck className="text-cyan-400 mb-4" size={24} />
              <h4 className="text-white font-bold text-sm uppercase mb-2">Audits IA</h4>
              <p className="text-xs text-slate-400">Prouver qu'un modèle d'IA a été entraîné correctement sans révéler le dataset propriétaire.</p>
           </div>
        </div>

      </div>
    </div>
  );
};