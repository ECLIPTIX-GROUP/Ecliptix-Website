import React from 'react';
import { ArrowLeft, Lock, ShieldCheck, Key, RefreshCcw, Server, FileLock } from 'lucide-react';

interface QuantumEncryptionProps {
  onBack: () => void;
}

export const QuantumEncryption: React.FC<QuantumEncryptionProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background FX */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>
         {/* Matrix rain effect simplified */}
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(0deg,transparent_24%,rgba(59,130,246,0.3)_25%,rgba(59,130,246,0.3)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.3)_75%,rgba(59,130,246,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.3)_25%,rgba(59,130,246,0.3)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.3)_75%,rgba(59,130,246,0.3)_76%,transparent_77%,transparent)] bg-[size:30px_30px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système
        </button>

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
                 <Lock size={32} />
              </div>
              <span className="text-blue-400 font-mono text-sm uppercase tracking-[0.3em]">Protocol: Zero-Trust</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Quantum Encryption</h1>
           <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
             Préparer l'infrastructure africaine à l'ère post-quantique. Nous développons des standards de chiffrement résistants aux attaques par force brute des futurs supercalculateurs.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           
           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors">
              <Key className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Cryptographie Post-Quantique</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Utilisation d'algorithmes à base de réseaux euclidiens (Lattice-based cryptography) pour sécuriser les clés privées contre la factorisation quantique (Shor's algorithm).
              </p>
           </div>

           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors">
              <RefreshCcw className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Renouvellement Dynamique</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Rotation automatique des clés de session toutes les 60 secondes. Même si une clé est compromise, l'intégrité de la session globale reste intacte.
              </p>
           </div>

           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors">
              <Server className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Stockage Décentralisé</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Fragmentation des données sensibles (Sharding) réparties sur plusieurs nœuds géographiquement distants. Aucune donnée complète ne réside sur un seul serveur.
              </p>
           </div>

        </div>

        {/* Security Alert Visual */}
        <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8">
           <div className="w-32 h-32 relative flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-4 border-dashed border-blue-500/40 rounded-full animate-spin-reverse"></div>
              <ShieldCheck size={48} className="text-blue-400 relative z-10" />
           </div>
           <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Standard AES-4096 GCM</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Actuellement, toutes les communications Ecliptix utilisent le standard AES-4096 en mode Galois/Counter (GCM) pour une confidentialité et une intégrité parfaites. C'est le double du standard militaire actuel.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 font-mono text-xs uppercase">
                 <FileLock size={14} /> Status: Unbreakable
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};