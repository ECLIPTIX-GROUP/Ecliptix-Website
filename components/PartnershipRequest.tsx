
import React, { useState } from 'react';
import { ArrowLeft, Send, Handshake, Globe, Building2, Layout, Users, X, Loader2 } from 'lucide-react';
import { submitForm } from '../utils/formService';

interface PartnershipRequestProps {
  onBack: () => void;
  onSubmitSuccess: () => void;
}

export const PartnershipRequest: React.FC<PartnershipRequestProps> = ({ onBack, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    type: '',
    proposal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const types = [
    "Partenaire Technologique (API/Data)",
    "Partenaire Commercial (Distributeur/Revendeur)",
    "ONG / Institutionnel",
    "Académique / Recherche",
    "Investisseur / VC",
    "Autre"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitForm({
      Organisation: formData.orgName,
      Contact: formData.contactName,
      Email: formData.email,
      Type: formData.type,
      Proposition: formData.proposal
    }, `Partenariat: ${formData.orgName}`);

    setIsSubmitting(false);

    if (success) {
      onSubmitSuccess();
    } else {
      alert("Erreur de transmission. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row animate-[fadeIn_0.5s_ease-in-out] bg-black">
      
      {/* LEFT PANEL - CONTEXT */}
      <div className="w-full md:w-1/3 relative overflow-hidden flex flex-col p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-slate-900">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/10 to-black opacity-60"></div>

         <div className="relative z-10 flex-1 flex flex-col">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12 self-start"
            >
              <ArrowLeft size={16} /> Annuler
            </button>

            <div className="mt-auto mb-8">
               <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
                 <Handshake className="w-8 h-8 text-blue-400" />
               </div>
               <h2 className="text-3xl font-bold text-white mb-2">
                 Alliance Protocol
               </h2>
               <p className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-6">
                 Strategic Coalition
               </p>
               <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                 "Seul on va plus vite, ensemble on va plus loin." Nous construisons un écosystème ouvert pour accélérer le déploiement de l'IA en Afrique.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-500 uppercase">
                 <span className="flex items-center gap-1"><Layout size={12} className="text-blue-400"/> API Integration</span>
                 <span className="flex items-center gap-1"><Globe size={12} className="text-green-400"/> Impact Social</span>
                 <span className="flex items-center gap-1"><Users size={12} className="text-yellow-400"/> Distribution</span>
                 <span className="flex items-center gap-1"><Building2 size={12} className="text-purple-400"/> Recherche</span>
            </div>
         </div>
      </div>

      {/* RIGHT PANEL - FORM */}
      <div className="w-full md:w-2/3 p-6 md:p-20 overflow-y-auto bg-black">
         <div className="max-w-2xl mx-auto">
            
            <button onClick={onBack} className="md:hidden flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-8">
              <ArrowLeft size={14} /> Retour
            </button>

            <div className="mb-12">
               <h1 className="text-4xl font-bold text-white mb-4">Initier une Collaboration</h1>
               <p className="text-slate-400 font-light">
                 Présentez-nous votre structure et votre vision. Nous étudions chaque opportunité de synergie avec attention.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Organisation / Entreprise <span className="text-blue-400">*</span></label>
                     <input 
                       required
                       type="text" 
                       value={formData.orgName}
                       onChange={e => setFormData({...formData, orgName: e.target.value})}
                       className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                       placeholder="Nom de l'entité"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Personne de Contact <span className="text-blue-400">*</span></label>
                     <input 
                       required
                       type="text" 
                       value={formData.contactName}
                       onChange={e => setFormData({...formData, contactName: e.target.value})}
                       className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                       placeholder="Prénom Nom"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Email Professionnel <span className="text-blue-400">*</span></label>
                     <input 
                       required
                       type="email" 
                       value={formData.email}
                       onChange={e => setFormData({...formData, email: e.target.value})}
                       className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                       placeholder="email@organisation.com"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Type de Partenariat <span className="text-blue-400">*</span></label>
                     <div className="relative">
                        <select 
                           required
                           value={formData.type}
                           onChange={e => setFormData({...formData, type: e.target.value})}
                           className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none"
                        >
                           <option value="">Sélectionner...</option>
                           {types.map((t, idx) => <option key={idx} value={t}>{t}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                     </div>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs text-slate-400">Proposition de Valeur <span className="text-blue-400">*</span></label>
                  <textarea 
                     required
                     rows={5}
                     value={formData.proposal}
                     onChange={e => setFormData({...formData, proposal: e.target.value})}
                     className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                     placeholder="Comment pouvons-nous créer de la valeur ensemble ?"
                  ></textarea>
               </div>

               <div className="pt-6 border-t border-white/5 mt-8 flex flex-col-reverse md:flex-row gap-4">
                  <button 
                    type="button"
                    onClick={onBack}
                    className="w-full md:w-auto px-8 py-5 border border-white/10 text-slate-400 hover:text-white hover:border-white hover:bg-white/5 font-bold uppercase tracking-widest text-sm rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <X size={18} /> Annuler
                  </button>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex-1 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Transmission... <Loader2 size={16} className="animate-spin"/></>
                    ) : (
                      <>Transmettre Proposition <Send size={18} /></>
                    )}
                  </button>
               </div>
            </form>
         </div>
      </div>
    </div>
  );
};
