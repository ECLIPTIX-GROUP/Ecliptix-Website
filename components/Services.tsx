
import React from 'react';
import { BrainCircuit, Database, Lock, Code2, LineChart, Cpu, ArrowUpRight, MessageSquare, Mic, Rocket, BarChart3, Layers, Check, Terminal, Activity, Wifi } from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "MOD-01",
    title: "Audit Neuronal",
    description: "Scan complet de vos systèmes pour identifier les points d'ancrage IA.",
    icon: <BrainCircuit />,
    fullDescription: "Notre protocole d'Audit Neuronal effectue une analyse en profondeur de votre infrastructure numérique existante. Nous identifions les goulots d'étranglement de données, les processus automatisables et les failles de sécurité potentielles avant toute intégration d'intelligence artificielle. C'est la cartographie indispensable avant le voyage.",
    features: [
      "Cartographie des flux de données",
      "Détection des processus obsolètes",
      "Calcul du ROI potentiel par secteur",
      "Rapport de compatibilité IA"
    ],
    techSpecs: [
      "Scan Depth: Level 5",
      "Durée: 2-4 Semaines",
      "Output: Rapport Holistique",
      "Security: Non-intrusif"
    ]
  },
  {
    id: "MOD-02",
    title: "Agents Autonomes",
    description: "Déploiement d'unités IA capables d'opérer en autonomie totale.",
    icon: <Code2 />,
    fullDescription: "Nous déployons des agents autonomes de nouvelle génération capables d'exécuter des tâches complexes sans supervision humaine constante. Ces agents apprennent de leur environnement, s'adaptent aux exceptions et optimisent leurs propres flux de travail en temps réel.",
    features: [
      "Prise de décision autonome",
      "Apprentissage par renforcement",
      "Interaction multi-modale",
      "Reporting automatique"
    ],
    techSpecs: [
      "Framework: LangChain / AutoGPT",
      "Latency: <50ms",
      "Uptime: 99.99%",
      "Scalability: Infinite"
    ]
  },
  {
    id: "MOD-03",
    title: "Conversational AI",
    description: "Chatbots intelligents pour le service client et le support interne.",
    icon: <MessageSquare />,
    fullDescription: "Au-delà des chatbots basiques à scénarios, nous déployons des assistants conversationnels basés sur les LLM (Large Language Models). Ils comprennent l'intention, le contexte et les nuances, offrant une expérience humaine et fluide 24/7.",
    features: [
      "Compréhension du langage naturel (NLP)",
      "Connexion à votre base de connaissances (RAG)",
      "Escalade vers humain intelligente",
      "Support multicanal (Web, WhatsApp)"
    ],
    techSpecs: [
      "Engine: GPT-4o / Gemini 1.5",
      "Context: Mémoire conversationnelle",
      "Langues: 50+ dont Wolof (Beta)",
      "Integration: API REST"
    ]
  },
  {
    id: "MOD-04",
    title: "Vocal Vernaculaire (TTS)",
    description: "Synthèse vocale en langues locales (Wolof, Pulaar) pour l'accessibilité.",
    icon: <Mic />,
    fullDescription: "Brisez la barrière de l'analphabétisme. Notre module TTS (Text-to-Speech) et STT (Speech-to-Text) permet à vos applications d'interagir vocalement avec les populations locales dans leur langue maternelle.",
    features: [
      "Synthèse vocale Wolof/Pulaar naturelle",
      "Reconnaissance vocale en environnement bruyant",
      "Interface 100% vocale (Voice First)",
      "API temps réel"
    ],
    techSpecs: [
      "Model: Ecliptix Neural Voice",
      "Sample Rate: 24kHz",
      "Latency: <300ms",
      "Deploy: Cloud / Edge"
    ]
  },
  {
    id: "MOD-05",
    title: "Business Intelligence",
    description: "Tableaux de bord dynamiques pour visualiser vos KPIs stratégiques.",
    icon: <BarChart3 />,
    fullDescription: "Transformez vos données brutes en décisions éclairées. Nos experts BI conçoivent des tableaux de bord interactifs et esthétiques qui racontent l'histoire de votre entreprise en temps réel.",
    features: [
      "Dashboards PowerBI / Tableau",
      "ETL Automatisé",
      "Alerting prédictif",
      "Data Storytelling"
    ],
    techSpecs: [
      "Stack: PowerBI / Looker / Metabase",
      "Refresh: Temps réel",
      "Mobile Ready: Oui",
      "Security: Row Level Security"
    ]
  },
  {
    id: "MOD-06",
    title: "MVP Factory",
    description: "Développement ultra-rapide de prototypes fonctionnels (0 à 1).",
    icon: <Rocket />,
    fullDescription: "Vous avez une idée ? Nous avons la vélocité. Notre 'MVP Factory' utilise le No-Code, le Low-Code et l'IA pour sortir une première version fonctionnelle de votre produit en quelques semaines, pas des mois.",
    features: [
      "Prototypage rapide (Figma)",
      "Développement Agile (Sprints d'1 semaine)",
      "Architecture évolutive",
      "Lancement Go-to-Market"
    ],
    techSpecs: [
      "Stack: Flutter / React / Python",
      "Delivery: 4-6 Semaines",
      "Code: Propriétaire",
      "Design: Atomic System"
    ]
  },
  {
    id: "MOD-07",
    title: "LLM Fine-Tuning",
    description: "Calibrage fin des modèles de langage sur vos fréquences d'entreprise.",
    icon: <Cpu />,
    fullDescription: "Ne vous contentez pas de modèles génériques. Nous ajustons (fine-tuning) les modèles de langage les plus avancés (Llama 3, Mistral, Gemini) sur votre propre corpus de connaissances. Votre IA parlera votre jargon, connaîtra vos produits et respectera votre ton.",
    features: [
      "Entraînement sur données privées",
      "Réduction des hallucinations",
      "Spécialisation sectorielle",
      "Déploiement On-Premise possible"
    ],
    techSpecs: [
      "Models: Gemini / Llama / Mistral",
      "Training: H100 GPU Cluster",
      "Context: 128k Tokens",
      "Privacy: Isolé"
    ]
  },
  {
    id: "MOD-08",
    title: "Bouclier Cognitif",
    description: "Défense active contre les intrusions et manipulations de données.",
    icon: <Lock />,
    fullDescription: "À l'ère de l'IA, les cybermenaces sont plus sophistiquées. Notre 'Bouclier Cognitif' utilise l'IA pour combattre l'IA. Il détecte les modèles d'attaque subtils, les injections de prompt et les tentatives d'empoisonnement de données en temps réel.",
    features: [
      "Détection d'intrusion IA",
      "Firewall pour LLM",
      "Protection contre le Prompt Injection",
      "Audit de sécurité continu"
    ],
    techSpecs: [
      "Response Time: <10ms",
      "Pattern Matching: Deep Learning",
      "Coverage: End-to-End",
      "Alerting: Instantané"
    ]
  },
  {
    id: "MOD-09",
    title: "IoT Synapse",
    description: "Maillage de capteurs intelligents connectant le physique au numérique.",
    icon: <Wifi />,
    fullDescription: "Le monde physique regorge de données invisibles. IoT Synapse déploie une infrastructure de capteurs interconnectés (LoRaWAN, 4G/5G) qui transforment votre environnement (Champs, Usines, Villes) en flux de données exploitables par nos algorithmes prédictifs.",
    features: [
      "Réseaux Mesh LoRaWAN",
      "Monitoring Environnemental",
      "Maintenance Prédictive",
      "Edge AI Integration"
    ],
    techSpecs: [
      "Protocol: MQTT / CoAP",
      "Coverage: 15km",
      "Battery: 5 Ans",
      "Security: End-to-End"
    ]
  }
];

