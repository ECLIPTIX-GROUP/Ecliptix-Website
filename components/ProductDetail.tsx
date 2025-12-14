
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Zap, Clock, MapPin, User, Layers, Code2, Phone, Handshake, Cpu, FileText, Globe, Star, ArrowRight, Download, Printer, Sun, Wind, Droplets, LayoutDashboard, Scan, Sprout, BarChart3, ShoppingCart, MessageSquare, Settings, Bell, Search, Bot, Thermometer, Leaf, AlertTriangle, Calendar, Activity } from 'lucide-react';
import { ProductItem, ProductModule } from '../types';
import { DemoRequest } from './DemoRequest';
import { SuccessPage } from './SuccessPage';

interface ProductDetailProps {
  product: ProductItem;
  onBack: () => void;
  onModuleClick: (module: ProductModule) => void;
  onRequestDemo: (product: ProductItem) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onModuleClick, onRequestDemo }) => {
  const [showDownloadAnim, setShowDownloadAnim] = useState(false);
  
  // Dynamic color classes based on theme
  const getTheme = () => {
    switch (product.themeColor) {
      case 'green': 
        return { 
          accent: 'text-green-400', 
          bgAccent: 'bg-green-500', 
          border: 'border-green-500',
          gradientFrom: 'from-green-900/20',
          printColor: '#22c55e',
          shadow: 'shadow-green-500/20'
        };
      case 'purple':
        return { 
          accent: 'text-purple-400', 
          bgAccent: 'bg-purple-500', 
          border: 'border-purple-500',
          gradientFrom: 'from-purple-900/20',
          printColor: '#a855f7',
          shadow: 'shadow-purple-500/20'
        };
      case 'orange':
        return { 
          accent: 'text-orange-400', 
          bgAccent: 'bg-orange-500', 
          border: 'border-orange-500',
          gradientFrom: 'from-orange-900/20',
          printColor: '#f97316',
          shadow: 'shadow-orange-500/20'
        };
      default: // blue
        return { 
          accent: 'text-blue-400', 
          bgAccent: 'bg-blue-500', 
          border: 'border-blue-500',
          gradientFrom: 'from-blue-900/20',
          printColor: '#3b82f6',
          shadow: 'shadow-blue-500/20'
        };
    }
  };

  const theme = getTheme();

  const handleDownloadBrochure = () => {
    setShowDownloadAnim(true);
    setTimeout(() => {
      window.print();
      setShowDownloadAnim(false);
    }, 1500);
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

          {/* PEST AI DASHBOARD PREVIEW INTEGRATION */}
          {product.id === 'PROD-PEST' && (
            <div className="mb-20">
               <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                     <LayoutDashboard className="text-green-400" /> Interface de Commandement
                  </h3>
                  <p className="text-slate-400 text-sm">Aperçu en temps réel de la plateforme PEST AI V2.0</p>
               </div>

               {/* BROWSER WINDOW CONTAINER */}
               <div className="rounded-xl overflow-hidden border border-slate-700 bg-[#F3F4F6] shadow-2xl relative group">
                  {/* Browser Bar */}
                  <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="flex-1 text-center">
                        <div className="bg-slate-900/50 text-slate-400 text-[10px] font-mono py-1 px-4 rounded-full inline-block border border-white/5">
                           platform.pest-ai.com/dashboard
                        </div>
                     </div>
                  </div>

                  {/* DASHBOARD UI REPLICA (Light Mode as per screenshot) */}
                  <div className="flex text-slate-800 font-sans h-[600px] overflow-hidden relative overflow-x-auto">
                     
                     {/* Sidebar - Hidden on mobile */}
                     <div className="w-64 bg-white border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col sticky left-0 z-20 h-full">
                        <div className="p-4 flex items-center gap-2 border-b border-slate-100">
                           <img src="https://media.licdn.com/dms/image/v2/D4E0BAQF8aFwVyRfGHg/company-logo_200_200/B4EZU33xiUHcAI-/0/1740399123289?e=1767225600&v=beta&t=7D5Lb2mOY1FULswru3tiJqVGinxqcpTCjunP-CToiHI" className="w-8 h-8" alt="Logo"/>
                           <span className="font-bold text-[#1b4d2e] text-lg">PEST AI</span>
                        </div>
                        <div className="p-4 space-y-1">
                           <div className="flex items-center gap-3 p-3 bg-green-500 text-white rounded-lg shadow-lg shadow-green-500/20 cursor-pointer">
                              <LayoutDashboard size={18} /> <span className="text-sm font-medium">Tableau de bord</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <Scan size={18} /> <span className="text-sm font-medium">Diagnostic PestScan</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <Globe size={18} /> <span className="text-sm font-medium">Imagerie Satellite</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <Sprout size={18} /> <span className="text-sm font-medium">Mes Cultures</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <BarChart3 size={18} /> <span className="text-sm font-medium">Suivi Rendement</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <FileText size={18} /> <span className="text-sm font-medium">Rapports</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <ShoppingCart size={18} /> <span className="text-sm font-medium">Marketplace</span>
                           </div>
                           <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                              <Bot size={18} /> <span className="text-sm font-medium">Parler avec Fary</span>
                           </div>
                        </div>
                        <div className="mt-auto p-4 border-t border-slate-100">
                           <div className="flex items-center gap-3 p-3 text-slate-400">
                              <Settings size={18} /> <span className="text-sm">Paramètres</span>
                           </div>
                        </div>
                     </div>

                     {/* Main Content - Min width ensures horizontal scroll on mobile */}
                     <div className="flex-1 bg-[#F9FAFB] flex flex-col overflow-y-auto min-w-[800px] md:min-w-0">
                        
                        {/* Top Bar */}
                        <div className="bg-[#1b4d2e] text-white px-6 py-2 flex justify-between items-center text-xs sticky top-0 z-20">
                           <div className="flex items-center gap-4">
                              <span className="font-bold flex items-center gap-2"><Sun size={12} className="text-yellow-400"/> INFO CLIMAT :</span>
                              <span className="opacity-90">Météo : Risque d'orage en fin de journée, sécurisez vos équipements.</span>
                           </div>
                           <div className="hidden md:flex items-center gap-4">
                              <span className="flex items-center gap-2"><Sprout size={12} className="text-green-300"/> CONSEIL AGRONOMIQUE : En période de floraison, évitez les traitements...</span>
                           </div>
                        </div>

                        {/* Header */}
                        <div className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center sticky top-[32px] z-10">
                           <div className="flex items-center gap-4">
                               <div className="md:hidden"><LayoutDashboard /></div>
                               <div className="flex items-center gap-4 text-sm text-slate-500">
                                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded border border-green-100 text-green-700">
                                    <Scan size={14} /> 997 CD
                                  </div>
                                  <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded border border-blue-100 text-blue-700">
                                    <Globe size={14} /> 39 CC
                                  </div>
                                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded border border-orange-100 text-orange-700">
                                    <Zap size={14} /> 20 CDR
                                  </div>
                               </div>
                           </div>
                           
                           <div className="flex items-center gap-6">
                              <span className="text-xs text-slate-400 hidden sm:block">Support: Wolof • Bambara • Français</span>
                              <ShoppingCart size={20} className="text-slate-400" />
                              <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                                 <div className="text-right hidden sm:block">
                                    <div className="text-sm font-bold text-slate-700">GDS</div>
                                    <div className="text-[10px] text-green-600 font-bold uppercase">AGROBUSINESS</div>
                                 </div>
                                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">G</div>
                              </div>
                           </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="p-6 md:p-8 space-y-6">
                           
                           {/* Welcome */}
                           <div className="flex justify-between items-end">
                              <div>
                                 <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                    Bienvenue, GDS ! 👋 <span className="text-sm font-normal text-slate-400 border-l border-slate-300 pl-3">Dalal jamm ci sa espace !</span>
                                 </h2>
                                 <p className="text-slate-500 text-sm mt-1">Vue d'ensemble de votre exploitation.</p>
                              </div>
                              <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 flex items-center gap-2 shadow-sm">
                                 <Calendar size={14} className="text-green-600"/> Dimanche 23 novembre 2025
                              </div>
                           </div>

                           {/* Main Widgets */}
                           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              
                              {/* Weather Card (Blue) */}
                              <div className="lg:col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                 <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                       <Sun size={48} className="text-yellow-300 animate-pulse" />
                                       <div>
                                          <div className="text-4xl font-bold">32°C</div>
                                          <div className="text-blue-100 text-sm flex items-center gap-1"><Calendar size={12}/> Aujourd'hui</div>
                                       </div>
                                    </div>
                                    <div className="text-right">
                                       <div className="flex items-center gap-1 justify-end font-bold"><MapPin size={14}/> SAINT LOUIS</div>
                                       <div className="text-blue-200 text-xs">Sénégal</div>
                                    </div>
                                 </div>
                                 
                                 <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-4">
                                    <div className="text-center">
                                       <div className="text-blue-200 text-xs uppercase mb-1 flex items-center justify-center gap-1"><Droplets size={12}/> Humidité</div>
                                       <div className="font-bold text-lg">65%</div>
                                    </div>
                                    <div className="text-center border-l border-white/20">
                                       <div className="text-blue-200 text-xs uppercase mb-1 flex items-center justify-center gap-1"><Wind size={12}/> Vent</div>
                                       <div className="font-bold text-lg">12 km/h</div>
                                    </div>
                                    <div className="text-center border-l border-white/20">
                                       <div className="text-blue-200 text-xs uppercase mb-1 flex items-center justify-center gap-1"><Thermometer size={12}/> Sol</div>
                                       <div className="font-bold text-lg">28°C</div>
                                    </div>
                                 </div>
                              </div>

                              {/* Drone Card (Green) */}
                              <div className="bg-[#1b4d2e] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
                                 <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-4 translate-y-4">
                                    <Scan size={120} />
                                 </div>
                                 <div>
                                    <div className="flex items-center gap-2 text-green-200 text-sm mb-4">
                                       <Zap size={14} /> Drone PestFly
                                    </div>
                                    <div className="text-5xl font-bold mb-1">0</div>
                                    <div className="text-green-200 text-sm">Missions programmées</div>
                                 </div>
                                 <div className="mt-4 text-xs text-green-400 italic">
                                    Aucune mission en cours.
                                 </div>
                              </div>

                           </div>

                           {/* Fary AI Assistant Bar */}
                           <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-4 flex items-center justify-between shadow-lg text-white">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                                    <Bot size={24} />
                                 </div>
                                 <div>
                                    <div className="font-bold flex items-center gap-2">
                                       Fary - Assistant Agronome IA <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-mono">BETA</span>
                                    </div>
                                    <div className="text-purple-100 text-xs mt-1 hidden sm:block">
                                       Une question sur une maladie, un ravageur ou un traitement ? Discutez instantanément.
                                    </div>
                                 </div>
                              </div>
                              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-purple-50 transition-colors">
                                 <Star size={14} /> Poser une question
                              </button>
                           </div>

                           {/* Stats Row */}
                           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                 <div className="flex justify-between items-start mb-2">
                                    <span className="text-slate-400 text-xs font-bold uppercase">Diagnostics</span>
                                    <Scan className="text-green-100" />
                                 </div>
                                 <div className="text-3xl font-bold text-slate-800">7</div>
                                 <div className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1">Nouveau scan <ArrowRight size={10}/></div>
                              </div>
                              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                 <div className="flex justify-between items-start mb-2">
                                    <span className="text-slate-400 text-xs font-bold uppercase">À Risque</span>
                                    <Activity className="text-red-100" />
                                 </div>
                                 <div className="text-3xl font-bold text-red-500">0</div>
                                 <div className="text-xs text-slate-400 mt-2">Parcelles en stress</div>
                              </div>
                              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                 <div className="flex justify-between items-start mb-2">
                                    <span className="text-slate-400 text-xs font-bold uppercase">Surface Totale</span>
                                    <Layers className="text-blue-100" />
                                 </div>
                                 <div className="text-3xl font-bold text-slate-800">14665.2 <span className="text-sm font-normal text-slate-400">ha</span></div>
                                 <div className="text-xs text-slate-400 mt-2">Objectif: 0 Tonnes</div>
                              </div>
                              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                 <div className="flex justify-between items-start mb-2">
                                    <span className="text-slate-400 text-xs font-bold uppercase">Santé Globale</span>
                                    <Leaf className="text-green-100" />
                                 </div>
                                 <div className="text-3xl font-bold text-green-500">100%</div>
                                 <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                                    <div className="w-full h-full bg-green-500"></div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                 <h3 className="font-bold text-slate-700 mb-4">Activité Récente</h3>
                                 <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border border-yellow-100">
                                    <div className="flex items-center gap-3">
                                       <div className="w-10 h-10 rounded bg-yellow-100 flex items-center justify-center text-yellow-600">
                                          <AlertTriangle size={20} />
                                       </div>
                                       <div>
                                          <div className="font-bold text-slate-700 text-sm">Panachure jaune du riz (RYMV)</div>
                                          <div className="text-xs text-slate-500">Détecté il y a 2h</div>
                                       </div>
                                    </div>
                                    <span className="text-[10px] font-bold bg-yellow-200 text-yellow-800 px-2 py-1 rounded">MEDIUM</span>
                                 </div>
                              </div>
                              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                 <h3 className="font-bold text-slate-700 mb-4">Distribution Santé</h3>
                                  <div className="flex items-center justify-center h-24 text-slate-300 text-sm italic">
                                     Graphique de données...
                                  </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Reflection/Shadow under the dashboard */}
               <div className="mx-8 h-4 bg-ecliptix-orange/20 blur-xl rounded-full mt-2"></div>
            </div>
          )}

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Globe className={`${theme.accent}`} /> Vision Stratégique
                </h3>
                <p className="text-slate-400 leading-relaxed whitespace-pre-wrap">
                  {product.fullDescription}
                </p>
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
        </div>

        {/* DOWNLOAD ANIMATION OVERLAY */}
        {showDownloadAnim && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-[fadeIn_0.3s_ease-out]">
             <div className="text-center max-w-md px-4 relative">
                <div className={`w-20 h-20 border-4 border-t-${product.themeColor === 'green' ? 'green-500' : product.themeColor === 'purple' ? 'purple-500' : product.themeColor === 'orange' ? 'orange-500' : 'blue-500'} border-r-transparent border-b-${product.themeColor === 'green' ? 'green-500' : product.themeColor === 'purple' ? 'purple-500' : product.themeColor === 'orange' ? 'orange-500' : 'blue-500'} border-l-transparent rounded-full animate-spin mx-auto mb-8`}></div>
                <h3 className="text-2xl font-mono text-white uppercase tracking-widest animate-pulse mb-2">Génération...</h3>
                <div className="bg-slate-800/80 p-6 rounded-xl text-left border border-white/10 mt-8">
                   <p className="text-white font-bold text-sm mb-2">Instructions d'Impression :</p>
                   <ul className="list-disc pl-5 text-slate-400 text-xs space-y-2">
                      <li>Sélectionnez <strong>"Enregistrer au format PDF"</strong>.</li>
                      <li>Assurez-vous que <strong>"Graphiques d'arrière-plan"</strong> est coché dans les options avancées.</li>
                   </ul>
                </div>
             </div>
          </div>
        )}

      </div>

      {/* PRINT LAYOUT */}
      <div className="print-only font-sans bg-white text-black">
         <div className="flex justify-between items-center border-b-2 border-slate-200 pb-8 mb-8">
            <div className="flex items-center gap-6">
               <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEDRW1wrkNA2g/company-logo_200_200/B4EZn_LZ1.GoAI-/0/1760922804191/ecliptix_group_logo?e=1766620800&v=beta&t=OGsYnzsuE3yGLA6ETAM_rzujDpAqoM2_kEmwBpr8Q44" alt="Ecliptix" className="h-20 w-auto" />
               <div className="h-16 w-px bg-slate-300"></div>
               {/* Use text or colored block if image fails, but try to use icon/image */}
               <h1 className="text-4xl font-bold text-slate-900" style={{ color: theme.printColor }}>{product.title}</h1>
            </div>
            <div className="text-right">
               <div className="text-sm font-mono uppercase tracking-widest font-bold" style={{ color: theme.printColor }}>{product.subtitle}</div>
            </div>
         </div>

         <div className="mb-12 flex gap-12 items-start">
            <div className="flex-1">
               <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-200 pb-2">Description</h2>
               <p className="text-slate-800 text-sm leading-relaxed text-justify">{product.fullDescription}</p>
            </div>
            <div className="w-72 shrink-0 p-6 bg-slate-50 rounded-xl border border-slate-200">
               <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Impact Clé</h2>
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

         <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-200 pb-2">Architecture & Modules</h2>
            <div className="grid grid-cols-2 gap-8">
               {product.modules.map((mod, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-6 break-inside-avoid shadow-sm">
                     <h3 className="font-bold text-slate-900 text-base mb-1">{mod.title}</h3>
                     <p className="text-[10px] font-mono uppercase text-slate-500 mb-2" style={{ color: theme.printColor }}>{mod.subtitle}</p>
                     <p className="text-xs text-slate-600 leading-relaxed">{mod.description}</p>
                  </div>
               ))}
            </div>
         </div>

         <div className="fixed bottom-0 left-0 w-full p-8 border-t-2 border-slate-800 bg-white">
            <div className="flex justify-between items-end">
               <div className="text-xs text-slate-600 space-y-1">
                  <div>Ecliptix SASU - Saint-Louis, SENEGAL</div>
                  <div>contact@ecliptix.tech</div>
               </div>
               <div className="text-right">
                  <div className="text-xl font-bold tracking-tight text-slate-800">ECLIPTIX</div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};
