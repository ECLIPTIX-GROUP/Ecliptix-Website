
import React, { useState } from 'react';
import { ArrowLeft, Send, Zap, CheckCircle2, User, Mail, Building, FileText, Globe, X, Loader2 } from 'lucide-react';
import { ProductItem, ServiceItem } from '../types';
import { submitForm } from '../utils/formService';

interface DemoRequestProps {
  product: ProductItem | ServiceItem;
  onBack: () => void;
  onSubmitSuccess: () => void;
}

export const DemoRequest: React.FC<DemoRequestProps> = ({ product, onBack, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    target: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper to check type
  const isProduct = (item: any): item is ProductItem => 'themeColor' in item;
  const isGreen = isProduct(product) ? product.themeColor === 'green' : true; // Default to green/orange for services

  const accentColor = isGreen ? 'text-green-400' : 'text-blue-400';
  const bgAccentColor = isGreen ? 'bg-green-500' : 'bg-blue-500';
  const borderColor = isGreen ? 'border-green-500' : 'border-blue-500';

  // Define targets based on product type
  const targets = isGreen 
    ? ["Agriculteur Indépendant", "Coopérative Agricole", "Agrobusiness / Industriel", "Institut de Recherche", "ONG / Gouvernement", "Autre"]
    : ["Freelance / Indépendant", "Artisan / Commerçant", "TPE / PME", "Startup", "Agence", "Autre"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitForm({
      Produit: product.title,
      Prenom: formData.firstName,
      Nom: formData.lastName,
      Email: formData.email,
      Telephone: formData.phone,
      Organisation: formData.organization,
      Cible: formData.target,
      Message: formData.message
    }, `Demande Demo: ${product.title}`);

    setIsSubmitting(false);

    if (success) {
      onSubmitSuccess();
    } else {
      alert("Erreur d'envoi. Veuillez vérifier votre connexion.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row animate-[fadeIn_0.5s_ease-in-out] bg-black">
      
      {/* LEFT PANEL - PRODUCT CONTEXT */}
      <div className={`w-full md:w-1/3 relative overflow-hidden flex flex-col p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10`}>
         {/* Background Image/Gradient */}
         <div className="absolute inset-0 bg-slate-900 z-0">
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${isGreen ? 'from-green-900/30' : 'from-blue-900/30'} to-black opacity-60`}></div>
            {/* Abstract Tech Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
         </div>

         <div className="relative z-10 flex-1 flex flex-col">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12 self-start"
            >
              <ArrowLeft size={16} /> Retour
            </button>

            <div className="mt-auto mb-8">
               <div className={`w-16 h-16 rounded-2xl ${isGreen ? 'bg-green-500/10 border-green-500/30' : 'bg-blue-500/10 border-blue-500/30'} border flex items-center justify-center mb-6`}>
                 {React.isValidElement(product.icon) ? React.cloneElement(product.icon as React.ReactElement<any>, { className: `w-8 h-8 ${accentColor}` }) : null}
               </div>
               <h2 className="text-3xl font-bold text-white mb-2">{product.title}</h2>
               {isProduct(product) && <p className={`font-mono text-sm ${accentColor} uppercase tracking-widest mb-6`}>{product.subtitle}</p>}
               <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                 {product.description}
               </p>
            </div>

            <div className="hidden md:block">
               <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">Statut Système</div>
               <div className="flex items-center gap-2 text-green-400 text-xs font-mono">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  OPERATIONNEL
               </div>
            </div>
         </div>
      </div>

      {/* RIGHT PANEL - FORM */}
      <div className="w-full md:w-2/3 p-6 md:p-20 overflow-y-auto bg-black relative">
         <div className="max-w-2xl mx-auto">
            
            {/* Mobile Back Button */}
            <button 
              onClick={onBack}
              className="md:hidden flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-8"
            >
              <ArrowLeft size={14} /> Annuler
            </button>

            <div className="mb-12">
               <h1 className="text-4xl font-bold text-white mb-4">Initialiser la Demande</h1>
               <p className="text-slate-400 font-light">
                 Remplissez les paramètres de mission ci-dessous. Nos ingénieurs vous contacteront pour le déploiement.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
               
               {/* Identity Section */}
               <div className="space-y-6">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                    <User size={14} /> Identité
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Prénom <span className="text-ecliptix-orange">*</span></label>
                        <input 
                          required
                          type="text" 
                          value={formData.firstName}
                          onChange={e => setFormData({...formData, firstName: e.target.value})}
                          className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all`}
                          placeholder="Ex: Jean"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Nom <span className="text-ecliptix-orange">*</span></label>
                        <input 
                          required
                          type="text" 
                          value={formData.lastName}
                          onChange={e => setFormData({...formData, lastName: e.target.value})}
                          className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all`}
                          placeholder="Ex: Diallo"
                        />
                     </div>
                  </div>
               </div>

               {/* Contact Section */}
               <div className="space-y-6">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                    <Globe size={14} /> Coordonnées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Email Professionnel <span className="text-ecliptix-orange">*</span></label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all`}
                          placeholder="nom@entreprise.com"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Téléphone</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all`}
                          placeholder="+221..."
                        />
                     </div>
                  </div>
               </div>

               {/* Organization Section */}
               <div className="space-y-6">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                    <Building size={14} /> Organisation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Nom de l'Organisation</label>
                        <input 
                          type="text" 
                          value={formData.organization}
                          onChange={e => setFormData({...formData, organization: e.target.value})}
                          className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all`}
                          placeholder="Ex: Coopérative du Fleuve"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Type de Structure <span className="text-ecliptix-orange">*</span></label>
                        <div className="relative">
                           <select 
                              required
                              value={formData.target}
                              onChange={e => setFormData({...formData, target: e.target.value})}
                              className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all appearance-none`}
                           >
                              <option value="">Sélectionner...</option>
                              {targets.map((t, idx) => <option key={idx} value={t}>{t}</option>)}
                           </select>
                           <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Message Section */}
               <div className="space-y-2">
                  <label className="text-xs text-slate-400">Objectifs & Besoins <span className="text-ecliptix-orange">*</span></label>
                  <textarea 
                     required
                     rows={4}
                     value={formData.message}
                     onChange={e => setFormData({...formData, message: e.target.value})}
                     className={`w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:${borderColor} focus:ring-1 focus:ring-${isGreen ? 'green-500' : 'blue-500'} outline-none transition-all resize-none`}
                     placeholder="Décrivez vos défis actuels..."
                  ></textarea>
               </div>

               {/* Submit Button Section */}
               <div className="pt-6 border-t border-white/5 mt-8">
                  <div className="flex flex-col-reverse md:flex-row gap-4">
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
                        className={`w-full flex-1 py-5 ${bgAccentColor} hover:opacity-90 text-black font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {isSubmitting ? (
                          <>Envoi <Loader2 size={16} className="animate-spin" /></>
                        ) : (
                          <>Confirmer la Demande <Send size={18} /></>
                        )}
                      </button>
                  </div>

                  <p className="text-center text-[10px] text-slate-600 mt-4 font-mono">
                    En cliquant, vous acceptez le traitement de vos données selon notre protocole de confidentialité.
                  </p>
               </div>

            </form>
         </div>
      </div>

    </div>
  );
};
