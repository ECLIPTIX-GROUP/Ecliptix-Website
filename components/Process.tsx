
import React from 'react';
import { Search, Compass, Code, Rocket, Activity, ChevronRight, ArrowRight, Circle, Disc, Flag } from 'lucide-react';
import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: "STEP-01",
    number: "01",
    title: "Exploration & Scan",
    subtitle: "Audit Neuronal",
    shortDescription: "Analyse approfondie de votre écosystème existant. Nous identifions les opportunités d'automatisation.",
    fullDescription: "Cette phase critique est une immersion totale dans votre réalité opérationnelle. Nous ne nous contentons pas de regarder vos serveurs ; nous analysons vos flux de travail, vos douleurs quotidiennes et la qualité de vos données brutes. C'est l'équivalent d'un IRM pour votre organisation.",
    icon: <Search />,
    color: "blue",
    duration: "2 - 3 Semaines",
    objectives: [
      "Cartographier les flux de données existants",
      "Identifier les processus manuels à faible valeur ajoutée",
      "Évaluer la maturité numérique de l'infrastructure",
      "Détecter les risques de sécurité potentiels"
    ],
    deliverables: [
      "Rapport d'Audit Technique",
      "Matrice de Compatibilité IA",
      "Cartographie des Flux (Data Map)",
      "Score de Maturité Digitale"
    ],
    methodology: "Nous déployons nos sondes logicielles non-intrusives pour monitorer les performances systèmes tout en menant des interviews qualitatives avec vos équipes clés. Cette approche hybride (Tech + Humain) nous permet de voir ce que les logs ne disent pas.",
    tools: ["Ecliptix Neural Probe", "Jira Discovery", "Miro", "Python Pandas"]
  },
  {
    id: "STEP-02",
    number: "02",
    title: "Trajectoire",
    subtitle: "Stratégie IA",
    shortDescription: "Définition de la feuille de route technologique. Choix des modèles et calcul du ROI.",
    fullDescription: "Une fois le diagnostic posé, nous traçons la route. Nous ne vendons pas de la technologie pour la technologie. Nous sélectionnons les architectures IA (LLM, Computer Vision, Prédictif) qui apporteront le ROI le plus rapide et le plus durable.",
    icon: <Compass />,
    color: "orange",
    duration: "1 - 2 Semaines",
    objectives: [
      "Sélectionner les modèles IA pertinents (Open Source vs Propriétaire)",
      "Définir l'architecture cible (Cloud / Edge / Hybride)",
      "Calculer le retour sur investissement (ROI) prévisionnel",
      "Planifier les phases de déploiement (Roadmap)"
    ],
    deliverables: [
      "Document d'Architecture Technique (DAT)",
      "Feuille de Route Stratégique",
      "Budget Prévisionnel Détaillé",
      "Maquette UI/UX (Wireframes)"
    ],
    methodology: "Co-construction. Nous organisons des ateliers de design thinking avec vos décideurs pour aligner la technologie sur vos objectifs business. Nous privilégions les solutions frugales et robustes adaptées au contexte africain.",
    tools: ["Figma", "AWS Well-Architected Tool", "Excel Modeling", "Notion"]
  },
  {
    id: "STEP-03",
    number: "03",
    title: "Assemblage",
    subtitle: "Développement",
    shortDescription: "Construction des solutions. Entraînement et fine-tuning des modèles sur vos données.",
    fullDescription: "C'est ici que la magie opère. Nos ingénieurs construisent le code, entraînent les réseaux de neurones et connectent les API. Nous travaillons en sprints agiles pour vous donner une visibilité constante sur l'avancement.",
    icon: <Code />,
    color: "purple",
    duration: "4 - 12 Semaines",
    objectives: [
      "Développer le Backend et le Frontend",
      "Entraîner et affiner les modèles d'IA (Fine-Tuning)",
      "Intégrer les systèmes tiers (ERP, CRM, WhatsApp)",
      "Sécuriser l'application (Encryption, Auth)"
    ],
    deliverables: [
      "Code Source Documenté (Git)",
      "Environnement de Staging",
      "Rapports de Performance Modèle (Accuracy/F1)",
      "Documentation API (Swagger)"
    ],
    methodology: "Agile Scrum. Des démos chaque semaine. Nous utilisons une approche CI/CD (Intégration Continue) pour tester automatiquement chaque ligne de code. La sécurité est intégrée dès le design (Security by Design).",
    tools: ["VS Code", "Docker", "PyTorch/TensorFlow", "GitHub Actions", "PostgreSQL"]
  },
  {
    id: "STEP-04",
    number: "04",
    title: "Mise sur Orbite",
    subtitle: "Déploiement",
    shortDescription: "Lancement en production avec surveillance active. Intégration fluide à vos outils.",
    fullDescription: "Le moment de vérité. Nous basculons de l'environnement de test à la production réelle. Ce déploiement est orchestré avec précision pour garantir zéro interruption de service pour vos opérations actuelles.",
    icon: <Rocket />,
    color: "green",
    duration: "1 Semaine",
    objectives: [
      "Migrer les données en production",
      "Configurer les serveurs de production (Scalabilité)",
      "Former les utilisateurs finaux",
      "Activer les systèmes de monitoring"
    ],
    deliverables: [
      "Application en Production",
      "Manuels Utilisateurs & Admin",
      "Sessions de Formation Enregistrées",
      "Clés d'accès & Credentials"
    ],
    methodology: "Blue/Green Deployment. Nous déployons la nouvelle version en parallèle de l'ancienne et basculons le trafic progressivement. Cela permet un retour arrière instantané en cas de problème.",
    tools: ["Kubernetes", "Nginx", "Sentry", "Terraform"]
  },
  {
    id: "STEP-05",
    number: "05",
    title: "Télémétrie",
    subtitle: "Optimisation",
    shortDescription: "Maintenance évolutive et ré-entraînement des modèles basé sur les performances réelles.",
    fullDescription: "L'IA n'est pas statique, elle doit évoluer. Nous surveillons la performance des modèles en temps réel pour détecter la dérive (Data Drift) et ré-entraîner le système avec les nouvelles données collectées.",
    icon: <Activity />,
    color: "blue",
    duration: "Continu (Abonnement)",
    objectives: [
      "Monitorer la santé du système (Uptime, Latence)",
      "Analyser les retours utilisateurs",
      "Ré-entraîner les modèles périodiquement",
      "Ajouter de nouvelles fonctionnalités"
    ],
    deliverables: [
      "Rapports Mensuels de Performance",
      "Mises à jour de Sécurité",
      "Support Technique SLA",
      "Nouvelles versions modèles"
    ],
    methodology: "MLOps (Machine Learning Operations). Nous automatisons le cycle de vie de l'IA pour qu'elle s'améliore automatiquement au fil du temps sans intervention manuelle lourde.",
    tools: ["Prometheus", "Grafana", "MLflow", "PagerDuty"]
  }
];

