
import React, { useState } from 'react';
import { ArrowLeft, Radio, Mic, Lock, Signal, Loader2, Calendar, Bell, ShieldCheck } from 'lucide-react';
import { submitForm } from '../utils/formService';

interface PodcastProps {
  onBack: () => void;
}

export const Podcast: React.FC<PodcastProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setStatus('submitting');
    const success = await submitForm({ Email: email }, "Notification Lancement Podcast");
    
    if (success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('idle');
      alert("Erreur. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Background FX */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[20%] right-[30%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
         {/* Audio Wave Pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDIwaDEwYzAtNSA1LTEwIDEwLTEwczEwIDUgMTAgMTBzNSAxMCAxMCAxMCAxMC01IDEwLTEwIDUtMTAgMTAtMTAgMTAgNSAxMCAxMCA1IDEwIDEwIDEwIDEwLTUgMTAtMTAgNS0xMCAxMC0xMCAxMCA1IDEwIDEwIDUgMTAgMTAgMTAgMTAtNSAxMC0xMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDZCMTZEIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au QG
        </button>

        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-500/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <Radio size={14} className="text-cyan-400" />
             <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Transmission Audio</span>
           </div>
           <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">Ecliptix <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Frequency</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Le futur canal de référence sur l'IA et la Tech en Afrique de l'Ouest.
           </p>
        </div>

        {/* MAIN COMING SOON VISUAL */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/50 backdrop-blur-md p-8 md:p-16 text-center mb-16">
           
           <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           
           <div className="relative z-10 flex flex-col items-center">
              
              {/* Radar Animation */}
              <div className="relative w-40 h-40 mb-8">
                 <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-[ping_3s_linear_infinite]"></div>
                 <div className="absolute inset-4 border-2 border-cyan-500/50 rounded-full animate-[ping_3s_linear_infinite_1s]"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                       <Mic size={32} className="text-cyan-400" />
                    </div>
                 </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">Signal en Approche</h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-8">
                Nos ingénieurs calibrent les fréquences. La première saison est en cours de production. Préparez-vous à recevoir des transmissions haute-fidélité.
              </p>

              {/* Notify Form */}
              <div className="w-full max-w-md bg-black/40 p-1 rounded-full border border-white/10 flex items-center">
                 <input 
                   type="email" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   disabled={status === 'success' || status === 'submitting'}
                   placeholder="votre.email@frequence.com"
                   className="flex-1 bg-transparent border-none text-white text-sm px-6 py-3 focus:ring-0 outline-none placeholder:text-slate-600"
                 />
                 <button 
                   onClick={handleNotify}
                   disabled={status === 'success' || status === 'submitting'}
                   className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                 >
                    {status === 'submitting' ? <Loader2 size={16} className="animate-spin" /> : status === 'success' ? "Reçu !" : "M'avertir"}
                 </button>
              </div>
              {status === 'success' && (
                 <p className="text-green-400 text-xs mt-4 flex items-center gap-2"><ShieldCheck size={12}/> Fréquence enregistrée. Stand by.</p>
              )}

           </div>
        </div>

        {/* UPCOMING TOPICS (LOCKED) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
           
           <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl relative overflow-hidden group hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-[2px]">
                 <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-widest border border-white/10 px-3 py-1 rounded bg-black/80">
                    <Lock size={12} /> Dossier Classifié
                 </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-2 block">Episode 01</span>
              <h3 className="text-lg font-bold text-white mb-2 filter blur-sm">L'IA Souveraine en Afrique</h3>
              <p className="text-xs text-slate-500 filter blur-sm">Analyse des infrastructures et des enjeux géopolitiques...</p>
           </div>

           <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl relative overflow-hidden group hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-[2px]">
                 <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-widest border border-white/10 px-3 py-1 rounded bg-black/80">
                    <Lock size={12} /> Dossier Classifié
                 </div>
              </div>
              <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-2 block">Episode 02</span>
              <h3 className="text-lg font-bold text-white mb-2 filter blur-sm">Agritech : Drones & Data</h3>
              <p className="text-xs text-slate-500 filter blur-sm">Comment la tech transforme l'agriculture de précision...</p>
           </div>

           <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl relative overflow-hidden group hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-[2px]">
                 <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase tracking-widest border border-white/10 px-3 py-1 rounded bg-black/80">
                    <Lock size={12} /> Dossier Classifié
                 </div>
              </div>
              <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-widest mb-2 block">Episode 03</span>
              <h3 className="text-lg font-bold text-white mb-2 filter blur-sm">Startup Nation</h3>
              <p className="text-xs text-slate-500 filter blur-sm">Entretien avec les fondateurs qui changent la donne...</p>
           </div>

        </div>

      </div>
    </div>
  );
};
