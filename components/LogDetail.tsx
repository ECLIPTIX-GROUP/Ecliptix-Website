import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, MapPin, Shield, Tag, Share2, Printer, X, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { LogEntry } from '../types';
import { submitForm } from '../utils/formService';

interface LogDetailProps {
  entry: LogEntry;
  onBack: () => void;
}

export const LogDetail: React.FC<LogDetailProps> = ({ entry, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Popup Logic State
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [popupEmail, setPopupEmail] = useState('');
  const [popupStatus, setPopupStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger popup after 10 seconds of reading time
  useEffect(() => {
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        setHasTriggered(true);
        setShowPopup(true);
      }, 10000); // 10 seconds delay

      return () => clearTimeout(timer);
    }
  }, [hasTriggered]);

  const handlePopupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!popupEmail.trim()) return;
    
    setPopupStatus('submitting');
    const success = await submitForm({ Email: popupEmail }, `Newsletter Popup - Lecture: ${entry.title}`);
    
    if (success) {
      setPopupStatus('success');
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    } else {
      setPopupStatus('idle');
      alert("Erreur de connexion. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Progress Bar */}
      <div className="fixed top-20 left-0 w-full h-1 bg-slate-900 z-50">
        <div 
          className="h-full bg-ecliptix-orange shadow-[0_0_10px_#fb923c]" 
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Journal
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            
            {/* Header */}
            <div className="mb-12 border-b border-white/10 pb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-ecliptix-orange/10 border border-ecliptix-orange/30 text-ecliptix-orange text-[10px] font-mono uppercase tracking-widest rounded">
                  {entry.category} Protocol
                </span>
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                  ID: {entry.id}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {entry.title}
              </h1>

              <p className="text-xl text-slate-300 font-light leading-relaxed border-l-4 border-ecliptix-orange pl-6 italic">
                {entry.excerpt}
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Image Banner */}
              {entry.image && (
                <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden border border-white/10 group">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                   <img src={entry.image} alt={entry.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-white/50 uppercase tracking-widest">
                      Visual Record // Encrypted
                   </div>
                </div>
              )}

              {/* HTML Content Injection */}
              <div 
                className="space-y-8 text-slate-300 font-light leading-loose selection:bg-ecliptix-orange selection:text-black"
                dangerouslySetInnerHTML={{ __html: entry.content || '' }}
              />
            </div>

            {/* Footer Actions */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
               <div className="flex gap-4">
                 <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                   <Share2 size={16} /> Partager Uplink
                 </button>
                 <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-white transition-colors" onClick={() => window.print()}>
                   <Printer size={16} /> Imprimer Log
                 </button>
               </div>
               <div className="text-[10px] font-mono text-slate-600 uppercase">
                 End of Record
               </div>
            </div>

          </div>

          {/* Sidebar Metadata (The "File" Feel) */}
          <div className="lg:col-span-4 space-y-8">
             
             {/* Meta Card */}
             <div className="hud-panel p-6 bg-slate-900/50 sticky top-32">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Métadonnées</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                       <User size={14} className="text-ecliptix-orange" />
                     </div>
                     <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase">Officier (Auteur)</div>
                       <div className="text-white text-sm font-medium">{entry.author}</div>
                       <div className="text-xs text-slate-400">{entry.role}</div>
                     </div>
                  </li>

                  <li className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                       <MapPin size={14} className="text-blue-400" />
                     </div>
                     <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase">Localisation</div>
                       <div className="text-white text-sm font-medium">{entry.location}</div>
                     </div>
                  </li>

                  <li className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                       <Shield size={14} className="text-green-400" />
                     </div>
                     <div>
                       <div className="text-[10px] font-mono text-slate-500 uppercase">Accréditation</div>
                       <div className="text-white text-sm font-medium">{entry.clearanceLevel}</div>
                     </div>
                  </li>

                  <li className="pt-4 border-t border-white/5">
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-3 flex items-center gap-2">
                       <Tag size={12} /> Mots-clés Système
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags?.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-black border border-white/10 text-[10px] text-slate-400 font-mono rounded hover:border-ecliptix-orange/50 transition-colors cursor-default">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </li>
                </ul>
             </div>

          </div>

        </div>
      </div>
      
      {/* READING POPUP - Triggered after 10 seconds */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out] p-4">
           <div className="relative w-full max-w-md bg-slate-900 border border-ecliptix-orange/50 rounded-2xl p-8 shadow-[0_0_50px_rgba(251,146,60,0.2)] overflow-hidden">
              
              {/* Close Button */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {popupStatus === 'success' ? (
                <div className="text-center py-8">
                   <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                      <CheckCircle2 size={40} className="text-green-500 animate-bounce" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Fréquence Établie</h3>
                   <p className="text-slate-400 text-sm">Vous recevrez nos prochaines transmissions.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                     <div className="inline-flex items-center justify-center w-12 h-12 bg-ecliptix-orange/10 rounded-xl mb-4 border border-ecliptix-orange/20 text-ecliptix-orange">
                        <Mail size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Restez Connecté au Flux</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">
                        Cet article vous a intéressé ? Rejoignez +2000 abonnés qui reçoivent nos analyses stratégiques et tech chaque semaine.
                     </p>
                  </div>

                  <form onSubmit={handlePopupSubmit} className="space-y-4">
                     <input 
                       type="email" 
                       required
                       value={popupEmail}
                       onChange={(e) => setPopupEmail(e.target.value)}
                       placeholder="votre.email@frequence.com"
                       className="w-full bg-black/50 border border-white/20 rounded-lg p-4 text-white focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none font-mono text-sm transition-all"
                       disabled={popupStatus === 'submitting'}
                     />
                     <button 
                        type="submit"
                        disabled={popupStatus === 'submitting'}
                        className="w-full py-4 bg-ecliptix-orange hover:bg-orange-500 text-black font-bold uppercase tracking-widest text-xs rounded-lg transition-all shadow-lg shadow-ecliptix-orange/20 flex items-center justify-center gap-2 disabled:opacity-50"
                     >
                        {popupStatus === 'submitting' ? (
                          <>Connexion <Loader2 size={14} className="animate-spin"/></>
                        ) : (
                          <>Rejoindre la Communauté <Send size={14} /></>
                        )}
                     </button>
                  </form>
                  
                  <div className="mt-4 text-center">
                     <button onClick={() => setShowPopup(false)} className="text-[10px] text-slate-500 underline hover:text-white transition-colors">
                        Non merci, je continue la lecture
                     </button>
                  </div>
                </>
              )}
           </div>
        </div>
      )}

    </div>
  );
};