interface ServicesProps {
  onServiceClick: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ecliptix-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 border border-ecliptix-orange/30 px-4 py-1 rounded-full bg-ecliptix-orange/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <Cpu size={14} className="text-ecliptix-orange" />
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Infrastructure Cognitive</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Capacités <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecliptix-orange to-white">Opérationnelles</span></h2>
           <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
             Une suite de modules interconnectés conçus pour augmenter l'intelligence de votre organisation. Déployables à la demande.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => onServiceClick(service)}
              className="group relative bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:bg-slate-900/80 transition-all duration-500 cursor-pointer flex flex-col h-full hover:border-ecliptix-orange/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]"
            >
              {/* Active Corner */}
              <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity">
                 <div className="flex gap-1">
                    <div className="w-1 h-1 bg-ecliptix-orange rounded-full"></div>
                    <div className="w-1 h-1 bg-ecliptix-orange rounded-full"></div>
                    <div className="w-1 h-1 bg-ecliptix-orange rounded-full"></div>
                 </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                 
                 {/* Icon Header */}
                 <div className="mb-6 flex justify-between items-start">
                    <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-ecliptix-orange group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-ecliptix-orange/20 group-hover:bg-ecliptix-orange group-hover:text-black">
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                    </div>
                    <div className="px-2 py-1 bg-black/40 border border-white/10 rounded text-[9px] font-mono text-slate-500 uppercase tracking-wider group-hover:text-ecliptix-orange group-hover:border-ecliptix-orange/30 transition-colors">
                       {service.id}
                    </div>
                 </div>

                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ecliptix-orange transition-colors">{service.title}</h3>
                 
                 <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                 </p>

                 {/* Mini Features List */}
                 <div className="space-y-2 mb-6 border-t border-dashed border-white/10 pt-4 mt-auto">
                    {service.features.slice(0, 2).map((feat, i) => (
                       <div key={i} className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                          <Check size={12} className="text-green-500" />
                          {feat}
                       </div>
                    ))}
                 </div>

                 {/* Tech Spec Tag */}
                 <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 bg-black/20 p-2 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                    <Terminal size={10} />
                    <span className="truncate">{service.techSpecs[0]}</span>
                 </div>

              </div>

              {/* Hover Bottom Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-ecliptix-orange to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
