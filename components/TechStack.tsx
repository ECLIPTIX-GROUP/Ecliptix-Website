
import React from 'react';
import { Cpu, Server, Terminal, Code2, Smartphone, Box, Layers, Database, Cloud, Globe, Wifi, Lock, BrainCircuit, Bot, Sparkles, Workflow } from 'lucide-react';

const technologies = [
  { name: "TensorFlow", icon: <Cpu /> },
  { name: "PyTorch", icon: <BrainCircuit /> },
  { name: "Python", icon: <Terminal /> },
  { name: "Django", icon: <Server /> },
  { name: "React", icon: <Code2 /> },
  { name: "Flutter", icon: <Smartphone /> },
  { name: "Docker", icon: <Box /> },
  { name: "Kubernetes", icon: <Layers /> },
  { name: "PostgreSQL", icon: <Database /> },
  { name: "AWS", icon: <Cloud /> },
  { name: "Google Cloud", icon: <Globe /> },
  { name: "IoT/LoRa", icon: <Wifi /> },
  { name: "OpenCV", icon: <Eye /> },
  { name: "LLM (Gemini)", icon: <Bot /> },
  { name: "Generative AI", icon: <Sparkles /> },
  { name: "CI/CD", icon: <Workflow /> },
];

// Helper for icon since Eye is not imported above but used in array
import { Eye } from 'lucide-react';

export const TechStack = () => {
  return (
    <div className="w-full bg-black border-y border-white/5 py-6 overflow-hidden relative z-20 group">
       {/* Gradients to fade edges */}
       <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
       <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

       <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* First set */}
          <div className="flex gap-12 px-6">
             {technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-600 hover:text-ecliptix-orange transition-colors cursor-default group/item">
                   {React.cloneElement(tech.icon, { size: 20, className: "group-hover/item:text-ecliptix-orange transition-colors duration-300" })}
                   <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-70 group-hover/item:opacity-100 transition-opacity">{tech.name}</span>
                </div>
             ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-12 px-6">
             {technologies.map((tech, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-3 text-slate-600 hover:text-ecliptix-orange transition-colors cursor-default group/item">
                   {React.cloneElement(tech.icon, { size: 20, className: "group-hover/item:text-ecliptix-orange transition-colors duration-300" })}
                   <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-70 group-hover/item:opacity-100 transition-opacity">{tech.name}</span>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};
