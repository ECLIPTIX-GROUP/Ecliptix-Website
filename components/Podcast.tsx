
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Radio, Mic, Signal, Loader2, Bell, ShieldCheck, Activity, User, Linkedin, MessageSquare, Send, CheckCircle2, Lightbulb, BarChart2, Zap, Play, Disc, Grip } from 'lucide-react';
import { submitForm } from '../utils/formService';

interface PodcastProps {
  onBack: () => void;
}

export const Podcast: React.FC<PodcastProps> = ({ onBack }) => {
  // Newsletter State
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Speaker Form State
  const [guestForm, setGuestForm] = useState({
    name: '',
    linkedin: '',
    topic: ''
  });
  const [guestStatus, setGuestStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Suggestion State
  const [suggestion, setSuggestion] = useState('');
  const [suggestionStatus, setSuggestionStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Poll State
  const [voted, setVoted] = useState<string | null>(null);
  
  // Animation state for visualizer
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Generate random heights for visualizer
    setBars(Array.from({ length: 40 }, () => Math.random() * 100));
    const interval = setInterval(() => {
        setBars(Array.from({ length: 40 }, () => Math.random() * 100));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const upcomingEpisodes = [
    {
      id: "EP-01",
      title: "L'IA Souveraine",
      subtitle: "Stratégie Continentale",
      desc: "Pourquoi l'Afrique doit entraîner ses propres modèles sur ses infrastructures.",
      guest: "Dr. Aminata Ly",
      color: "cyan",
      time: "45 min"
    },
    {
      id: "EP-02",
      title: "Drones & Agritech",
      subtitle: "Révolution Verte",
      desc: "Retour d'expérience terrain sur le déploiement de PEST AI dans la vallée.",
      guest: "Thierno Bocar Dieng",
      color: "green",
      time: "38 min"
    },
    {
      id: "EP-03",
      title: "Fintech Shield",
      subtitle: "Cybersécurité IA",
      desc: "Comment le ML sécurise les transactions Mobile Money en temps réel.",
      guest: "Expert Cyber (TBA)",
      color: "purple",
      time: "42 min"
    }
  ];

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
      alert("Erreur réseau.");
    }
  };

  const handleGuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestForm.name.trim() || !guestForm.linkedin.trim()) return;
    setGuestStatus('submitting');
    const success = await submitForm({
      Nom: guestForm.name,
      LinkedIn: guestForm.linkedin,
      Sujet_Propose: guestForm.topic
    }, "Candidature Podcast Intervenant");
    if (success) {
      setGuestStatus('success');
      setGuestForm({ name: '', linkedin: '', topic: '' });
    } else {
      setGuestStatus('idle');
      alert("Erreur lors de l'envoi.");
    }
  };

  const handleSuggestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    setSuggestionStatus('submitting');
    const success = await submitForm({ Suggestion: suggestion }, "Suggestion Sujet Podcast");
    if (success) {
      setSuggestionStatus('success');
      setSuggestion('');
      setTimeout(() => setSuggestionStatus('idle'), 3000);
    } else {
      setSuggestionStatus('idle');
      alert("Erreur lors de l'envoi.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         {/* Deep Space Gradients */}
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-indigo-900/20 via-black to-black"></div>
         <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
         
         {/* Grid Floor */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au QG
        </button>

        {/* HERO: THE PLAYER CONSOLE */}
        <div className="relative mb-20 p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl">
           <div className="absolute inset-0 bg-black/80 rounded-[2.5rem] backdrop-blur-2xl"></div>
           
           {/* Inner Content */}
           <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
              
              {/* Spinning Disc Art */}
              <div className="relative w-64 h-64 shrink-0 group">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
                 <div className="relative w-full h-full rounded-full border border-white/10 bg-black flex items-center justify-center overflow-hidden shadow-2xl">
                    {/* Vinyl Texture */}
                    <div className="absolute inset-0 bg-[repeating-radial-gradient(#111_0,#111_2px,#000_3px)] opacity-50"></div>
                    <div className="absolute inset-2 rounded-full border border-white/5"></div>
                    <div className="absolute inset-16 rounded-full border border-white/5"></div>
                    
                    {/* Center Label */}
                    <div className="absolute w-24 h-24 bg-gradient-to-br from-slate-800 to-black rounded-full border border-white/20 flex items-center justify-center z-10">
                       <Radio size={32} className="text-white" />
                    </div>

                    {/* Rotating Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full animate-[spin_4s_linear_infinite]"></div>
                 </div>
                 
                 {/* Play Button Overlay */}
                 <div className="absolute bottom-0 right-0 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-not-allowed group-hover:scale-110 transition-transform z-20">
                    <Play size={24} fill="black" className="ml-1" />
                 </div>
              </div>

              {/* Info & Visualizer */}
              <div className="flex-1 w-full text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                       <span className="relative flex h-2 w-2">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                       </span>
                       <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Offline</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Saison 01 • Bientôt</span>
                 </div>

                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
                    Ecliptix <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Frequency</span>
                 </h1>
                 
                 {/* Dynamic Visualizer Bars */}
                 <div className="h-12 flex items-center justify-center md:justify-start gap-1 mb-8 opacity-60">
                    {bars.map((height, i) => (
                       <div 
                         key={i} 
                         className="w-1.5 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full transition-all duration-200 ease-in-out" 
                         style={{ height: `${height}%` }}
                       ></div>
                    ))}
                 </div>

                 {/* Notify Input */}
                 <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0">
                    <div className="relative flex-1">
                       <Bell size={16} className="absolute left-4 top-4 text-slate-500" />
                       <input 
                         type="email" 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         disabled={status === 'success' || status === 'submitting'}
                         placeholder="votre.email@frequence.com"
                         className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-600 font-mono"
                       />
                    </div>
                    <button 
                      onClick={handleNotify}
                      disabled={status === 'success' || status === 'submitting'}
                      className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                       {status === 'submitting' ? <Loader2 size={16} className="animate-spin" /> : status === 'success' ? <CheckCircle2 size={16}/> : 'Notifiez-moi'}
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* EPISODES GRID */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-8">
              <Disc className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Programme Saison 1</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEpisodes.map((ep, idx) => (
                 <div key={idx} className="group relative bg-slate-900/40 border border-white/5 rounded-2xl p-6 overflow-hidden hover:bg-slate-900/80 transition-all duration-300 hover:border-white/10 hover:shadow-2xl">
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${ep.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                       <div className="flex justify-between items-start mb-4">
                          <span className={`px-2 py-1 rounded bg-${ep.color}-500/10 border border-${ep.color}-500/20 text-${ep.color}-400 text-[10px] font-mono uppercase tracking-widest`}>
                             {ep.id}
                          </span>
                          <span className="text-slate-500 text-xs font-mono flex items-center gap-1">
                             <Activity size={10} /> {ep.time}
                          </span>
                       </div>

                       <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{ep.title}</h4>
                       <p className={`text-xs font-mono uppercase tracking-wider text-${ep.color}-400 mb-4`}>{ep.subtitle}</p>
                       
                       <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l border-white/10 pl-3">
                          {ep.desc}
                       </p>

                       <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 text-slate-400">
                             <User size={14} />
                          </div>
                          <div>
                             <div className="text-[10px] text-slate-500 uppercase font-mono">Invité</div>
                             <div className="text-xs text-white font-bold">{ep.guest}</div>
                          </div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* INTERACTIVE ZONE (Cleaned Up - No Insiders) */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-8">
              <Zap className="text-yellow-500" size={24} />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Zone Interactive</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Poll Card */}
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                 <div className="flex items-center gap-2 mb-6 text-blue-400 font-mono text-xs uppercase tracking-widest">
                    <BarChart2 size={16} /> Question du mois
                 </div>
                 <h4 className="text-white font-bold text-xl mb-8 leading-snug">
                    "L'IA Générative va-t-elle remplacer les développeurs Juniors en Afrique ?"
                 </h4>
                 
                 {!voted ? (
                    <div className="space-y-4 mt-auto">
                       <button onClick={() => setVoted('oui')} className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl text-left text-sm text-slate-300 transition-all flex justify-between items-center group">
                          <span className="group-hover:text-white transition-colors">Oui, c'est inévitable</span>
                          <span className="w-4 h-4 rounded-full border border-slate-500 group-hover:border-blue-400"></span>
                       </button>
                       <button onClick={() => setVoted('non')} className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl text-left text-sm text-slate-300 transition-all flex justify-between items-center group">
                          <span className="group-hover:text-white transition-colors">Non, elle va les augmenter</span>
                          <span className="w-4 h-4 rounded-full border border-slate-500 group-hover:border-blue-400"></span>
                       </button>
                    </div>
                 ) : (
                    <div className="space-y-6 mt-auto animate-[fadeIn_0.5s_ease-out]">
                       <div className="space-y-2">
                          <div className="flex justify-between text-xs text-slate-400">
                             <span>Oui</span>
                             <span>28%</span>
                          </div>
                          <div className="w-full h-3 bg-black rounded-full overflow-hidden border border-white/5">
                             <div className="h-full bg-blue-500/50 w-[28%]"></div>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between text-xs text-slate-400">
                             <span>Non (Augmentation)</span>
                             <span className="text-blue-400 font-bold">72%</span>
                          </div>
                          <div className="w-full h-3 bg-black rounded-full overflow-hidden border border-white/5">
                             <div className="h-full bg-blue-500 w-[72%] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                          </div>
                       </div>
                       <p className="text-center text-[10px] text-slate-500 font-mono mt-4">Vote enregistré sur la Blockchain</p>
                    </div>
                 )}
              </div>

              {/* Brainstorm Box */}
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col group hover:border-yellow-500/30 transition-all">
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                 <div className="flex items-center gap-2 mb-6 text-yellow-500 font-mono text-xs uppercase tracking-widest">
                    <Lightbulb size={16} /> Brainstorm
                 </div>
                 <h4 className="text-white font-bold text-xl mb-2">Proposez un Sujet</h4>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Une innovation vous intrigue ? Un expert que vous voulez entendre ? C'est vous qui faites le programme de la prochaine saison.
                 </p>
                 
                 <form onSubmit={handleSuggestionSubmit} className="mt-auto relative">
                    <div className="relative">
                       <input 
                         type="text" 
                         value={suggestion}
                         onChange={(e) => setSuggestion(e.target.value)}
                         disabled={suggestionStatus === 'success' || suggestionStatus === 'submitting'}
                         placeholder="Ex: Impact de la 5G..."
                         className="w-full bg-black/40 border border-white/10 rounded-xl p-4 pr-14 text-sm text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all placeholder:text-slate-600 font-mono"
                       />
                       <button 
                         type="submit"
                         disabled={suggestionStatus === 'success' || suggestionStatus === 'submitting'}
                         className="absolute right-2 top-2 bottom-2 w-10 flex items-center justify-center bg-white/5 hover:bg-yellow-500 hover:text-black rounded-lg text-slate-400 transition-all disabled:opacity-50"
                       >
                          {suggestionStatus === 'submitting' ? <Loader2 size={16} className="animate-spin"/> : suggestionStatus === 'success' ? <CheckCircle2 size={16}/> : <Send size={16}/>}
                       </button>
                    </div>
                    {suggestionStatus === 'success' && <p className="text-green-400 text-[10px] mt-3 ml-1 font-mono flex items-center gap-1"><CheckCircle2 size={10}/> Transmis à la rédaction !</p>}
                 </form>
              </div>

           </div>
        </div>

        {/* CALL FOR SPEAKERS - TERMINAL STYLE */}
        <div className="relative rounded-3xl overflow-hidden bg-black border border-white/10">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Info Side */}
              <div className="lg:col-span-5 p-8 md:p-12 bg-slate-900/50 border-r border-white/10 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                       <Mic size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Appel à Experts</h3>
                 </div>
                 <p className="text-slate-400 text-sm leading-loose mb-8">
                    Vous êtes un pionnier de l'IA, de l'Agritech ou de la Fintech ? Le micro d'Ecliptix Frequency est ouvert. Venez partager votre expertise technique sans filtre marketing.
                 </p>
                 <ul className="space-y-4 font-mono text-xs text-slate-500">
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> +10k Auditeurs Qualifiés
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Format Interview 45min
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Remote ou Studio
                    </li>
                 </ul>
              </div>

              {/* Form Side */}
              <div className="lg:col-span-7 p-8 md:p-12 bg-black">
                 {guestStatus === 'success' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                       <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30 mb-6">
                          <CheckCircle2 size={32} className="text-green-500" />
                       </div>
                       <h4 className="text-white font-bold text-lg mb-2">Signal Reçu</h4>
                       <p className="text-slate-500 text-sm font-mono">Notre équipe éditoriale analyse votre profil.</p>
                       <button onClick={() => setGuestStatus('idle')} className="mt-8 text-xs text-cyan-400 hover:text-white underline underline-offset-4">Nouvelle transmission</button>
                    </div>
                 ) : (
                    <form onSubmit={handleGuestSubmit} className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] text-slate-500 font-mono uppercase">Nom Complet</label>
                             <input 
                                required
                                type="text" 
                                value={guestForm.name}
                                onChange={(e) => setGuestForm({...guestForm, name: e.target.value})}
                                className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-700"
                                placeholder="Ex: Seynabou Diop"
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] text-slate-500 font-mono uppercase">Lien LinkedIn</label>
                             <div className="relative">
                                <Linkedin size={14} className="absolute left-3 top-3.5 text-slate-600"/>
                                <input 
                                   required
                                   type="text" 
                                   value={guestForm.linkedin}
                                   onChange={(e) => setGuestForm({...guestForm, linkedin: e.target.value})}
                                   className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 pl-9 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-700"
                                   placeholder="linkedin.com/in/..."
                                />
                             </div>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] text-slate-500 font-mono uppercase">Sujet de prédilection</label>
                          <div className="relative">
                             <MessageSquare size={14} className="absolute left-3 top-3.5 text-slate-600"/>
                             <input 
                                type="text" 
                                value={guestForm.topic}
                                onChange={(e) => setGuestForm({...guestForm, topic: e.target.value})}
                                className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 pl-9 text-white text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-700"
                                placeholder="De quoi voulez-vous parler ?"
                             />
                          </div>
                       </div>

                       <button 
                          type="submit"
                          disabled={guestStatus === 'submitting'}
                          className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 mt-4"
                       >
                          {guestStatus === 'submitting' ? <Loader2 size={14} className="animate-spin"/> : <><Send size={14}/> Envoyer Candidature</>}
                       </button>
                    </form>
                 )}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};
