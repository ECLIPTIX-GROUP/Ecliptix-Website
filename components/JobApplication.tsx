
import React, { useState } from 'react';
import { ArrowLeft, Send, User, Briefcase, FileText, Linkedin, Github, Zap, MapPin, X, Loader2, Link } from 'lucide-react';
import { JobPosting } from '../types';
import { submitForm } from '../utils/formService';

interface JobApplicationProps {
  job?: JobPosting | null; // If null, it's a spontaneous application
  onBack: () => void;
  onSubmitSuccess: () => void;
}

export const JobApplication: React.FC<JobApplicationProps> = ({ job, onBack, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    cvLink: '',
    motivationLink: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation Manuelle
    if (!formData.fullName.trim()) { alert("Veuillez renseigner votre Nom Complet."); return; }
    if (!formData.email.trim()) { alert("Veuillez renseigner votre Email."); return; }
    if (!formData.phone.trim()) { alert("Veuillez renseigner votre Téléphone."); return; }
    if (!formData.cvLink.trim()) { alert("Veuillez fournir un lien vers votre CV (Drive, Dropbox, LinkedIn...)."); return; }
    
    setIsSubmitting(true);

    const jobTitle = job ? job.title : "Candidature Spontanée";
    
    const success = await submitForm({
      Poste: jobTitle,
      Candidat: formData.fullName,
      Email: formData.email,
      Telephone: formData.phone,
      LinkedIn: formData.linkedin,
      Portfolio: formData.portfolio,
      Lien_CV: formData.cvLink,
      Lien_Motivation: formData.motivationLink
    }, `Candidature: ${jobTitle} - ${formData.fullName}`);

    setIsSubmitting(false);

    if (success) {
      onSubmitSuccess();
    } else {
      alert("Erreur lors de l'envoi de la candidature. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row animate-[fadeIn_0.5s_ease-in-out] bg-black">
      
      {/* LEFT PANEL - CONTEXT */}
      <div className="w-full md:w-1/3 relative overflow-hidden flex flex-col p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-slate-900">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ecliptix-orange/10 to-black opacity-60"></div>

         <div className="relative z-10 flex-1 flex flex-col">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12 self-start"
            >
              <ArrowLeft size={16} /> Annuler
            </button>

            <div className="mt-auto mb-8">
               <div className="w-16 h-16 rounded-2xl bg-ecliptix-orange/10 border border-ecliptix-orange/30 flex items-center justify-center mb-6">
                 <Briefcase className="w-8 h-8 text-ecliptix-orange" />
               </div>
               <h2 className="text-3xl font-bold text-white mb-2">
                 {job ? job.title : "Candidature Spontanée"}
               </h2>
               <p className="font-mono text-sm text-ecliptix-orange uppercase tracking-widest mb-6">
                 {job ? `${job.department} // ${job.type}` : "Open Application Protocol"}
               </p>
               <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                 {job 
                   ? "Vous êtes sur le point de rejoindre l'équipage. Préparez vos liens et vos meilleurs arguments." 
                   : "Aucune mission ne correspond ? Envoyez votre profil. Nous cherchons toujours des talents exceptionnels."}
               </p>
            </div>

            {job && (
              <div className="flex items-center gap-4 text-xs font-mono text-slate-500 uppercase">
                 <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                 <span className="flex items-center gap-1"><Zap size={12} className="text-yellow-500"/> Hiring Now</span>
              </div>
            )}
         </div>
      </div>

      {/* RIGHT PANEL - FORM */}
      <div className="w-full md:w-2/3 p-6 md:p-20 overflow-y-auto bg-black">
         <div className="max-w-2xl mx-auto">
            
            <button onClick={onBack} className="md:hidden flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-8">
              <ArrowLeft size={14} /> Retour
            </button>

            <div className="mb-12">
               <h1 className="text-4xl font-bold text-white mb-4">Initialiser le Dossier</h1>
               <p className="text-slate-400 font-light">
                 Remplissez les champs ci-dessous pour soumettre votre profil à notre base de données RH.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
               
               {/* Identity */}
               <div className="space-y-6">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                    <User size={14} /> État Civil
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Nom Complet <span className="text-ecliptix-orange">*</span></label>
                        <input 
                          type="text" 
                          value={formData.fullName}
                          onChange={e => setFormData({...formData, fullName: e.target.value})}
                          className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                          placeholder="Ex: Seynabou Diop"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Email <span className="text-ecliptix-orange">*</span></label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                          placeholder="email@exemple.com"
                        />
                     </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">Téléphone <span className="text-ecliptix-orange">*</span></label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-slate-900 border border-white/10 p-4 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                          placeholder="+221..."
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs text-slate-400">LinkedIn</label>
                        <div className="relative">
                           <Linkedin size={16} className="absolute left-4 top-4 text-slate-500" />
                           <input 
                             type="text" 
                             value={formData.linkedin}
                             onChange={e => setFormData({...formData, linkedin: e.target.value})}
                             className="w-full bg-slate-900 border border-white/10 p-4 pl-12 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                             placeholder="linkedin.com/in/..."
                           />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Assets */}
               <div className="space-y-6">
                  <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                    <FileText size={14} /> Documents & Liens
                  </h3>
                  
                  <div className="space-y-2">
                     <label className="text-xs text-slate-400">Portfolio / GitHub <span className="text-slate-600">(Optionnel)</span></label>
                     <div className="relative">
                        <Github size={16} className="absolute left-4 top-4 text-slate-500" />
                        <input 
                          type="url" 
                          value={formData.portfolio}
                          onChange={e => setFormData({...formData, portfolio: e.target.value})}
                          className="w-full bg-slate-900 border border-white/10 p-4 pl-12 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                          placeholder="github.com/..."
                        />
                     </div>
                  </div>

                  {/* CV Link Input (Replaces File Upload) */}
                  <div className="space-y-2">
                      <label className="text-xs text-slate-400">Lien vers CV (Google Drive, Dropbox...) <span className="text-ecliptix-orange">*</span></label>
                      <div className="relative">
                        <Link size={16} className="absolute left-4 top-4 text-slate-500" />
                        <input 
                          required
                          type="url" 
                          value={formData.cvLink}
                          onChange={e => setFormData({...formData, cvLink: e.target.value})}
                          className="w-full bg-slate-900 border border-white/10 p-4 pl-12 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                          placeholder="https://drive.google.com/..."
                        />
                      </div>
                      <p className="text-[10px] text-slate-500">Assurez-vous que le lien est accessible publiquement.</p>
                  </div>

                  {/* Cover Letter Link */}
                  <div className="space-y-2">
                      <label className="text-xs text-slate-400">Lien Lettre de Motivation <span className="text-slate-600">(Optionnel)</span></label>
                      <div className="relative">
                        <Link size={16} className="absolute left-4 top-4 text-slate-500" />
                        <input 
                          type="url" 
                          value={formData.motivationLink}
                          onChange={e => setFormData({...formData, motivationLink: e.target.value})}
                          className="w-full bg-slate-900 border border-white/10 p-4 pl-12 text-white rounded focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none transition-all"
                          placeholder="https://..."
                        />
                      </div>
                  </div>
               </div>

               {/* Footer */}
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
                    className="w-full flex-1 py-5 bg-ecliptix-orange hover:bg-orange-500 text-black font-bold uppercase tracking-widest text-sm rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Transmission... <Loader2 size={16} className="animate-spin" /></>
                    ) : (
                      <>Transmettre Candidature <Send size={18} /></>
                    )}
                  </button>
               </div>
            </form>
         </div>
      </div>
    </div>
  );
};
