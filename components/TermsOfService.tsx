import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, Scale, Zap, CheckSquare, XCircle, HardHat } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
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
             <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded text-blue-500">
               <FileText size={20} />
             </div>
             <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em]">Operational Contract: Standard</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Termes d'Engagement</h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Conditions générales d'utilisation des systèmes Ecliptix. En accédant à nos interfaces neuronales ou services, vous acceptez les paramètres de mission suivants.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl">
             <h2 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
               <span className="text-ecliptix-orange">01 //</span> Acceptation du Protocole
             </h2>
             <p className="text-slate-400 text-sm leading-loose">
               L'utilisation des services Ecliptix (PEST AI, LocalPro, Consulting) implique l'acceptation sans réserve des présentes conditions. Si vous agissez pour le compte d'une entité (Coopérative, Entreprise), vous garantissez avoir l'accréditation nécessaire pour l'engager.
             </p>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl">
             <h2 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
               <span className="text-ecliptix-orange">02 //</span> Utilisation des Systèmes IA
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/20 p-4 border border-white/5 rounded-lg">
                   <div className="flex items-center gap-2 text-white font-bold mb-2">
                      <CheckSquare size={16} className="text-green-500" /> Usage Autorisé
                   </div>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     L'IA doit être utilisée pour l'optimisation agricole, la croissance commerciale ou l'analyse de données légitimes.
                   </p>
                </div>
                <div className="bg-black/20 p-4 border border-white/5 rounded-lg">
                   <div className="flex items-center gap-2 text-white font-bold mb-2">
                      <XCircle size={16} className="text-red-500" /> Usage Interdit
                   </div>
                   <p className="text-xs text-slate-400 leading-relaxed">
                     Interdiction formelle de reverse-engineering, d'injection de prompt malveillant, ou d'utilisation des drones pour la surveillance illégale.
                   </p>
                </div>
             </div>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl border-l-4 border-l-yellow-500">
             <h2 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
               <span className="text-ecliptix-orange">03 //</span> Limitation de Responsabilité (Hallucinations)
             </h2>
             <div className="flex gap-4">
                <AlertTriangle className="text-yellow-500 shrink-0" size={24} />
                <p className="text-slate-300 text-sm leading-loose">
                  Bien que nos modèles soient entraînés avec rigueur, l'Intelligence Artificielle est probabiliste. Ecliptix ne peut être tenu responsable des erreurs de prédiction ("Hallucinations") ou des décisions prises uniquement sur la base d'une suggestion de l'IA. <strong>La validation humaine reste impérative pour les décisions critiques.</strong>
                </p>
             </div>
          </section>

           {/* Section 4 */}
           <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl">
             <h2 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
               <span className="text-ecliptix-orange">04 //</span> Opérations Drones (PESTFLY)
             </h2>
             <div className="flex items-start gap-4">
                <HardHat className="text-slate-500 mt-1" size={20} />
                <div className="text-slate-400 text-sm leading-loose">
                  <p className="mb-2">Les opérations de vol sont soumises à la réglementation de l'ANACIM (Sénégal). Ecliptix se réserve le droit d'annuler une mission sans préavis en cas de :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Conditions météorologiques défavorables (Vents > 30km/h)</li>
                    <li>Zone d'exclusion aérienne temporaire</li>
                    <li>Risque pour les personnes ou les biens au sol</li>
                  </ul>
                </div>
             </div>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-900/40 border border-white/10 p-8 rounded-2xl">
             <h2 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
               <span className="text-ecliptix-orange">05 //</span> Propriété Intellectuelle
             </h2>
             <p className="text-slate-400 text-sm leading-loose">
               Tous les algorithmes, modèles fins-tunés, interfaces et marques (Ecliptix, PEST AI, LocalPro) sont la propriété exclusive d'Ecliptix SASU. L'abonnement aux services concède une licence d'utilisation non exclusive et non transférable.
             </p>
          </section>

        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
           <div className="inline-flex items-center gap-2 text-slate-500">
              <Scale size={14} />
              <p className="text-[10px] font-mono uppercase">
                Juridiction compétente : Tribunal de Commerce de Saint-Louis, Sénégal.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};