import React from 'react';
import { ArrowLeft, CheckCircle2, Zap, Clock, MapPin, User, Layers, Code2, Phone, Handshake, Cpu, FileText, Globe, Star, ArrowRight } from 'lucide-react';
import { JobPosting } from '../types';

interface JobDetailProps {
  job: JobPosting;
  onBack: () => void;
  onApply: (job: JobPosting) => void; // New prop for navigation
}

export const JobDetail: React.FC<JobDetailProps> = ({ job, onBack, onApply }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Dynamic Ambient Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-ecliptix-orange/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-ecliptix-orange/50 transition-all font-mono text-xs uppercase tracking-widest backdrop-blur-md"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux Offres
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block">
              LIVE RECRUITMENT // {job.id}
            </span>
          </div>
        </div>

        {/* MODERN HERO HEADER */}
        <div className="relative mb-16">
           <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-ecliptix-orange to-transparent hidden md:block"></div>
           
           <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                 <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-ecliptix-orange/20 to-transparent border-l-2 border-ecliptix-orange text-ecliptix-orange text-[10px] font-bold font-mono uppercase tracking-widest">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-[10px] font-mono uppercase tracking-widest">
                      <MapPin size={10} className="text-blue-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-[10px] font-mono uppercase tracking-widest">
                      <Clock size={10} className="text-purple-400" /> {job.type}
                    </span>
                 </div>
                 
                 <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-6 tracking-tight leading-tight">
                   {job.title}
                 </h1>
                 
                 <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                   {job.description}
                 </p>
              </div>

              <div className="flex flex-col items-end gap-4 shrink-0">
                 <button 
                   onClick={() => onApply(job)}
                   className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-3 group"
                 >
                   Postuler Maintenant <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                    <Zap size={12} className="text-ecliptix-orange" /> Réponse rapide garantie
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-16">
             
             {/* Mission Briefing */}
             <section>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                    <User size={18} />
                  </span>
                  Votre Mission
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 text-lg leading-loose font-light border-l-2 border-white/10 pl-6">
                    {job.mission}
                  </p>
                </div>
             </section>

             {/* Responsibilities - Circuit Style */}
             <section>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-ecliptix-orange/10 flex items-center justify-center border border-ecliptix-orange/20 text-ecliptix-orange">
                    <Layers size={18} />
                  </span>
                  Responsabilités Clés
                </h3>
                <div className="relative pl-4 border-l border-white/10 space-y-8">
                  {job.responsibilities.map((res, idx) => (
                    <div key={idx} className="relative pl-8 group">
                       {/* Node */}
                       <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-ecliptix-orange group-hover:scale-125 transition-all"></div>
                       
                       <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-all">
                          <p className="text-slate-300 leading-relaxed text-sm">{res}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </section>

             {/* Skills & Tools Grid */}
             <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Zap size={18} className="text-yellow-400" /> Compétences Requises
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-xs font-mono hover:border-ecliptix-orange/50 hover:text-white transition-colors cursor-default shadow-sm">
                         {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Code2 size={18} className="text-blue-400" /> Arsenal Technique
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {job.tools?.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-mono text-slate-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> {tool}
                      </div>
                    ))}
                  </div>
                </div>
             </section>

             {/* Requirements Checklist */}
             <section>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-400">
                    <CheckCircle2 size={18} />
                  </span>
                  Pré-requis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {job.requirements.map((req, idx) => (
                     <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                           <CheckCircle2 size={12} className="text-green-500" />
                        </div>
                        <span className="text-slate-300 text-sm leading-relaxed">{req}</span>
                     </div>
                  ))}
                </div>
             </section>

             {/* Recruitment Timeline */}
             <section>
                <h3 className="text-lg font-bold text-white mb-8 font-mono uppercase tracking-widest text-center opacity-60">Protocole de Recrutement</h3>
                <div className="relative">
                   <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block"></div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                      {[
                        { step: "01", title: "Candidature", desc: "Analyse CV & Portfolio", icon: FileText },
                        { step: "02", title: "Screening", desc: "Appel Découverte (15min)", icon: Phone },
                        { step: "03", title: "Tech Test", desc: "Challenge Technique", icon: Cpu },
                        { step: "04", title: "Offre", desc: "Proposition & Onboarding", icon: Handshake }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-black border border-white/10 p-6 rounded-xl text-center group hover:border-ecliptix-orange/50 transition-all">
                           <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-slate-400 group-hover:text-ecliptix-orange group-hover:scale-110 transition-all">
                              <item.icon size={18} />
                           </div>
                           <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">{item.title}</h4>
                           <p className="text-[10px] text-slate-500 font-mono">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </section>

          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
             
             {/* Snapshot Card */}
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md sticky top-24">
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                   <Globe size={14} className="text-ecliptix-orange" /> Données du Poste
                </h4>
                
                <div className="space-y-4">
                   <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sm text-slate-400">Expérience</span>
                      <span className="text-sm text-white font-medium">{job.experienceLevel}</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sm text-slate-400">Contrat</span>
                      <span className="text-sm text-white font-medium">{job.type}</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-sm text-slate-400">Département</span>
                      <span className="text-sm text-white font-medium">{job.department}</span>
                   </div>
                   {job.salaryRange && (
                     <div className="flex justify-between items-center py-3 border-b border-white/5">
                        <span className="text-sm text-slate-400">Salaire</span>
                        <span className="text-sm text-green-400 font-mono font-bold">{job.salaryRange}</span>
                     </div>
                   )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                   <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Avantages</h5>
                   <ul className="space-y-3">
                     {job.benefits.map((benefit, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                          {benefit}
                       </li>
                     ))}
                   </ul>
                </div>

                <button 
                  onClick={() => onApply(job)}
                  className="w-full mt-8 py-3 bg-ecliptix-orange text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-orange-500 transition-colors shadow-lg shadow-ecliptix-orange/20"
                >
                  Postuler à ce poste
                </button>
             </div>

             {/* Culture Snippet */}
             <div className="p-6 rounded-2xl border border-dashed border-white/10 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4">
                   <Star className="text-white" size={20} fill="currentColor" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">Culture Builder</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  "Nous ne recrutons pas pour des compétences, nous recrutons pour une attitude. Les compétences s'apprennent, la passion ne se simule pas."
                </p>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};