import React from 'react';
import { Network, Share2, Handshake, ArrowRight, Building2, Globe, Cpu, ShieldCheck } from 'lucide-react';

const partners = [
  { 
    name: "APNA", 
    logo: "https://tse4.mm.bing.net/th/id/OIP.C3OEJJn36aWZ9rWgpbbzxQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    type: "Institutionnel",
    desc: "Agence de Promotion du Numérique"
  },
  { 
    name: "AI Hub Senegal", 
    logo: "https://mlss-senegal.github.io/images/aihubs_logo.png",
    type: "Écosystème",
    desc: "Communauté IA & Data" 
  },
  { 
    name: "HEC Paris", 
    logo: "https://tse1.mm.bing.net/th/id/OIP._wUvrdl-NUO9rslmBXDHbwHaFG?rs=1&pid=ImgDetMain&o=7&rm=3",
    type: "Académique",
    desc: "Excellence & Innovation"
  },
  { 
    name: "Haske Ventures", 
    logo: "https://th.bing.com/th/id/R.afe427193b33dfb6663af1bcea1defdc?rik=c%2fq7%2fx3iMWdgIw&pid=ImgRaw&r=0",
    type: "Investissement",
    desc: "Venture Builder Sahel"
  },
  { 
    name: "FORCE N", 
    logo: "https://i.ytimg.com/vi/AZydr3Yxq6k/hqdefault.jpg",
    type: "Formation",
    desc: "Insertion Numérique"
  },
  { 
    name: "Ignite.e", 
    logo: "https://media.licdn.com/dms/image/D4E0BAQF2DQiOH2Uj-A/company-logo_200_200/0/1693221738745?e=2147483647&v=beta&t=KlMG23xu1RMLIntxkjjaYMQqfuoW1TnwKmuFyjLYNes",
    type: "Accélérateur",
    desc: "Croissance Startup"
  }
];

interface PartnersProps {
  onBecomePartner?: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ onBecomePartner }) => {
  return (
    <section className="py-24 border-t border-white/5 relative bg-black/40 backdrop-blur-sm z-10 overflow-hidden">
      
      {/* Background Mesh Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_60%)]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <Network size={14} className="text-ecliptix-orange" />
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Alliance Network</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Coalition <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecliptix-orange to-white">Stratégique</span></h2>
           <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg">
             Nous tissons une toile d'intelligence collective avec les entités les plus influentes pour accélérer la souveraineté numérique de l'Afrique.
           </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900/40 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-slate-900/80 hover:border-ecliptix-orange/30 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-ecliptix-orange/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Logo Container */}
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg shrink-0 relative z-10 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="relative z-10">
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-ecliptix-orange transition-colors">{partner.name}</h4>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded w-fit bg-black/40">
                     {partner.type}
                   </span>
                   <span className="text-xs text-slate-400 font-light">{partner.desc}</span>
                </div>
              </div>
              
              {/* Connector Line */}
              <div className="absolute right-0 top-1/2 w-8 h-px bg-gradient-to-l from-white/10 to-transparent group-hover:from-ecliptix-orange/50 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* CTA: Become a Partner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-black">
           {/* Decorative Elements */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ecliptix-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
              
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ecliptix-orange/20 to-blue-500/20 flex items-center justify-center border border-white/10">
                       <Handshake className="text-white" size={24} />
                    </div>
                    <span className="text-white font-bold text-lg uppercase tracking-wider">Rejoindre le Réseau</span>
                 </div>
                 
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                   Construisons ensemble l'infrastructure du futur.
                 </h3>
                 
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                   Que vous soyez une startup tech, une ONG internationale ou un investisseur, Ecliptix offre un terrain d'innovation unique. Connectez vos ressources à notre technologie.
                 </p>

                 <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded border border-white/5 text-xs text-slate-300">
                       <Cpu size={14} className="text-blue-400"/> Co-R&D
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded border border-white/5 text-xs text-slate-300">
                       <Globe size={14} className="text-green-400"/> Impact Terrain
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded border border-white/5 text-xs text-slate-300">
                       <Building2 size={14} className="text-purple-400"/> Joint-Venture
                    </div>
                 </div>

                 <button 
                   onClick={onBecomePartner}
                   className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-slate-200 transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                 >
                   Devenir Partenaire <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

              <div className="relative hidden lg:block">
                 {/* Abstract Network Visualization */}
                 <div className="aspect-square rounded-2xl bg-black/50 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                    
                    {/* Central Node */}
                    <div className="w-24 h-24 bg-black border-2 border-white rounded-full flex items-center justify-center relative z-20 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                       <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEDRW1wrkNA2g/company-logo_200_200/B4EZn_LZ1.GoAI-/0/1760922804191/ecliptix_group_logo?e=1766620800&v=beta&t=OGsYnzsuE3yGLA6ETAM_rzujDpAqoM2_kEmwBpr8Q44" className="w-16 h-16 object-contain opacity-80" alt="Ecliptix"/>
                    </div>

                    {/* Orbiting Nodes */}
                    <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                       <div className="absolute top-10 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
                       <div className="absolute bottom-20 right-20 w-2 h-2 bg-ecliptix-orange rounded-full shadow-[0_0_15px_#fb923c]"></div>
                       <div className="absolute top-1/2 left-10 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]"></div>
                    </div>
                    
                    {/* Rings */}
                    <div className="absolute inset-10 border border-white/10 rounded-full"></div>
                    <div className="absolute inset-20 border border-dashed border-white/20 rounded-full"></div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};