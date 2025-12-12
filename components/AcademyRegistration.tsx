
import React, { useState } from 'react';
import { ArrowLeft, Send, GraduationCap, Calendar, Clock, DollarSign, BookOpen, Target, X, Loader2 } from 'lucide-react';
import { Course } from '../types';
import { submitForm } from '../utils/formService';

interface AcademyRegistrationProps {
  course: Course;
  onBack: () => void;
  onSubmitSuccess: () => void;
}

export const AcademyRegistration: React.FC<AcademyRegistrationProps> = ({ course, onBack, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profile: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const profiles = [
    "Étudiant",
    "Professionnel (Salarié)",
    "Entrepreneur",
    "Demandeur d'emploi",
    "Entreprise (Formation Groupe)"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitForm({
      Formation: course.title,
      Session: course.nextSession,
      Nom: formData.name,
      Email: formData.email,
      Telephone: formData.phone,
      Profil: formData.profile,
      Motivation: formData.motivation
    }, `Inscription: ${course.title} - ${formData.name}`);

    setIsSubmitting(false);

    if (success) {
      onSubmitSuccess();
    } else {
      alert("Erreur d'inscription. Veuillez vérifier votre connexion.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row animate-[fadeIn_0.5s_ease-in-out] bg-black">
      
      {/* LEFT PANEL - CONTEXT */}
      <div className="w-full md:w-1/3 relative overflow-hidden flex flex-col p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-slate-900">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-black opacity-60"></div>

         <div className="relative z-10 flex-1 flex flex-col">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12 self-start"
            >
              <ArrowLeft size={16} /> Annuler
            </button>

            <div className="mt-auto mb-8">
               <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                 <GraduationCap className="w-8 h-8 text-purple-400" />
               </div>
               <h2 className="text-3xl font-bold text-white mb-2">
                 {course.title}
               </h2>
               <div className="flex flex-wrap gap-2 mb-6">
                 <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono uppercase">{course.level}</span>
                 <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-mono uppercase flex items-center gap-1"><Clock size={10}/> {course.duration}</span>
               </div>
               
               <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Prochaine Session</span>
                    <span className="text-white font-bold">{course.nextSession}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Investissement</span>
                    <span className="text-ecliptix-orange font-mono font-bold">{course.price}</span>
                  </div>
               </div>
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
               <h1 className="text-4xl font-bold text-white mb-4">Feuille d'Enrôlement</h1>
               <p className="text-slate-400 font-light">
                 Réservez votre place pour la prochaine cohorte. Les places sont limitées pour garantir la qualité du mentorat.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Nom Complet <span className="text-purple-400">*</span></label>
                     <input 
                       required
                       type="text" 
                       value={formData.name}
                       onChange={e => setFormData({...formData, name: e.target.value})}
                       className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                       placeholder="Votre nom"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Email <span className="text-purple-400">*</span></label>
                     <input 
                       required
                       type="email" 
                       value={formData.email}
                       onChange={e => setFormData({...formData, email: e.target.value})}
                       className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                       placeholder="email@exemple.com"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Téléphone (WhatsApp) <span className="text-purple-400">*</span></label>
                     <input 
                       required
                       type="tel" 
                       value={formData.phone}
                       onChange={e => setFormData({...formData, phone: e.target.value})}
                       className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                       placeholder="+221..."
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Votre Profil <span className="text-purple-400">*</span></label>
                     <div className="relative">
                        <select 
                           required
                           value={formData.profile}
                           onChange={e => setFormData({...formData, profile: e.target.value})}
                           className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all appearance-none"
                        >
                           <option value="">Sélectionner...</option>
                           {profiles.map((p, idx) => <option key={idx} value={p}>{p}</option>)}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                     </div>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs text-slate-400">Motivation & Attentes <span className="text-purple-400">*</span></label>
                  <textarea 
                     required
                     rows={5}
                     value={formData.motivation}
                     onChange={e => setFormData({...formData, motivation: e.target.value})}
                     className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none"
                     placeholder="Quels sont vos objectifs après cette formation ?"
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
                    className="w-full flex-1 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Inscription <Loader2 size={16} className="animate-spin"/></>
                    ) : (
                      <>Confirmer Inscription <Send size={18} /></>
                    )}
                  </button>
               </div>
            </form>
         </div>
      </div>
    </div>
  );
};
