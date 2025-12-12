
import React from 'react';
import { CheckCircle2, ArrowRight, Home, ShieldCheck, Mail } from 'lucide-react';

interface SuccessPageProps {
  onBackToHome: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden animate-[fadeIn_0.5s_ease-out]">
      
      {/* Background FX */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full mx-4 text-center">
         
         {/* Success Icon Animation */}
         <div className="mb-12 relative inline-block">
            <div className="w-32 h-32 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center relative z-10">
               <CheckCircle2 size={64} className="text-green-500 animate-[bounce_1s_ease-in-out]" />
            </div>
            {/* Ripples */}
            <div className="absolute inset-0 rounded-full border border-green-500/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute inset-[-20px] rounded-full border border-green-500/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></div>
         </div>

         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">Transmission Réussie</h1>
         
         <div className="bg-slate-900/60 border border-green-500/30 rounded-xl p-8 mb-10 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 text-green-400 font-mono text-xs uppercase tracking-widest mb-4">
               <ShieldCheck size={14} /> Uplink Secure
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
               Votre demande a été encodée et transmise à notre Centre d'Opérations. Un officier de liaison Ecliptix examinera vos paramètres et vous contactera sous 24h.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm bg-black/40 py-2 rounded border border-white/5">
               <Mail size={14} /> Vérifiez votre client de messagerie pour valider l'envoi.
            </div>
         </div>

         <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={onBackToHome}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Home size={16} /> Retour Base
            </button>
            <a 
              href="mailto:contact@ecliptix.tech"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Contacter Support <ArrowRight size={16} />
            </a>
         </div>

         <div className="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            Session ID: {Math.random().toString(36).substr(2, 9).toUpperCase()} // END_OF_LINE
         </div>

      </div>
    </div>
  );
};
