
import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, MapPin, CheckCircle2, BookOpen, GraduationCap, Award, Zap, ChevronDown, Send, X, Target, Download, Trophy, Star, Sparkles, Layout, Code2 } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onRegister: (course: Course) => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack, onRegister }) => {
  const [showDownloadAnim, setShowDownloadAnim] = useState(false);

  const handleDownloadSyllabus = () => {
    setShowDownloadAnim(true);
    setTimeout(() => {
      window.print();
      setShowDownloadAnim(false);
    }, 1500);
  };

  return (
    <>
      {/* SCREEN VIEW */}
      <div className="screen-only min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
        
        {/* Background Ambience */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Navigation */}
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-12"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour à l'Académie
          </button>

          {/* Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
             <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                   <span className={`px-3 py-1 border text-[10px] font-mono uppercase tracking-widest rounded flex items-center gap-2 ${course.level.includes("Expert") ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-purple-500/10 border-purple-500/30 text-purple-400'}`}>
                     <Star size={10} fill="currentColor" /> {course.level}
                   </span>
                   <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono uppercase tracking-widest rounded flex items-center gap-2">
                     <Clock size={12} /> {course.duration}
                   </span>
                   <span className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono uppercase tracking-widest rounded flex items-center gap-2">
                     <MapPin size={12} /> {course.format}
                   </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-slate-400 mb-6 leading-tight">
                  {course.title}
                </h1>
                <p className="text-xl text-slate-300 font-light leading-relaxed mb-8 border-l-2 border-purple-500/30 pl-6">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4">
                   <button 
                     onClick={() => onRegister(course)}
                     className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest transition-all rounded shadow-[0_0_20px_rgba(147,51,234,0.3)] flex items-center gap-2 hover:scale-105"
                   >
                     S'enrôler Maintenant <Zap size={16} fill="currentColor" />
                   </button>
                   <div className="px-8 py-4 bg-white/5 border border-white/10 text-white font-mono uppercase tracking-widest rounded flex items-center gap-2">
                     <Calendar size={16} className="text-purple-400" /> Next: {course.nextSession}
                   </div>
                </div>
             </div>

             <div className="lg:col-span-1">
                <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl sticky top-24 backdrop-blur-md">
                   <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                     <Zap size={14} className="text-purple-400" /> Infos Clés
                   </h3>
                   
                   <div className="space-y-6">
                      <div>
                         <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Investissement</div>
                         <div className="text-3xl font-bold text-white tracking-tight">{course.price}</div>
                         <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                           <CheckCircle2 size={10} className="text-green-500" /> Payable en 3 tranches
                         </div>
                      </div>
                      
                      <div>
                         <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Certification</div>
                         <div className="flex items-center gap-2 text-sm text-purple-300 font-bold bg-purple-500/10 p-2 rounded border border-purple-500/20">
                            <Award size={16} /> {course.certification}
                         </div>
                      </div>

                      <button 
                        onClick={handleDownloadSyllabus}
                        className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Download size={14} /> Télécharger Syllabus
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Content Tabs / Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             
             <div className="lg:col-span-8 space-y-20">
                
                {/* Visual Roadmap Curriculum */}
                <section>
                   <div className="flex items-center gap-4 mb-12">
                      <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Roadmap Pédagogique</h3>
                        <p className="text-sm text-slate-400">Votre itinéraire d'apprentissage, semaine par semaine.</p>
                      </div>
                   </div>
                   
                   <div className="relative pl-4 md:pl-0">
                      {/* Center Line (Desktop) / Left Line (Mobile) */}
                      <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-900 to-ecliptix-orange transform md:-translate-x-1/2 rounded-full"></div>

                      <div className="space-y-12">
                         {course.curriculum.map((mod, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                               <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                  
                                  {/* Checkpoint Node */}
                                  <div className="absolute left-[-5px] md:left-[50%] top-0 w-3 h-3 md:w-4 md:h-4 bg-black border-2 border-purple-500 rounded-full transform md:-translate-x-1/2 z-10 shadow-[0_0_10px_#a855f7]"></div>
                                  
                                  {/* Content Card */}
                                  <div className="flex-1 w-full pl-8 md:pl-0">
                                     <div className={`bg-slate-900/60 border border-white/10 p-6 rounded-2xl relative group hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                        {/* Connector Line (Desktop) */}
                                        <div className={`hidden md:block absolute top-2 w-8 h-px bg-purple-500/30 ${isEven ? 'right-full' : 'left-full'}`}></div>

                                        <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-400 font-bold uppercase mb-3">
                                           {mod.module}
                                        </span>
                                        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{mod.title}</h4>
                                        
                                        <ul className={`space-y-2 ${isEven ? '' : 'md:flex md:flex-col md:items-end'}`}>
                                           {mod.topics.map((topic, tIdx) => (
                                              <li key={tIdx} className="flex items-center gap-2 text-sm text-slate-400">
                                                 {isEven && <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></div>}
                                                 {topic}
                                                 {!isEven && <div className="hidden md:block w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></div>}
                                                 {!isEven && <div className="md:hidden w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0 order-first"></div>}
                                              </li>
                                           ))}
                                        </ul>
                                     </div>
                                  </div>

                                  {/* Empty space for alignment */}
                                  <div className="flex-1 hidden md:block"></div>
                               </div>
                            );
                         })}
                      </div>

                      {/* TROPHY / ACCOMPLISHMENT NODE */}
                      <div className="relative flex flex-col items-center mt-16 text-center">
                         <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.4)] relative z-10 animate-pulse-slow">
                            <Trophy size={40} className="text-white" />
                         </div>
                         <div className="mt-6">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 uppercase tracking-widest">
                               Certification
                            </h3>
                            <p className="text-slate-400 font-mono text-sm mt-2">{course.certification}</p>
                         </div>
                      </div>
                   </div>
                </section>
                
                {/* Tech Stack */}
                <section>
                   <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <Code2 size={18} className="text-blue-400" /> Stack Technique Maîtrisée
                   </h3>
                   <div className="flex flex-wrap gap-4">
                      {course.stack?.map((tech, idx) => (
                         <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-slate-300">
                            {course.stackIcons?.[idx] || <Code2 size={16} />}
                            <span className="font-mono text-sm font-bold">{tech}</span>
                         </div>
                      ))}
                   </div>
                </section>

             </div>

             {/* Sidebar Info */}
             <div className="lg:col-span-4 space-y-8">
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-white/10">
                   <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                      <Target size={16} className="text-ecliptix-orange" /> Objectifs
                   </h3>
                   <ul className="space-y-4">
                      {course.objectives.map((obj, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300 leading-relaxed">{obj}</span>
                         </li>
                      ))}
                   </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                   <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                      <GraduationCap size={16} className="text-blue-400" /> Pour Qui ?
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {course.targetAudience.map((target, idx) => (
                         <span key={idx} className="px-3 py-1 bg-black/40 border border-white/10 rounded text-xs text-slate-300 font-mono">
                            {target}
                         </span>
                      ))}
                   </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                   <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                      <Layout size={16} className="text-slate-400" /> Pré-requis
                   </h3>
                   <ul className="space-y-2">
                      {course.prerequisites.map((req, idx) => (
                         <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-mono">
                            <div className="w-1 h-1 bg-slate-500 rounded-full mt-1.5 shrink-0"></div>
                            {req}
                         </li>
                      ))}
                   </ul>
                </div>

             </div>
          </div>

        </div>

        {/* DOWNLOAD ANIMATION */}
        {showDownloadAnim && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-[fadeIn_0.3s_ease-out]">
              <div className="text-center max-w-md px-4 relative">
                 <div className="w-20 h-20 border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin mx-auto mb-8"></div>
                 <h3 className="text-2xl font-mono text-white uppercase tracking-widest animate-pulse mb-2">Génération Syllabus...</h3>
                 <p className="text-slate-400 text-xs mt-4">Préparation du document PDF pour {course.title}</p>
              </div>
           </div>
        )}
      </div>

      {/* PRINT LAYOUT (A4 Brochure) */}
      <div className="print-only font-sans bg-white text-black p-0">
         
         {/* Print Header */}
         <div className="flex justify-between items-center border-b-2 border-purple-600 pb-6 mb-8">
            <div className="flex items-center gap-4">
               {/* Logo Placeholder - In production use real logo */}
               <div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white">
                 <Zap fill="white" size={24} />
               </div>
               <div>
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">ECLIPTIX ACADEMY</h1>
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-500">Formation d'Élite Tech & IA</p>
               </div>
            </div>
            <div className="text-right">
               <div className="text-xs text-purple-600 font-bold uppercase tracking-widest border border-purple-200 bg-purple-50 px-2 py-1 rounded">Syllabus 2025</div>
            </div>
         </div>

         {/* Course Title Block */}
         <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{course.title}</h1>
            <p className="text-slate-600 text-sm leading-relaxed text-justify border-l-4 border-purple-600 pl-4">
               {course.description}
            </p>
         </div>

         {/* Info Grid */}
         <div className="grid grid-cols-4 gap-4 mb-8 bg-slate-50 p-6 rounded-lg border border-slate-200">
            <div>
               <div className="text-[10px] font-bold text-slate-400 uppercase">Niveau</div>
               <div className="text-sm font-bold text-slate-800">{course.level}</div>
            </div>
            <div>
               <div className="text-[10px] font-bold text-slate-400 uppercase">Durée</div>
               <div className="text-sm font-bold text-slate-800">{course.duration}</div>
            </div>
            <div>
               <div className="text-[10px] font-bold text-slate-400 uppercase">Prochaine Session</div>
               <div className="text-sm font-bold text-slate-800">{course.nextSession}</div>
            </div>
             <div>
               <div className="text-[10px] font-bold text-slate-400 uppercase">Prix</div>
               <div className="text-sm font-bold text-purple-700">{course.price}</div>
            </div>
         </div>

         {/* Objectives */}
         <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Objectifs de la formation</h3>
            <ul className="grid grid-cols-2 gap-2">
               {course.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                     <CheckCircle2 size={12} className="text-purple-600 shrink-0 mt-0.5" /> {obj}
                  </li>
               ))}
            </ul>
         </div>

         {/* Curriculum List (Print Optimized) */}
         <div className="mb-8 break-inside-avoid">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-4">Programme Détaillé</h3>
            <div className="space-y-4">
               {course.curriculum.map((mod, i) => (
                  <div key={i} className="flex gap-4 border-b border-slate-100 pb-4 break-inside-avoid">
                     <div className="w-24 shrink-0">
                        <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-600 uppercase">{mod.module}</span>
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">{mod.title}</h4>
                        <div className="text-xs text-slate-500 flex flex-wrap gap-x-3">
                           {mod.topics.map((t, j) => (
                              <span key={j}>• {t}</span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Stack & Certification */}
         <div className="flex gap-8 mb-8 break-inside-avoid">
            <div className="flex-1 p-4 border border-slate-200 rounded">
               <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Technologies</h4>
               <div className="flex flex-wrap gap-2">
                  {course.stack?.map((tech, i) => (
                     <span key={i} className="text-[10px] bg-slate-100 px-2 py-1 rounded border border-slate-200 font-mono">{tech}</span>
                  ))}
               </div>
            </div>
            <div className="flex-1 p-4 border border-purple-200 bg-purple-50 rounded">
               <h4 className="text-xs font-bold text-purple-600 uppercase mb-2">Certification Délivrée</h4>
               <div className="flex items-center gap-2">
                  <Award size={20} className="text-purple-600" />
                  <span className="text-sm font-bold text-slate-900">{course.certification}</span>
               </div>
            </div>
         </div>

         {/* Print Footer */}
         <div className="fixed bottom-0 left-0 w-full p-8 border-t-2 border-slate-900 bg-white">
            <div className="flex justify-between items-end">
               <div className="text-[10px] text-slate-500 space-y-1">
                  <div><strong>ECLIPTIX SASU</strong> - Saint-Louis, Sénégal</div>
                  <div>Centre d'Excellence IA & Data</div>
                  <div>+221 78 436 35 37 • contact@ecliptix.tech</div>
               </div>
               <div className="text-right">
                  <div className="text-xl font-bold tracking-tight text-slate-900">ECLIPTIX</div>
                  <div className="text-[8px] uppercase tracking-[0.3em] text-slate-400">Forging the Future</div>
               </div>
            </div>
         </div>

      </div>
    </>
  );
};
