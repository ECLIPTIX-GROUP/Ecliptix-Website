import React from 'react';
import { ArrowLeft, Share2, Grid, Zap, Activity, Cpu, Hexagon } from 'lucide-react';

interface SwarmIntelligenceProps {
  onBack: () => void;
}

export const SwarmIntelligence: React.FC<SwarmIntelligenceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background FX */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[20%] right-[30%] w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[100px]"></div>
         {/* Hexagon pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMEw2IDEwLjVsNiAxMC41TDE4IDBoLTZ6IiBmaWxsPSIjRkJCZjI0IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] bg-[size:30px_30px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système
        </button>

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-500">
                 <Share2 size={32} />
              </div>
              <span className="text-yellow-500 font-mono text-sm uppercase tracking-[0.3em]">Protocol: Hive-Mind</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Swarm Intelligence</h1>
           <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
             Inspiré par la nature (fourmis, abeilles), notre protocole d'intelligence en essaim permet à des unités autonomes multiples (Drones, Capteurs) de coordonner leurs actions sans contrôleur central.
           </p>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           
           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors group">
              <Hexagon className="text-yellow-500 mb-4 group-hover:rotate-90 transition-transform duration-700" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Auto-Organisation</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Chaque drone prend des décisions basées sur ses voisins immédiats. Le comportement global complexe (couvrir un champ) émerge de règles locales simples.
              </p>
           </div>

           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors group">
              <Activity className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Résilience (Fault Tolerance)</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Si un drone tombe en panne, l'essaim se reconfigure instantanément pour combler le vide. La mission continue sans interruption.
              </p>
           </div>

           <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:bg-slate-900 transition-colors group">
              <Zap className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-2">Évolutivité (Scalability)</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Ajoutez 10 ou 1000 drones au réseau, le protocole reste le même. La puissance de calcul est distribuée, pas centralisée.
              </p>
           </div>

        </div>

        {/* Use Case Visual */}
        <div className="bg-slate-900 border border-yellow-500/30 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Application: PESTFLY Swarm</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Dans nos opérations agricoles, nous ne pilotons pas les drones individuellement. Nous donnons un objectif à l'essaim ("Scanner Zone A"). Les drones négocient entre eux les trajectoires optimales, évitent les collisions et partagent les données de détection en temps réel via un réseau Mesh.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="flex items-center gap-2 text-xs font-mono text-yellow-500">
                    <Grid size={14} /> Mesh Network v2
                 </div>
                 <div className="flex items-center gap-2 text-xs font-mono text-yellow-500">
                    <Cpu size={14} /> Distributed Compute
                 </div>
              </div>
           </div>
           
           {/* Visual Nodes */}
           <div className="w-64 h-64 relative">
              {[...Array(6)].map((_, i) => (
                 <div 
                   key={i}
                   className="absolute w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#eab308]"
                   style={{
                      top: `${50 + 35 * Math.sin(i * (Math.PI / 3))}%`,
                      left: `${50 + 35 * Math.cos(i * (Math.PI / 3))}%`,
                      animationDelay: `${i * 0.2}s`
                   }}
                 ></div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-yellow-500/30 rounded-full animate-spin-slow"></div>
              <svg className="absolute inset-0 w-full h-full text-yellow-500/20">
                 <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="currentColor" strokeWidth="1" />
                 <line x1="50%" y1="50%" x2="32.5%" y2="80.3%" stroke="currentColor" strokeWidth="1" />
                 <line x1="50%" y1="50%" x2="32.5%" y2="19.7%" stroke="currentColor" strokeWidth="1" />
              </svg>
           </div>
        </div>

      </div>
    </div>
  );
};