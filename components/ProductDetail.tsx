
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Zap, Clock, MapPin, User, Layers, Code2, Phone, Handshake, Cpu, FileText, Globe, Star, ArrowRight, Download, Printer, Sun, Wind, Droplets, LayoutDashboard, Scan, Sprout, BarChart3, ShoppingCart, MessageSquare, Settings, Bell, Search, Bot, Thermometer, Leaf, AlertTriangle, Calendar, Activity, Mail, Send, Loader2, Target, Lightbulb, ShieldCheck, Flag, Eye } from 'lucide-react';
import { ProductItem, ProductModule } from '../types';
import { DemoRequest } from './DemoRequest';
import { SuccessPage } from './SuccessPage';
import { submitForm } from '../utils/formService';

interface ProductDetailProps {
  product: ProductItem;
  onBack: () => void;
  onModuleClick: (module: ProductModule) => void;
  onRequestDemo: (product: ProductItem) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onModuleClick, onRequestDemo }) => {
  const [showDownloadAnim, setShowDownloadAnim] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  // Dynamic color classes based on theme
  const getTheme = () => {
    switch (product.themeColor) {
      case 'green': 
        return { 
          accent: 'text-green-400', 
          bgAccent: 'bg-green-500', 
          border: 'border-green-500',
          gradientFrom: 'from-green-900/20',
          printColor: '#16a34a', // darker green for print legibility
          printBg: '#f0fdf4',
          shadow: 'shadow-green-500/20',
          bgSoft: 'bg-green-500/10',
          ring: 'focus:ring-green-500',
          placeholder: 'placeholder:text-green-500/30'
        };
      case 'purple':
        return { 
          accent: 'text-purple-400', 
          bgAccent: 'bg-purple-500', 
          border: 'border-purple-500',
          gradientFrom: 'from-purple-900/20',
          printColor: '#9333ea',
          printBg: '#faf5ff',
          shadow: 'shadow-purple-500/20',
          bgSoft: 'bg-purple-500/10',
          ring: 'focus:ring-purple-500',
          placeholder: 'placeholder:text-purple-500/30'
        };
      case 'orange':
        return { 
          accent: 'text-orange-400', 
          bgAccent: 'bg-orange-500', 
          border: 'border-orange-500',
          gradientFrom: 'from-orange-900/20',
          printColor: '#ea580c',
          printBg: '#fff7ed',
          shadow: 'shadow-orange-500/20',
          bgSoft: 'bg-orange-500/10',
          ring: 'focus:ring-orange-500',
          placeholder: 'placeholder:text-orange-500/30'
        };
      default: // blue
        return { 
          accent: 'text-blue-400', 
          bgAccent: 'bg-blue-500', 
          border: 'border-blue-500',
          gradientFrom: 'from-blue-900/20',
          printColor: '#2563eb',
          printBg: '#eff6ff',
          shadow: 'shadow-blue-500/20',
          bgSoft: 'bg-blue-500/10',
          ring: 'focus:ring-blue-500',
          placeholder: 'placeholder:text-blue-500/30'
        };
    }
  };

  const theme = getTheme();

  const handleDownloadBrochure = () => {
    setShowDownloadAnim(true);
    setTimeout(() => {
      window.print();
      setShowDownloadAnim(false);
    }, 2000);
  };

  const handleQuickContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await submitForm({
      Produit: product.title,
      ...formState
    }, `Contact Rapide: ${product.title}`);
    
    setIsSubmitting(false);
    if(success) {
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      {/* SCREEN LAYOUT */}
      <div className="screen-only min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
        
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className={`absolute top-[10%] right-[-10%] w-[800px] h-[800px] ${product.themeColor === 'green' ? 'bg-green-900/10' : product.themeColor === 'purple' ? 'bg-purple-900/10' : product.themeColor === 'orange' ? 'bg-orange-900/10' : 'bg-blue-900/10'} rounded-full blur-[120px]`}></div>
        </div>

        <div className="max-w-7xl mx-auto mb-8 relative z-10">
          <button 
            onClick={onBack}
            className={`group flex items-center gap-2 text-slate-400 hover:${theme.accent} transition-colors font-mono text-xs uppercase tracking-widest mb-8`}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour au Hub
          </button>

          {/* Hero Header */}
          <div className={`relative overflow-hidden rounded-3xl border ${theme.border}/30 bg-slate-900/80 backdrop-blur-xl p-6 md:p-12 mb-12`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradientFrom} to-transparent`}></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${theme.bgAccent}/10 border ${theme.border}/30`}>
                    {React.isValidElement(product.icon) && product.icon.type === 'img' ? (
                       <div className="w-8 h-8 rounded overflow-hidden">
                         {product.icon}
                       </div>
                    ) : (
                       React.cloneElement(product.icon as React.ReactElement<any>, { className: `w-8 h-8 ${theme.accent}` })
                    )}
                  </div>
                  <span className={`font-mono text-xs font-bold ${theme.accent} uppercase tracking-widest border border-${theme.border}/30 px-3 py-1 rounded-full`}>
                    {product.subtitle}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  {product.title}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
                  {product.description}
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 gap-4">
                {product.impactStats.map((stat, idx) => (
                  <div key={idx} className={`p-4 bg-black/40 border ${theme.border}/20 rounded-lg flex items-center justify-between`}>
                    <span className="text-xs font-mono text-slate-500 uppercase">{stat.label}</span>
                    <span className={`text-xl font-bold font-mono ${theme.accent}`}>{stat.value}</span>
                  </div>
                ))}
                <div className={`mt-4 p-4 border ${theme.border}/20 bg-${theme.border}/5 rounded-lg`}>
                  <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">Cible</div>
                  <div className="text-white text-sm">{product.targetAudience}</div>
                </div>
              </div>
            </div>
          </div>

          {/* CHALLENGE / PROBLEM SECTION (Landing Page Style) */}
          <div className="mb-20">
             <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-2 border ${theme.border}/30 px-4 py-1 rounded-full ${theme.bgSoft} backdrop-blur-md mb-4`}>
                   <AlertTriangle size={14} className={theme.accent} />
                   <span className={`text-[10px] font-mono ${theme.accent} uppercase tracking-[0.3em]`}>Situation Critique</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Pourquoi cette <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientFrom.replace('/20','')} to-white`}>Solution ?</span></h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.challenges?.map((challenge, idx) => (
                   <div key={idx} className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all">
                      <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity ${theme.accent}`}>
                         {React.isValidElement(challenge.icon) ? React.cloneElement(challenge.icon as React.ReactElement<any>, { size: 80 }) : null}
                      </div>
                      <div className={`w-12 h-12 rounded-lg ${theme.bgSoft} border ${theme.border}/20 flex items-center justify-center mb-4 ${theme.accent}`}>
                         {challenge.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4 min-h-[60px]">
                         {challenge.description}
                      </p>
                      {challenge.stat && (
                         <div className={`inline-block px-3 py-1 rounded border ${theme.border}/30 bg-black/40 text-xs font-mono font-bold ${theme.accent}`}>
                            {challenge.stat}
                         </div>
                      )}
                   </div>
                ))}
             </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Globe className={`${theme.accent}`} /> Vision Stratégique
                </h3>
                <div className="text-slate-400 leading-relaxed whitespace-pre-wrap text-justify">
                  {product.fullDescription}
                </div>

                {/* Mission / Vision / Values - Visual Block */}
                {(product.mission || product.vision || product.productValues) && (
                   <div className="mt-12 bg-slate-900/50 border border-white/10 rounded-2xl p-8 space-y-8">
                      {product.mission && (
                         <div>
                            <h4 className={`text-sm font-bold uppercase tracking-widest ${theme.accent} mb-3 flex items-center gap-2`}>
                               <Flag size={16} /> Mission
                            </h4>
                            <p className="text-white font-medium italic leading-relaxed border-l-2 border-white/20 pl-4">
                               "{product.mission}"
                            </p>
                         </div>
                      )}
                      
                      {product.vision && (
                         <div>
                            <h4 className={`text-sm font-bold uppercase tracking-widest ${theme.accent} mb-3 flex items-center gap-2`}>
                               <Eye size={16} /> Vision
                            </h4>
                            <p className="text-slate-300 text-sm leading-relaxed">
                               {product.vision}
                            </p>
                         </div>
                      )}

                      {product.productValues && (
                         <div>
                            <h4 className={`text-sm font-bold uppercase tracking-widest ${theme.accent} mb-4 flex items-center gap-2`}>
                               <ShieldCheck size={16} /> Valeurs Fondamentales
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                               {product.productValues.map((val, idx) => (
                                  <div key={idx} className="bg-black/30 p-4 rounded-lg border border-white/5">
                                     <div className="font-bold text-white text-xs mb-2">{val.title}</div>
                                     <p className="text-[10px] text-slate-400 leading-normal">{val.description}</p>
                                  </div>
                               ))}
                            </div>
                         </div>
                      )}
                   </div>
                )}
              </div>

              {/* Modules Breakdown */}
              <div className="break-inside-avoid">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Layers className={`${theme.accent}`} /> Architecture Modulaire
                </h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {product.modules.map((module, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onModuleClick(module)}
                      className={`group relative p-6 bg-slate-900/50 border ${theme.border}/20 hover:${theme.border}/50 transition-all rounded-xl overflow-hidden cursor-pointer shadow-lg hover:${theme.shadow}`}
                    >
                      <div className={`absolute top-0 left-0 w-1 h-full ${theme.bgAccent} opacity-50 group-hover:w-1.5 transition-all`}></div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className={`w-16 h-16 rounded-full ${theme.bgAccent}/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          {React.cloneElement(module.icon as React.ReactElement<any>, { className: `w-8 h-8 ${theme.accent}` })}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                             <div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">{module.title}</h4>
                                <p className={`text-xs font-mono ${theme.accent} uppercase tracking-wider mb-3`}>{module.subtitle}</p>
                             </div>
                             <div className={`hidden md:flex items-center gap-1 text-[10px] font-mono ${theme.accent} uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity`}>
                                View Specs <ArrowRight size={12} />
                             </div>
                          </div>

                          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                            {module.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {module.techTags.map((tag, tIdx) => (
                              <span key={tIdx} className="px-2 py-1 bg-white/5 text-[10px] font-mono text-slate-500 rounded border border-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-6">
              <div className={`p-6 border ${theme.border}/30 rounded-xl bg-gradient-to-b ${theme.gradientFrom} to-transparent sticky top-24`}>
                <div className="flex justify-center mb-6">
                   <div className={`w-20 h-20 rounded-full ${theme.bgAccent}/20 animate-pulse flex items-center justify-center border ${theme.border}/50`}>
                      <Zap className={`w-10 h-10 ${theme.accent}`} />
                   </div>
                </div>
                <h3 className="text-center text-white font-bold mb-2">Prêt à déployer ?</h3>
                <p className="text-center text-slate-400 text-sm mb-6">
                  Intégrez {product.title} à votre organisation dès aujourd'hui.
                </p>
                
                <button 
                  onClick={() => onRequestDemo(product)}
                  className={`w-full py-3 ${theme.bgAccent} hover:opacity-90 text-black font-bold uppercase tracking-widest rounded transition-all mb-4 shadow-lg ${theme.shadow}`}
                >
                  Demander une Démo
                </button>
                
                <button 
                  onClick={handleDownloadBrochure}
                  className="w-full py-3 bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2 group"
                >
                  <Download size={14} className="group-hover:translate-y-0.5 transition-transform" /> 
                  Télécharger PDF
                </button>
              </div>
            </div>

          </div>

          {/* PRODUCT FOOTER / CONTACT & FORM */}
          <div className={`mt-20 border-t border-${theme.border}/30 pt-12`}>
             <div className={`rounded-3xl bg-slate-900/50 border border-${theme.border}/20 relative overflow-hidden`}>
                {/* Background Decor */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${theme.bgAccent} opacity-5 rounded-full blur-[80px]`}></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                   {/* Left Col: Info & Map */}
                   <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col h-full">
                      <div className="mb-8">
                         <h3 className="text-2xl font-bold text-white mb-2">Centre d'Opérations</h3>
                         <p className="text-slate-400 text-sm">
                           Nos équipes techniques sont basées à Saint-Louis et opèrent dans toute la sous-région.
                         </p>
                      </div>
                      
                      <div className="space-y-6 mb-8">
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-lg ${theme.bgSoft} border ${theme.border}/20 flex items-center justify-center ${theme.accent}`}>
                               <Phone size={18} />
                            </div>
                            <div>
                               <div className="text-[10px] font-mono text-slate-500 uppercase">Ligne Directe</div>
                               <div className="text-white font-bold text-sm">+221 78 436 35 37</div>
                            </div>
                         </div>
                         
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-lg ${theme.bgSoft} border ${theme.border}/20 flex items-center justify-center ${theme.accent}`}>
                               <Mail size={18} />
                            </div>
                            <div>
                               <div className="text-[10px] font-mono text-slate-500 uppercase">Support Technique</div>
                               <div className="text-white font-bold text-sm">contact@ecliptix.tech</div>
                               {product.id === 'PROD-PEST' && (
                                  <div className="text-white font-bold text-sm mt-1 text-green-400">contact.pestai@gmail.com</div>
                               )}
                            </div>
                         </div>

                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-lg ${theme.bgSoft} border ${theme.border}/20 flex items-center justify-center ${theme.accent}`}>
                               <MapPin size={18} />
                            </div>
                            <div>
                               <div className="text-[10px] font-mono text-slate-500 uppercase">QG Opérationnel</div>
                               <div className="text-white font-bold text-sm">Cité Vauvert, Saint-Louis, Sénégal</div>
                            </div>
                         </div>
                      </div>

                      {/* Map */}
                      <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/10 bg-slate-800 group mt-auto">
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
                         <div className={`absolute bottom-3 left-3 px-2 py-1 bg-black/80 border ${theme.border}/30 rounded text-[9px] font-mono ${theme.accent} uppercase tracking-wider backdrop-blur-md`}>
                            Base Ops
                         </div>
                      </div>
                   </div>

                   {/* Right Col: Quick Form */}
                   <div className="p-8 md:p-12 relative">
                      {isSent ? (
                         <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className={`w-20 h-20 rounded-full ${theme.bgSoft} flex items-center justify-center border ${theme.border}/30 mb-6`}>
                               <CheckCircle2 size={40} className={theme.accent} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Message Transmis</h3>
                            <p className="text-slate-400 text-sm mb-6">Nos ingénieurs analysent votre requête.</p>
                            <button onClick={() => setIsSent(false)} className={`text-xs font-mono uppercase ${theme.accent} hover:text-white underline`}>Envoyer un autre message</button>
                         </div>
                      ) : (
                         <form onSubmit={handleQuickContact} className="space-y-5">
                            <div className="mb-6">
                               <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                  <MessageSquare size={20} className={theme.accent} /> Contact Rapide
                               </h3>
                               <p className="text-slate-400 text-xs">
                                  Une question sur {product.title} ? Envoyez un signal immédiat.
                               </p>
                            </div>

                            <div className="space-y-1">
                               <label className="text-[10px] font-mono text-slate-500 uppercase">Identifiant</label>
                               <input 
                                 type="text" 
                                 required
                                 value={formState.name}
                                 onChange={e => setFormState({...formState, name: e.target.value})}
                                 className={`w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-${theme.border} focus:ring-1 ${theme.ring} transition-all ${theme.placeholder}`}
                                 placeholder="Votre Nom"
                               />
                            </div>

                            <div className="space-y-1">
                               <label className="text-[10px] font-mono text-slate-500 uppercase">Point de Contact</label>
                               <input 
                                 type="email" 
                                 required
                                 value={formState.email}
                                 onChange={e => setFormState({...formState, email: e.target.value})}
                                 className={`w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-${theme.border} focus:ring-1 ${theme.ring} transition-all ${theme.placeholder}`}
                                 placeholder="email@entreprise.com"
                               />
                            </div>

                            <div className="space-y-1">
                               <label className="text-[10px] font-mono text-slate-500 uppercase">Message</label>
                               <textarea 
                                 required
                                 rows={4}
                                 value={formState.message}
                                 onChange={e => setFormState({...formState, message: e.target.value})}
                                 className={`w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-${theme.border} focus:ring-1 ${theme.ring} transition-all resize-none ${theme.placeholder}`}
                                 placeholder={`Je souhaite en savoir plus sur ${product.title}...`}
                               ></textarea>
                            </div>

                            <button 
                              type="submit" 
                              disabled={isSubmitting}
                              className={`w-full py-3 ${theme.bgAccent} hover:opacity-90 text-black font-bold uppercase tracking-widest text-xs rounded-lg transition-all flex items-center justify-center gap-2 mt-2`}
                            >
                               {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <><Send size={16} /> Envoyer Signal</>}
                            </button>
                         </form>
                      )}
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* DOWNLOAD ANIMATION OVERLAY */}
        {showDownloadAnim && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-[fadeIn_0.3s_ease-out]">
             <div className="text-center max-w-md px-4 relative">
                <div className={`w-20 h-20 border-4 border-t-${product.themeColor === 'green' ? 'green-500' : product.themeColor === 'purple' ? 'purple-500' : product.themeColor === 'orange' ? 'orange-500' : 'blue-500'} border-r-transparent border-b-${product.themeColor === 'green' ? 'green-500' : product.themeColor === 'purple' ? 'purple-500' : product.themeColor === 'orange' ? 'orange-500' : 'blue-500'} border-l-transparent rounded-full animate-spin mx-auto mb-8`}></div>
                <h3 className="text-2xl font-mono text-white uppercase tracking-widest animate-pulse mb-2">Génération du PDF...</h3>
                <div className="bg-slate-800/80 p-6 rounded-xl text-left border border-white/10 mt-8">
                   <p className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <Download size={16} className={theme.accent} /> Instructions de Téléchargement :
                   </p>
                   <ol className="list-decimal pl-5 text-slate-400 text-xs space-y-2">
                      <li>La fenêtre d'impression va s'ouvrir automatiquement.</li>
                      <li>Dans "Destination", sélectionnez <strong>"Enregistrer au format PDF"</strong> (ou "Save as PDF").</li>
                      <li>Cliquez sur <strong>Enregistrer</strong> pour télécharger le fichier sur votre appareil.</li>
                   </ol>
                </div>
             </div>
          </div>
        )}

      </div>

      {/* PRINT LAYOUT - BROCHURE STYLE */}
      <div className="print-only font-sans bg-white text-black p-0 m-0 w-full h-full absolute top-0 left-0 z-[9999]">
         
         {/* Brochure Header */}
         <div className="flex justify-between items-center p-8 border-b-4" style={{ borderColor: theme.printColor, backgroundColor: theme.printBg }}>
            <div className="flex items-center gap-6">
               {/* Product Logo (Left) */}
               {React.isValidElement(product.icon) && product.icon.type === 'img' ? (
                  <div className="h-20 w-20 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200">
                     {product.icon}
                  </div>
               ) : (
                  <div className="h-20 w-20 rounded-xl bg-white border border-slate-200 flex items-center justify-center" style={{ color: theme.printColor }}>
                     {React.cloneElement(product.icon as React.ReactElement<any>, { size: 40 })}
                  </div>
               )}
               
               <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-1">{product.title}</h1>
                  <p className="text-sm font-mono uppercase tracking-widest font-bold" style={{ color: theme.printColor }}>{product.subtitle}</p>
               </div>
            </div>

            {/* Ecliptix Logo (Right) */}
            <div className="text-right flex flex-col items-end">
               <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEDRW1wrkNA2g/company-logo_200_200/B4EZn_LZ1.GoAI-/0/1760922804191/ecliptix_group_logo?e=1766620800&v=beta&t=OGsYnzsuE3yGLA6ETAM_rzujDpAqoM2_kEmwBpr8Q44" alt="Ecliptix" className="h-12 w-auto mb-2" />
               <span className="text-[10px] text-slate-500 uppercase tracking-widest">Solutions Technologiques Avancées</span>
            </div>
         </div>

         <div className="p-8">
            
            {/* Section 1: Strategic Framework (New) */}
            {(product.mission || product.vision) && (
               <div className="mb-12 p-6 bg-slate-50 border-l-4 rounded-r-lg" style={{ borderColor: theme.printColor }}>
                  <h2 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: theme.printColor }}>
                     <Globe size={18} /> Cadre Stratégique
                  </h2>
                  <div className="grid grid-cols-2 gap-8">
                     {product.mission && (
                        <div>
                           <h4 className="text-xs font-bold uppercase mb-2 text-slate-600">Notre Mission</h4>
                           <p className="text-sm text-slate-800 leading-relaxed italic">"{product.mission}"</p>
                        </div>
                     )}
                     {product.vision && (
                        <div>
                           <h4 className="text-xs font-bold uppercase mb-2 text-slate-600">Notre Vision</h4>
                           <p className="text-sm text-slate-800 leading-relaxed">{product.vision}</p>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {/* Section 2: Context & Solution */}
            <div className="mb-12 break-inside-avoid">
               <div className="flex gap-8">
                  <div className="flex-1">
                     <h2 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-3 border-b border-slate-200 pb-2" style={{ color: theme.printColor }}>
                        <Lightbulb size={20} /> Solution & Approche
                     </h2>
                     <p className="text-slate-800 text-sm leading-relaxed text-justify mb-4">{product.fullDescription}</p>
                     
                     {/* Values Grid in Print */}
                     {product.productValues && (
                        <div className="grid grid-cols-3 gap-3 mt-4">
                           {product.productValues.map((val, idx) => (
                              <div key={idx} className="bg-white border border-slate-200 p-2 rounded">
                                 <h5 className="font-bold text-[10px] uppercase mb-1" style={{ color: theme.printColor }}>{val.title}</h5>
                                 <p className="text-[9px] text-slate-600 leading-tight">{val.description}</p>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
                  
                  {/* Key Stats Side Panel */}
                  <div className="w-64 shrink-0 bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit">
                     <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Impact Mesuré</h2>
                     <div className="space-y-4">
                        {product.impactStats.map((stat, idx) => (
                        <div key={idx} className="flex justify-between items-baseline border-b border-slate-200 pb-2">
                           <span className="text-xs font-medium text-slate-600">{stat.label}</span>
                           <span className="text-lg font-bold" style={{ color: theme.printColor }}>{stat.value}</span>
                        </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 3: Challenges */}
            <div className="mb-12 break-inside-avoid">
               <h2 className="text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-slate-200 pb-2" style={{ color: theme.printColor }}>
                  <AlertTriangle size={20} /> Contexte & Enjeux
               </h2>
               <div className="grid grid-cols-2 gap-6">
                  {product.challenges?.map((challenge, idx) => (
                     <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-sm mb-2">{challenge.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{challenge.description}</p>
                        {challenge.stat && (
                           <div className="mt-2 text-xs font-bold" style={{ color: theme.printColor }}>Impact: {challenge.stat}</div>
                        )}
                     </div>
                  ))}
               </div>
            </div>

            {/* Section 4: Modules */}
            <div className="mb-12 break-inside-avoid">
               <h2 className="text-lg font-bold uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-slate-200 pb-2" style={{ color: theme.printColor }}>
                  <Layers size={20} /> Architecture & Modules
               </h2>
               <div className="grid grid-cols-2 gap-6">
                  {product.modules.map((mod, idx) => (
                     <div key={idx} className="border border-slate-200 rounded-lg p-5 shadow-sm bg-white break-inside-avoid">
                        <div className="flex items-center gap-3 mb-2">
                           <div style={{ color: theme.printColor }}>
                              {React.cloneElement(mod.icon as React.ReactElement<any>, { size: 18 })}
                           </div>
                           <h3 className="font-bold text-slate-900 text-sm">{mod.title}</h3>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2">{mod.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Section 5: Targets */}
            <div className="mb-8 p-6 rounded-lg bg-slate-50 border border-slate-200 break-inside-avoid flex items-center gap-6">
               <div className="p-3 rounded-full bg-white border border-slate-200" style={{ color: theme.printColor }}>
                  <Target size={24} />
               </div>
               <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Cibles & Bénéficiaires</h3>
                  <p className="text-sm font-medium text-slate-800">{product.targetAudience}</p>
               </div>
            </div>

         </div>

         {/* Brochure Footer */}
         <div className="fixed bottom-0 left-0 w-full p-8 border-t-4 bg-white" style={{ borderColor: theme.printColor }}>
            <div className="flex justify-between items-end">
               <div className="text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-slate-800 uppercase tracking-wider mb-2">Ecliptix SASU</div>
                  <div className="flex flex-col gap-1">
                     <span className="flex items-center gap-2"><MapPin size={10}/> Cité Vauvert, Saint-Louis, SENEGAL</span>
                     <span className="flex items-center gap-2"><Phone size={10}/> +221 78 436 35 37</span>
                     <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2"><Mail size={10}/> contact@ecliptix.tech</span>
                        {product.id === 'PROD-PEST' && (
                           <span className="flex items-center gap-2 font-bold" style={{ color: theme.printColor }}><Mail size={10}/> contact.pestai@gmail.com</span>
                        )}
                     </div>
                  </div>
               </div>
               <div className="text-right">
                  <div className="text-2xl font-bold tracking-tight text-slate-900">ECLIPTIX</div>
                  <div className="text-[8px] uppercase tracking-[0.3em] font-bold" style={{ color: theme.printColor }}>Innovation Lab</div>
               </div>
            </div>
         </div>

      </div>
    </>
  );
};
