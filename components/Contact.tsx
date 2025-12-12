
import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, MessageCircle, ExternalLink, CheckCircle2, Loader2, Signal, Globe, Shield } from 'lucide-react';
import { submitForm } from '../utils/formService';

interface ContactProps {
  onSubmitSuccess?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    id: '',
    sector: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitForm({
      Nom: formData.id,
      Secteur: formData.sector,
      Email: formData.email,
      Message: formData.message
    }, `Nouveau Contact: ${formData.id}`);

    setIsSubmitting(false);

    if (success) {
      if (onSubmitSuccess) {
        onSubmitSuccess(); // Trigger global success page if configured
      } else {
        setIsSubmitted(true); // Local success state
      }
    } else {
      alert("Erreur de connexion. Veuillez réessayer ou utiliser WhatsApp.");
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/221784363537?text=Bonjour%20Ecliptix,%20je%20souhaite%20initier%20une%20communication.`, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-ecliptix-orange/5 rounded-full blur-[120px] opacity-50"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 border border-ecliptix-orange/30 px-4 py-1 rounded-full bg-ecliptix-orange/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <Signal size={14} className="text-ecliptix-orange" />
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Secure Uplink</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Centre de <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecliptix-orange to-white">Transmission</span></h2>
           <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
             Initialisez la communication avec le QG Ecliptix. Nos officiers de liaison sont en veille active pour traiter vos requêtes stratégiques.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: Contact Cards Grid */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* WhatsApp Card */}
               <div 
                 onClick={handleWhatsApp}
                 className="group p-6 bg-slate-900/40 border border-white/10 rounded-2xl cursor-pointer hover:bg-[#25D366]/5 hover:border-[#25D366]/30 transition-all duration-300"
               >
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                     <MessageCircle className="text-slate-400 group-hover:text-[#25D366]" size={20} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">WhatsApp Direct</h4>
                  <p className="text-xs text-slate-500 font-mono group-hover:text-[#25D366] transition-colors">Réponse &lt; 15min</p>
               </div>

               {/* Phone Card */}
               <div className="group p-6 bg-slate-900/40 border border-white/10 rounded-2xl hover:bg-ecliptix-orange/5 hover:border-ecliptix-orange/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ecliptix-orange/20 transition-colors">
                     <Phone className="text-slate-400 group-hover:text-ecliptix-orange" size={20} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">Ligne Vocale</h4>
                  <p className="text-xs text-slate-500 font-mono group-hover:text-ecliptix-orange transition-colors">+221 78 436 35 37</p>
               </div>

               {/* Email Card */}
               <div className="group p-6 bg-slate-900/40 border border-white/10 rounded-2xl hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300 sm:col-span-2">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Mail className="text-slate-400 group-hover:text-blue-400" size={20} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm mb-1">Liaison de Données</h4>
                        <p className="text-xs text-slate-500 font-mono group-hover:text-blue-400 transition-colors">contact@ecliptix.tech</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* SATELLITE MAP WIDGET */}
            <div className="relative group rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl h-64">
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                   <span className="px-2 py-1 bg-black/80 border border-white/20 rounded text-[9px] font-mono text-ecliptix-orange uppercase tracking-wider backdrop-blur-md">
                      Base Ops: Saint-Louis
                   </span>
                </div>
                
                {/* Map Iframe */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="Ecliptix Location"
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=16.034590,-16.468224&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ filter: 'grayscale(100%) invert(100%) contrast(85%) brightness(80%)' }}
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                ></iframe>

                {/* Tech Overlay */}
                <div className="absolute inset-0 pointer-events-none border-[0.5px] border-white/5 m-2 rounded-2xl"></div>
                <div className="absolute bottom-4 right-4 z-20">
                   <a 
                     href="https://maps.google.com/?q=16.034590,-16.468224" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-ecliptix-orange hover:bg-white text-black px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                   >
                     Localiser <ExternalLink size={12} />
                   </a>
                </div>
            </div>

          </div>

          {/* RIGHT: Terminal Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
               
               {/* Decorative Top Bar */}
               <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                     <Shield size={12} className="text-green-500" />
                     Encrypted Connection
                  </div>
               </div>

               {isSubmitted ? (
                  <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                     <div className="w-24 h-24 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                        <div className="absolute inset-0 rounded-full border border-green-500/30 animate-ping"></div>
                        <CheckCircle2 size={48} className="text-green-500" />
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-4">Message Transmis</h3>
                     <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                       Accusé de réception confirmé par le serveur central. Nos équipes analysent votre requête.
                     </p>
                     <button 
                       onClick={() => setIsSubmitted(false)}
                       className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-widest transition-all"
                     >
                       Envoyer un autre message
                     </button>
                  </div>
               ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                           <label className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${focusedField === 'id' ? 'text-ecliptix-orange' : 'text-slate-500'}`}>Identifiant [Nom]</label>
                           <input 
                             required
                             type="text" 
                             value={formData.id}
                             onChange={(e) => setFormData({...formData, id: e.target.value})}
                             onFocus={() => setFocusedField('id')}
                             onBlur={() => setFocusedField(null)}
                             className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:border-ecliptix-orange outline-none transition-all placeholder:text-slate-700" 
                             placeholder="Ex: John Doe" 
                           />
                        </div>
                        <div className="space-y-2 group">
                           <label className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${focusedField === 'sector' ? 'text-ecliptix-orange' : 'text-slate-500'}`}>Organisation</label>
                           <input 
                             type="text" 
                             value={formData.sector}
                             onChange={(e) => setFormData({...formData, sector: e.target.value})}
                             onFocus={() => setFocusedField('sector')}
                             onBlur={() => setFocusedField(null)}
                             className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:border-ecliptix-orange outline-none transition-all placeholder:text-slate-700" 
                             placeholder="Ex: Ecliptix Corp" 
                           />
                        </div>
                     </div>

                     <div className="space-y-2 group">
                        <label className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${focusedField === 'email' ? 'text-ecliptix-orange' : 'text-slate-500'}`}>Canal de Retour [Email]</label>
                        <input 
                           required
                           type="email" 
                           value={formData.email}
                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                           onFocus={() => setFocusedField('email')}
                           onBlur={() => setFocusedField(null)}
                           className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:border-ecliptix-orange outline-none transition-all placeholder:text-slate-700" 
                           placeholder="email@domaine.com" 
                        />
                     </div>

                     <div className="space-y-2 group">
                        <label className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${focusedField === 'message' ? 'text-ecliptix-orange' : 'text-slate-500'}`}>Données du Message</label>
                        <textarea 
                           required
                           rows={4} 
                           value={formData.message}
                           onChange={(e) => setFormData({...formData, message: e.target.value})}
                           onFocus={() => setFocusedField('message')}
                           onBlur={() => setFocusedField(null)}
                           className="w-full bg-slate-900/50 border border-white/10 rounded-lg p-4 text-white font-mono text-sm focus:border-ecliptix-orange outline-none resize-none transition-all placeholder:text-slate-700" 
                           placeholder="Entrez votre message ici..."
                        ></textarea>
                     </div>

                     <div className="pt-4">
                        <button 
                           type="submit" 
                           disabled={isSubmitting}
                           className="w-full bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-widest py-5 rounded-lg transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                           {isSubmitting ? (
                              <>Encodage en cours <Loader2 size={18} className="animate-spin" /></>
                           ) : (
                              <>Initialiser Transmission <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-ecliptix-orange" /></>
                           )}
                        </button>
                     </div>

                  </form>
               )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
