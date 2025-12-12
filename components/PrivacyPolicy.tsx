
import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, Server, FileKey, Globe, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Nav */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Système
        </button>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-green-500/10 border border-green-500/20 rounded text-green-500">
               <Shield size={20} />
             </div>
             <span className="text-green-500 font-mono text-xs uppercase tracking-[0.2em]">Data Security Clearance: Level 5</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Protocole de Confidentialité</h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Chez Ecliptix, la souveraineté des données n'est pas une option, c'est le cœur de notre architecture. Voici comment nous cryptons, traitons et protégeons vos informations dans nos systèmes neuronaux.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <Database className="text-slate-500" size={20} />
               1. Collecte de Télémétrie
             </h2>
             <div className="prose prose-invert prose-sm max-w-none text-slate-400 font-light">
               <p>
                 Dans le cadre de nos opérations (PEST AI, LocalPro), nous collectons les types de données suivants :
               </p>
               <ul className="list-none space-y-2 pl-0 mt-4">
                 <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" />
                    <span><strong>Données Agronomiques :</strong> Imagerie multispectrale, coordonnées GPS des parcelles, analyses de sol.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" />
                    <span><strong>Données d'Entreprise :</strong> Bases de données clients (CRM), historiques de transactions, numéros WhatsApp.</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-1" />
                    <span><strong>Métadonnées Techniques :</strong> Logs de connexion, type d'appareil, adresse IP pour la sécurité.</span>
                 </li>
               </ul>
             </div>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <Lock className="text-slate-500" size={20} />
               2. Chiffrement & Sécurité
             </h2>
             <p className="text-slate-400 text-sm leading-loose mb-6">
               Toutes les transmissions de données entre vos terminaux et le Core Ecliptix sont sécurisées par le protocole <strong>TLS 1.3</strong>. Les données au repos dans nos bases de données sont chiffrées via <strong>AES-256</strong>.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 border border-white/5 rounded">
                   <h4 className="text-white font-mono text-xs uppercase mb-2">Stockage Souverain</h4>
                   <p className="text-xs text-slate-500">Priorité aux serveurs situés en Afrique ou en juridiction RGPD stricte.</p>
                </div>
                <div className="p-4 bg-black/40 border border-white/5 rounded">
                   <h4 className="text-white font-mono text-xs uppercase mb-2">Cloisonnement IA</h4>
                   <p className="text-xs text-slate-500">Vos données ne servent pas à entraîner nos modèles publics sans consentement explicite.</p>
                </div>
             </div>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-ecliptix-orange"></div>
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <Eye className="text-slate-500" size={20} />
               3. Partage & Tiers
             </h2>
             <p className="text-slate-400 text-sm leading-loose">
               Ecliptix SASU ne vendra <strong>jamais</strong> vos données brutes à des courtiers publicitaires. Le partage de données se fait uniquement avec :
             </p>
             <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-400 text-sm">
                <li>Les partenaires techniques essentiels (ex: Fournisseurs Cloud, API WhatsApp Meta) sous contrat de confidentialité strict.</li>
                <li>Les autorités légales uniquement sur présentation d'un mandat judiciaire valide.</li>
             </ul>
          </section>

           {/* Section 4 */}
           <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
             <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <FileKey className="text-slate-500" size={20} />
               4. Vos Droits (Command Authority)
             </h2>
             <p className="text-slate-400 text-sm leading-loose mb-4">
               Conformément à la législation sénégalaise sur la protection des données personnelles (Loi n° 2008-12) et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression totale ("Kill Switch").
             </p>
             <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-mono">Pour exercer ces droits :</span>
                <span className="text-ecliptix-orange font-mono text-sm">contact@ecliptix.tech</span>
             </div>
          </section>

        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
           <p className="text-[10px] font-mono text-slate-600 uppercase">
             Dernière mise à jour du protocole : 15 Octobre 2025 // Hash: #X92-A
           </p>
        </div>

      </div>
    </div>
  );
};
