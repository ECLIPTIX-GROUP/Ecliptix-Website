import React, { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle2, X } from 'lucide-react';
import { submitForm } from '../utils/formService';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setStatus('submitting');
    const success = await submitForm({ Email: email }, "Nouvel Abonné Newsletter");
    
    if (success) {
      setStatus('success');
      setEmail('');
      setShowSuccess(true);
      setTimeout(() => setStatus('idle'), 2000);
    } else {
      setStatus('idle');
      alert("Erreur de connexion. Veuillez réessayer.");
    }
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-slate-900/50 border-t border-white/5 print:hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecliptix-orange/30 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-ecliptix-orange/5 rounded-2xl mb-8 text-ecliptix-orange border border-ecliptix-orange/20 shadow-[0_0_30px_rgba(251,146,60,0.1)]">
              <Mail size={32} />
           </div>
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Liaison Cryptée</h2>
           <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed font-light">
              Rejoignez le réseau. Recevez nos rapports d'innovation, analyses technologiques et mises à jour stratégiques directement dans votre terminal.
           </p>

           <form onSubmit={handleSubmit} className="max-w-md mx-auto relative flex items-center">
              <div className="absolute left-4 text-slate-500">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@frequence.com"
                className="w-full bg-black/50 border border-white/20 rounded-full py-4 pl-12 pr-32 text-white focus:border-ecliptix-orange focus:ring-1 focus:ring-ecliptix-orange outline-none font-mono text-sm transition-all"
                disabled={status === 'submitting' || status === 'success'}
              />
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-ecliptix-orange hover:bg-orange-500 text-black font-bold uppercase tracking-widest text-xs rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === 'submitting' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle2 size={16} />
                ) : (
                  <>Rejoindre <Send size={12} /></>
                )}
              </button>
           </form>
           <p className="text-[10px] text-slate-600 mt-4 font-mono uppercase tracking-widest">Fréquence sécurisée. Aucune donnée partagée.</p>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-out] p-4">
          <div className="relative max-w-md w-full bg-slate-900 border border-ecliptix-orange/50 rounded-2xl p-8 text-center shadow-[0_0_50px_rgba(251,146,60,0.2)] overflow-hidden">
            
            {/* Decorative scanline */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ecliptix-orange to-transparent animate-[shimmer_2s_infinite]"></div>

            <button 
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30 mb-6 relative">
              <div className="absolute inset-0 rounded-full border border-green-500/50 animate-ping opacity-20"></div>
              <CheckCircle2 size={40} className="text-green-500" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Liaison Confirmée</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Votre fréquence a été enregistrée dans le noyau Ecliptix. Vous recevrez nos rapports de mission directement sur votre terminal.
            </p>

            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-ecliptix-orange hover:bg-orange-500 text-black font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg shadow-ecliptix-orange/20"
            >
              Retour Opérationnel
            </button>
          </div>
        </div>
      )}
    </>
  );
};