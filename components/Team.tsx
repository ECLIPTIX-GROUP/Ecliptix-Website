
import React from 'react';
import { Linkedin, Shield, Code, Cpu, PenTool, Radio, User, Terminal, Database, Sparkles, ArrowLeft, Building2, MapPin, Mail, Phone, Globe, FileText, CheckCircle2, Target, Eye, Flag, History, ExternalLink, Star } from 'lucide-react';

const teamMembers = [
  {
    name: "Thierno Bocar DIENG",
    role: "CEO & Founder",
    image: "https://avatars.githubusercontent.com/u/86505157?v=4?s=400",
    tags: ["STRATEGY", "LEADERSHIP"],
    icon: <Shield />,
    experience: "8+ ANS EXP",
    link: "https://www.linkedin.com/in/thierno-bocar-dieng-464303212/"
  },
  {
    name: "Woury BA",
    role: "Project Manager",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGmLJLwrcqoJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684341334562?e=1766620800&v=beta&t=X0_J-J2WD_lTo4nSX6Cdxbvex_WSzMMTUTZNAgS7uq8",
    tags: ["AGILE", "PLANNING"],
    icon: <Radio />,
    experience: "8+ ANS EXP",
    link: "https://www.linkedin.com/in/woury-ba-964645224/"
  },
  {
    name: "Cheikh A. Bamba NDOUR",
    role: "CTO & Mobile Dev",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGlv-usJOhtqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731711226868?e=2147483647&v=beta&t=bB-3oZ0E7oWpB_CUxJhwkou9F4ZBT2KkzyTuuetDhnU",
    tags: ["MOBILE", "ARCHITECTURE"],
    icon: <Cpu />,
    experience: "8+ ANS EXP",
    link: "https://www.linkedin.com/in/cheikh-ahmadou-bamba-ndour-906043232/"
  },
  {
    name: "Elimane GNINGUE",
    role: "Architect Logiciel",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQECrmxEjdi48g/profile-framedphoto-shrink_800_800/B4EZlnhm1vIQAg-/0/1758378487480?e=1765929600&v=beta&t=dwQRUMtn1tWpuD08bRVXLjOJcWUk7_dcUIplAUZNcNk",
    tags: ["SYSTEMS", "BACKEND"],
    icon: <Database />,
    experience: "8+ ANS EXP",
    link: "https://www.linkedin.com/in/elimane-gningue/"
  },
  {
    name: "Gabar DIOP",
    role: "AI Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHPiLPzdl5_AQ/profile-displayphoto-shrink_800_800/B4EZWy7szRGgAo-/0/1742463750298?e=1766620800&v=beta&t=TcMMWObUNreMRK4c3ACa9whdQ67eOVQQ-03lB5d0zC8",
    tags: ["ML", "PYTHON"],
    icon: <Terminal />,
    link: "https://www.linkedin.com/in/gabar-diop-5310b4293/"
  },
  {
    name: "Fadal Ndiaye",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGsmi_3J0qqhg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714213901072?e=1766620800&v=beta&t=wWfHcXmET09UqbrqkGuJnPTXwBmiBmR70-9E3FNaLJI",
    tags: ["REACT", "NODE"],
    icon: <Code />,
    link: "https://www.linkedin.com/in/fadal-ndiaye-026829267/"
  },
  {
    name: "Seydina Mohamed DIOP",
    role: "Responsable Design",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQGmj4MPUr7DSA/profile-framedphoto-shrink_800_800/B4EZoMsuvvIwAk-/0/1761149644035?e=1765929600&v=beta&t=TfDCo8IwTH0pKdwyidSexYcVrpgRcc3nv-kiRmRtsf0",
    tags: ["UI/UX", "CREATIVE"],
    icon: <PenTool />,
    link: "https://www.linkedin.com/in/seydina-mohamed-diop-43669116a/"
  },
  {
    name: "Mamadou Coly",
    role: "Community Manager",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEJaHZu6P9djw/profile-displayphoto-shrink_800_800/B4EZVs4E46H0Ac-/0/1741288395183?e=1766620800&v=beta&t=8yo6P2w700CnZ1Kxw73YjJXZ6eQ4jF9fHgFR4Law950",
    tags: ["SOCIAL", "BRAND"],
    icon: <Sparkles />,
    link: "https://www.linkedin.com/in/mamadou-coly-0b44b9264/"
  }
];

interface TeamProps {
  onBack: () => void;
}