interface ProcessProps {
  onStepClick?: (step: ProcessStep) => void;
}

export const Process: React.FC<ProcessProps> = ({ onStepClick }) => {
  return (
    <section id="process" className="py-32 relative bg-black overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
           <div className="inline-block border border-white/20 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Plan de Vol</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Séquence de <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecliptix-orange to-white">Lancement</span></h2>
           <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
             Une trajectoire balisée, de l'audit initial jusqu'à la mise en orbite. Suivez le protocole.
           </p>
        </div>

        {/* FLIGHT PATH TIMELINE */}
        <div className="relative">
           {/* Center Line (Desktop) / Left Line (Mobile) */}
           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent transform md:-translate-x-1/2"></div>

           <div className="space-y-16 md:space-y-32">
              {processSteps.map((step, idx) => {
                 const isEven = idx % 2 === 0;
                 // Determine colors
                 const accentClass = 
                    step.color === 'orange' ? 'text-ecliptix-orange border-ecliptix-orange bg-ecliptix-orange' : 
                    step.color === 'blue' ? 'text-blue-400 border-blue-500 bg-blue-500' : 
                    step.color === 'green' ? 'text-green-400 border-green-500 bg-green-500' : 
                    'text-purple-400 border-purple-500 bg-purple-500';
                 
                 const shadowClass = 
                    step.color === 'orange' ? 'shadow-orange-500/20' : 
                    step.color === 'blue' ? 'shadow-blue-500/20' : 
                    step.color === 'green' ? 'shadow-green-500/20' : 
                    'shadow-purple-500/20';

                 return (
                    <div 
                      key={idx} 
                      onClick={() => onStepClick && onStepClick(step)}
                      className={`relative flex flex-col md:flex-row items-start md:items-center group cursor-pointer ${isEven ? 'md:flex-row-reverse' : ''}`}
                    >
                       {/* Center Node */}
                       <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-white/20 z-20 group-hover:scale-125 group-hover:border-white transition-all flex items-center justify-center">
                          <div className={`w-2 h-2 rounded-full ${accentClass.split(' ')[2]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                       </div>

                       {/* Spacer for Desktop Alignment */}
                       <div className="flex-1 hidden md:block"></div>

                       {/* Connector Line (Desktop) */}
                       <div className={`hidden md:block absolute top-1/2 w-16 h-px bg-white/10 group-hover:bg-white/50 transition-colors ${isEven ? 'left-1/2 ml-3' : 'right-1/2 mr-3'}`}></div>

                       {/* The Card */}
                       <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}`}>
                          
                          <div className={`relative bg-slate-900/40 border border-white/10 p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/80 shadow-lg group-hover:${shadowClass} hover:border-white/30`}>
                             
                             {/* Background Number */}
                             <div className={`absolute -top-4 -right-4 text-8xl font-black text-white/5 font-mono select-none transition-colors group-hover:text-white/10`}>
                                {step.number}
                             </div>

                             {/* Header */}
                             <div className={`flex items-center gap-4 mb-4 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${accentClass.split(' ')[0]} group-hover:scale-110 transition-transform duration-300`}>
                                   {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                                </div>
                                <span className={`text-xs font-mono uppercase tracking-widest ${accentClass.split(' ')[0]}`}>
                                   // {step.subtitle}
                                </span>
                             </div>

                             <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">{step.title}</h3>
                             <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {step.shortDescription}
                             </p>

                             {/* Bottom Action */}
                             <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                                <span>Spécifications</span>
                                <div className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:${accentClass.split(' ')[2]} group-hover:text-black transition-all`}>
                                   <ArrowRight size={12} />
                                </div>
                             </div>

                          </div>
                       </div>

                    </div>
                 );
              })}
           </div>

           {/* Finish Flag */}
           <div className="absolute bottom-[-60px] left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
              <div className="w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center text-ecliptix-orange animate-pulse">
                 <Flag size={20} />
              </div>
              <span className="mt-2 text-[10px] font-mono uppercase text-slate-600 tracking-widest">Mission Complete</span>
           </div>

        </div>

      </div>
    </section>
  );
};
