
import React from 'react';
import { ArrowLeft, CheckCircle2, Cpu, Activity, Terminal } from 'lucide-react';
import { ServiceItem } from '../types';
import { DemoRequest } from './DemoRequest';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
  onInitialize?: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onInitialize }) => {
  // Use state to toggle view locally to Request Form if clicked
  const [showRequestForm, setShowRequestForm] = React.useState(false);

  if (showRequestForm) {
    return (
      <DemoRequest 
        product={service} 
        onBack={() => setShowRequestForm(false)} 
        onSubmitSuccess={() => onInitialize && onInitialize()} 
      />
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-6"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour en Orbite
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <span className="px-2 py-0.5 bg-ecliptix-orange/20 text-ecliptix-orange text-[10px] font-mono border border-ecliptix-orange/30 rounded">MODULE ID: {service.id}</span>
               <span className="flex items-center gap-1 text-[10px] text-green-400 font-mono"><div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div> ONLINE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">{service.title}</h1>
          </div>
          <div className="flex gap-4">
             <div className="text-right hidden md:block">
                <div className="text-[10px] text-slate-500 font-mono uppercase">System Load</div>
                <div className="text-xl font-mono text-ecliptix-orange">34%</div>
             </div>
             <div className="text-right hidden md:block">
                <div className="text-[10px] text-slate-500 font-mono uppercase">Bandwidth</div>
                <div className="text-xl font-mono text-white">2.4 TB/s</div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Description Panel */}
          <div className="hud-panel p-8 bg-black/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <Activity className="text-ecliptix-orange" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal size={20} className="text-ecliptix-orange" /> 
              Analyse du Protocole
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg font-light">
              {service.fullDescription}
            </p>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6 border-l-2 border-ecliptix-orange pl-4">Capacités Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="text-ecliptix-orange shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar / Specs */}
        <div className="space-y-6">
          
          {/* Visual Representation */}
          <div className="aspect-square bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
            <div className="relative z-10 text-ecliptix-orange transform scale-150 animate-pulse-slow">
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 80, strokeWidth: 1 })}
            </div>
            
            {/* Rotating Rings */}
            <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border border-dashed border-white/10 rounded-full animate-spin-reverse"></div>
          </div>

          {/* Technical Specs */}
          <div className="hud-panel p-6">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
              Spécifications
            </h4>
            <ul className="space-y-3">
              {service.techSpecs.map((spec, idx) => (
                <li key={idx} className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">{spec.split(':')[0]}</span>
                  <span className="text-ecliptix-orange">{spec.split(':')[1]}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => setShowRequestForm(true)}
            className="w-full py-4 bg-ecliptix-orange hover:bg-orange-600 text-black font-bold uppercase tracking-widest transition-all clip-path-polygon hover:scale-[1.02]" 
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            Demander un Devis
          </button>

        </div>

      </div>
    </div>
  );
};
