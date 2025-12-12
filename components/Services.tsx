import React from 'react';
import { BrainCircuit, Database, Lock, Code2, LineChart, Cpu, ArrowUpRight, MessageSquare, Mic, Rocket, BarChart3, Layers } from 'lucide-react';
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
  }
];

interface ServicesProps {
  onServiceClick: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
           <div className="inline-block border border-white/20 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md mb-6">
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Modules d'Expansion</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-white">Capacités Opérationnelles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => onServiceClick(service)}
              className={`group relative p-6 hud-panel hover:bg-white/5 transition-all duration-500 animate-float cursor-pointer flex flex-col`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Corner Markers */}
              <div className="absolute top-0 right-0 p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 border-t border-r border-ecliptix-orange"></div>
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 bg-slate-900/80 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:border-ecliptix-orange group-hover:shadow-[0_0_15px_rgba(251,146,60,0.3)] transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-wide group-hover:text-ecliptix-orange transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light flex-1">
                {service.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                <span className="text-[10px] font-mono text-slate-500 uppercase">ACCESS MODULE</span>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-ecliptix-orange group-hover:border-ecliptix-orange transition-colors">
                  <ArrowUpRight size={12} className="text-white group-hover:text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};