export const Team: React.FC<TeamProps> = ({ onBack }) => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-ecliptix-orange/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au QG
        </button>

        {/* Company Identity Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-start">
          
          {/* Official Logo Card */}
          <div className="lg:col-span-1">
            <div className="hud-panel p-8 bg-slate-900/60 flex flex-col items-center text-center relative overflow-hidden group h-full">
               {/* Shine Effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
               
               <div className="w-32 h-32 rounded-2xl bg-white p-4 mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/10 relative z-10">
                 <img 
                   src="https://media.licdn.com/dms/image/v2/D4E0BAQEDRW1wrkNA2g/company-logo_200_200/B4EZn_LZ1.GoAI-/0/1760922804191/ecliptix_group_logo?e=1766620800&v=beta&t=OGsYnzsuE3yGLA6ETAM_rzujDpAqoM2_kEmwBpr8Q44" 
                   alt="Ecliptix Official Logo" 
                   className="w-full h-full object-contain"
                 />
               </div>
               
               <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">ECLIPTIX GROUP</h1>
               <div className="flex items-center gap-2 mb-6">
                 <span className="px-2 py-0.5 bg-ecliptix-orange/20 border border-ecliptix-orange/30 text-ecliptix-orange text-[10px] font-mono uppercase rounded">SASU</span>
                 <span className="text-xs text-slate-400 font-mono">EST. 2025</span>
               </div>

               <div className="w-full h-px bg-white/10 mb-6"></div>

               <div className="space-y-3 w-full text-left">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <MapPin size={14} className="text-ecliptix-orange shrink-0" />
                    <span>Cité Vauvert, Saint Louis, SENEGAL</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Mail size={14} className="text-ecliptix-orange shrink-0" />
                    <span>contact@ecliptix.tech</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Phone size={14} className="text-ecliptix-orange shrink-0" />
                    <span>+221 78 436 35 37</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Globe size={14} className="text-ecliptix-orange shrink-0" />
                    <span>www.ecliptix.tech</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Company Dossier */}
          <div className="lg:col-span-2 space-y-8">
             <div>
               <div className="flex items-center gap-2 mb-4">
                 <Building2 className="text-ecliptix-orange" size={24} />
                 <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Identité Corporative</h2>
               </div>
               <p className="text-slate-300 text-lg leading-relaxed font-light mb-6">
                 Ecliptix est une <strong>Société par Actions Simplifiée Unipersonnelle (SASU)</strong> de droit sénégalais, spécialisée dans le développement de solutions d'Intelligence Artificielle de pointe et l'intégration de systèmes autonomes (Drones, IoT).
               </p>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 Fondée au cœur de la capitale historique Saint-Louis, Ecliptix incarne la renaissance technologique africaine. Notre structure est conçue pour l'agilité et l'innovation rapide, opérant comme un laboratoire de recherche appliquée ("Skunkworks") au service des secteurs vitaux : Agriculture, PME, Santé et Éducation.
               </p>
             </div>

             {/* Registration Details */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Forme Juridique</div>
                  <div className="text-white font-mono font-bold">SASU</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Siège Social</div>
                  <div className="text-white font-mono font-bold">Saint-Louis, Sénégal</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Secteur d'Activité</div>
                  <div className="text-white font-mono font-bold">Ingénierie Informatique & IA</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Statut</div>
                  <div className="flex items-center gap-2 text-green-400 font-mono font-bold">
                    <CheckCircle2 size={14} /> Actif / En Opération
                  </div>
                </div>
             </div>

             {/* EMBEDDED MAP - DARK MODE STYLE */}
             <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 relative group bg-slate-900 shadow-2xl mt-8">
                {/* Map Filters for Dark Mode Look */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="Ecliptix HQ Location"
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=16.034590,-16.468224&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ filter: 'grayscale(100%) invert(100%) contrast(85%) brightness(80%)' }}
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                
                {/* Overlay Markers */}
                <div className="absolute top-3 left-3 bg-black/90 border border-white/20 px-3 py-1 rounded text-[10px] font-mono text-ecliptix-orange shadow-lg flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-ecliptix-orange rounded-full animate-pulse"></div>
                   HQ: Saint-Louis
                </div>

                <a 
                  href="https://maps.google.com/?q=16.034590,-16.468224" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-ecliptix-orange hover:bg-white text-black px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Ouvrir Satellite <ExternalLink size={12} />
                </a>
             </div>
          </div>

        </div>

        {/* CORPORATE DNA - MISSION / VISION / VALUES */}
        <div className="mb-20">
           <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
              <Flag className="text-ecliptix-orange" size={24} />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Code Génétique & Directives</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mission */}
              <div className="bg-slate-900/40 border-l-2 border-ecliptix-orange p-8 hover:bg-slate-900/60 transition-colors">
                 <div className="w-12 h-12 bg-ecliptix-orange/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="text-ecliptix-orange" size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-wider">Mission</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Démocratiser l'accès aux technologies exponentielles (IA, Robotique, Big Data) pour résoudre les défis structurels de l'Afrique. Nous transformons la complexité technologique en solutions simples, robustes et à fort impact social.
                 </p>
              </div>

              {/* Vision */}
              <div className="bg-slate-900/40 border-l-2 border-blue-500 p-8 hover:bg-slate-900/60 transition-colors">
                 <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="text-blue-500" size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-wider">Vision</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Établir Ecliptix comme le catalyseur de la souveraineté numérique africaine. Nous imaginons un futur où l'Afrique ne consomme pas seulement l'IA, mais la conçoit, l'entraîne et la déploie pour ses propres besoins.
                 </p>
              </div>

              {/* Valeurs */}
              <div className="bg-slate-900/40 border-l-2 border-green-500 p-8 hover:bg-slate-900/60 transition-colors">
                 <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="text-green-500" size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4 uppercase font-mono tracking-wider">Valeurs</h3>
                 <ul className="space-y-3 text-slate-400 text-sm">
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Excellence & Rigueur
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Impact Local Mesurable
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Innovation Frugale (Jugaad)
                   </li>
                   <li className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Éthique & Transparence
                   </li>
                 </ul>
              </div>
           </div>
        </div>

        {/* STRATEGIC TIMELINE */}
        <div className="mb-20">
           <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
              <History className="text-ecliptix-orange" size={24} />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Chronologie d'Expansion</h2>
           </div>
           
           <div className="relative border-l border-white/20 ml-4 space-y-12">
              {/* Event 1 */}
              <div className="relative pl-8">
                 <div className="absolute -left-1.5 top-2 w-3 h-3 bg-ecliptix-orange rounded-full shadow-[0_0_10px_#fb923c]"></div>
                 <span className="text-xs font-mono text-ecliptix-orange uppercase tracking-widest mb-1 block">2024 - Ignition</span>
                 <h3 className="text-lg font-bold text-white mb-2">Genèse & R&D</h3>
                 <p className="text-slate-400 text-sm max-w-2xl">
                   Conceptualisation des algorithmes PEST AI. Développement des premiers prototypes de drones autonomes et validation des modèles d'IA sur des datasets locaux.
                 </p>
              </div>

              {/* Event 2 */}
              <div className="relative pl-8">
                 <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white rounded-full border border-ecliptix-orange"></div>
                 <span className="text-xs font-mono text-white uppercase tracking-widest mb-1 block">2025 - Déploiement (Phase Actuelle)</span>
                 <h3 className="text-lg font-bold text-white mb-2">Lancement Commercial & SASU</h3>
                 <p className="text-slate-400 text-sm max-w-2xl">
                   Structuration juridique en SASU. Lancement officiel de LocalPro.AI et partenariats pilotes avec les coopératives agricoles de la vallée du fleuve Sénégal.
                 </p>
              </div>

              {/* Event 3 */}
              <div className="relative pl-8">
                 <div className="absolute -left-1.5 top-2 w-3 h-3 bg-slate-700 rounded-full"></div>
                 <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1 block">2026 - Horizon</span>
                 <h3 className="text-lg font-bold text-slate-300 mb-2">Extension Régionale</h3>
                 <p className="text-slate-500 text-sm max-w-2xl">
                   Expansion vers la sous-région (Mali, Côte d'Ivoire). Déploiement de l'infrastructure "Neural Roots" pour l'hébergement de données souveraines.
                 </p>
              </div>
           </div>
        </div>

        {/* TEAM SECTION HEADER */}
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
           <User className="text-ecliptix-orange" size={24} />
           <h2 className="text-2xl font-bold text-white uppercase tracking-wider">État-Major & Ingénierie</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-900/40 border border-white/10 p-6 rounded-2xl hover:bg-slate-900/80 transition-all duration-500 hover:border-ecliptix-orange/30 overflow-hidden"
            >
              {/* Background Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ecliptix-orange/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>

              {/* Holographic Header */}
              <div className="flex justify-between items-start mb-6">
                 <div className="p-2 rounded bg-white/5 border border-white/10 text-slate-400 group-hover:text-ecliptix-orange group-hover:border-ecliptix-orange/50 transition-colors">
                    {React.cloneElement(member.icon as React.ReactElement<any>, { size: 16 })}
                 </div>
                 {member.experience && (
                   <span className="px-2 py-0.5 bg-ecliptix-orange/20 border border-ecliptix-orange/30 rounded text-[8px] font-bold font-mono text-ecliptix-orange uppercase flex items-center gap-1">
                     <Star size={8} fill="currentColor" /> {member.experience}
                   </span>
                 )}
              </div>

              {/* Profile Image with HUD Ring */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* Rotating Rings */}
                <div className="absolute inset-[-4px] border border-dashed border-white/20 rounded-full animate-spin-slow group-hover:border-ecliptix-orange/40 transition-colors"></div>
                <div className="absolute inset-[-8px] border border-white/5 rounded-full animate-spin-reverse"></div>
                
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-ecliptix-orange/50 transition-colors relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-ecliptix-orange transition-colors truncate">{member.name}</h3>
                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-4 group-hover:text-slate-300 transition-colors">{member.role}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[8px] bg-black/50 border border-white/10 px-2 py-0.5 rounded text-slate-400 font-mono group-hover:border-ecliptix-orange/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Connect Button */}
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-white transition-colors group/link"
                >
                  <Linkedin size={14} className="group-hover/link:text-[#0077b5] transition-colors" />
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
