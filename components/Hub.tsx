
import React from 'react';
import { Sprout, Satellite, Wifi, MessageSquare, Users, Plane, ArrowRight, Scan, PieChart, Crosshair, ArrowLeft, FlaskConical, HardHat, ShieldCheck, Hammer, ClipboardList, TrendingUp, Truck, PackageCheck, AlertTriangle, UserX, Droplets, TrendingDown, EyeOff, FileWarning, Clock } from 'lucide-react';
import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: "PROD-PEST",
    title: "PEST AI",
    subtitle: "Agritech Precision System",
    themeColor: "green",
    icon: <img src="https://media.licdn.com/dms/image/v2/D4E0BAQF8aFwVyRfGHg/company-logo_200_200/B4EZU33xiUHcAI-/0/1740399123289?e=1770249600&v=beta&t=pQdPqv89wxWkCup5PFswTQw7v-VJPCoydCNJOAVz8vc" alt="PEST AI Logo" className="w-full h-full object-cover rounded-lg" />,
    description: "Une plateforme d’agriculture intelligente combinant IA, PESTFLY (Drones), Satellites et IoT pour réduire les pertes agricoles et optimiser les rendements.",
    targetAudience: "Agriculteurs, Coopératives, Instituts Agricoles, Agrobusiness",
    impactStats: [
      { label: "Pertes Réduites", value: "-40%" },
      { label: "Intrants Chimiques", value: "-90%" },
      { label: "Précision", value: "cm²" }
    ],
    mission: "Sécuriser l'avenir alimentaire de l'Afrique en armant chaque agriculteur d'une intelligence technologique de pointe, capable de détecter l'invisible et de prévenir les crises avant qu'elles ne surviennent.",
    vision: "Bâtir un écosystème agricole souverain et résilient, où la donnée et la robotique transforment l'agriculture de subsistance en une industrie de précision, durable et économiquement viable pour les générations futures.",
    productValues: [
      { title: "Précision Chirurgicale", description: "Zéro gaspillage. Nous ciblons la maladie au centimètre près, réduisant drastiquement l'usage de produits chimiques." },
      { title: "Souveraineté Technologique", description: "Des modèles d'IA entraînés sur nos sols, pour nos climats, maîtrisés par nos ingénieurs." },
      { title: "Eco-Responsabilité", description: "Protéger la santé des sols et des hommes en remplaçant la chimie massive par l'intelligence ciblée." }
    ],
    challenges: [
      {
        title: "Pertes Massives",
        description: "Jusqu'à 40% des récoltes sont perdues chaque année en Afrique de l'Ouest faute de détection précoce des maladies.",
        stat: "40%",
        icon: <TrendingDown />
      },
      {
        title: "Diagnostic Inaccessible",
        description: "Manque criant d'outils de diagnostic simples. Les agriculteurs ne peuvent pas identifier scientifiquement les pathologies.",
        stat: "0 Outils",
        icon: <EyeOff />
      },
      {
        title: "Déficit d'Experts",
        description: "Les techniciens agricoles sont trop peu nombreux pour couvrir les immenses surfaces cultivables.",
        stat: "1/5000 Ratio",
        icon: <UserX />
      },
      {
        title: "Surcharge Chimique",
        description: "Jusqu'à 30% du budget de la récolte part en produits chimiques, souvent mal utilisés, détruisant sols et santé.",
        stat: "30% Coût",
        icon: <Droplets />
      }
    ],
    fullDescription: "Dans un contexte de volatilité climatique extrême et de pression démographique croissante, l'agriculture africaine se trouve à la croisée des chemins. PEST AI incarne la réponse technologique d'Ecliptix à cet impératif de souveraineté alimentaire.\n\nPlus qu'une simple application, PEST AI est une infrastructure cognitive complète qui fusionne l'intelligence artificielle prédictive, la robotique aérienne autonome (PESTFLY) et l'analyse satellitaire macroscopique. \n\nNotre approche révolutionne le paradigme agricole traditionnel : nous passons d'une logique curative et massive (traiter tout le champ quand le problème est visible) à une logique préventive et chirurgicale (détecter les signaux faibles et traiter uniquement la plante malade). Ce saut technologique permet non seulement de sauver les récoltes, mais aussi de restaurer la rentabilité des exploitations et de préserver les écosystèmes pour les décennies à venir.",
    modules: [
      {
        id: "MOD-PESTSCAN",
        title: "PestScan",
        subtitle: "Diagnostic Visuel IA",
        description: "Diagnostic immédiat par IA à partir d'une simple photo de feuille ou de culture.",
        icon: <Scan />,
        techTags: ["Computer Vision", "Deep Learning", "Offline First"],
        fullDescription: "PestScan est le module de diagnostic de première ligne. Il transforme n'importe quel smartphone standard en un laboratoire phytosanitaire de poche. Grâce à un réseau de neurones convolutif (CNN) optimisé pour les processeurs mobiles (NPU), l'analyse se fait localement en moins de 2 secondes, sans nécessiter de connexion internet stable.",
        architecture: "Le modèle d'IA est entraîné sur un dataset propriétaire de plus de 500,000 images de pathologies tropicales spécifiques à l'Afrique de l'Ouest. Il utilise une architecture MobileNetV3 quantifiée pour une inférence rapide sur les appareils Android bas de gamme.",
        keyFeatures: [
          "Détection de 150+ maladies et ravageurs",
          "Fonctionnement 100% hors-ligne",
          "Géolocalisation automatique des foyers",
          "Recommandations de traitement biologiques"
        ],
        specs: [
          { label: "Précision Modèle", value: "94.8% (F1-Score)" },
          { label: "Temps Inférence", value: "< 200ms" },
          { label: "Taille App", value: "45 MB" },
          { label: "Compatibilité", value: "Android 8.0+" }
        ]
      },
      {
        id: "MOD-PESTSENSE",
        title: "PestSense",
        subtitle: "Réseau de Capteurs IoT",
        description: "Stations météo connectées mesurant humidité, température et pH.",
        icon: <Wifi />,
        techTags: ["IoT", "LoRaWAN", "Real-time Telemetry"],
        fullDescription: "PestSense déploie un maillage de capteurs microclimatiques directement dans les parcelles. Ces sentinelles numériques surveillent 24/7 les conditions critiques (Hygrométrie foliaire, Température du sol, Luminosité) qui favorisent l'apparition des champignons et bactéries.",
        architecture: "Les nœuds capteurs communiquent via le protocole LoRaWAN (Long Range Low Power), permettant une transmission de données jusqu'à 15km en zone rurale sans carte SIM par capteur. Une passerelle centrale agrège les données et les transmet au cloud Ecliptix.",
        keyFeatures: [
          "Autonomie énergétique de 2 ans",
          "Alertes SMS en temps réel",
          "Prédiction des risques fongiques",
          "Mesure pH et Humidité du sol"
        ],
        specs: [
          { label: "Portée Comms", value: "10-15 km (LoRa)" },
          { label: "Batterie", value: "Li-SOCl2 (3.6V)" },
          { label: "Intervalle Mesure", value: "Programmable (15m)" },
          { label: "Résistance", value: "IP67 (Étanche)" }
        ]
      },
      {
        id: "MOD-PESTFLY",
        title: "PESTFLY",
        subtitle: "Drone Pulvérisation & Scan",
        description: "Drones autonomes pour le scan multispectral et la pulvérisation ciblée (Spot Spraying).",
        icon: <Crosshair />,
        techTags: ["Autonomous Drone", "Spot Spraying", "Multispectral"],
        fullDescription: "PESTFLY est notre unité d'intervention aérienne. Ce n'est pas un simple drone, c'est un robot agricole autonome capable de deux missions : scanner les champs avec des caméras multispectrales pour évaluer la santé des plantes (NDVI), et appliquer des traitements phytosanitaires avec une précision chirurgicale (Spot Spraying).",
        architecture: "Le drone embarque un contrôleur de vol pixhawk couplé à un ordinateur de bord Jetson Nano pour le traitement d'image en temps réel. Le système de pulvérisation utilise des buses centrifuges à débit variable contrôlées par l'IA.",
        keyFeatures: [
          "Pulvérisation à débit variable (VRA)",
          "Évitement d'obstacles LIDAR",
          "Retour automatique à la base",
          "Réduction de 90% des pesticides"
        ],
        specs: [
          { label: "Capacité Réservoir", value: "16 Litres" },
          { label: "Largeur Spray", value: "4 - 6 mètres" },
          { label: "Autonomie Vol", value: "25 minutes" },
          { label: "Couverture", value: "10 Ha / heure" }
        ]
      },
      {
        id: "MOD-PESTORBITE",
        title: "PestOrbite",
        subtitle: "Imagerie Satellitaire",
        description: "Surveillance macroscopique via satellite et analyse NDVI.",
        icon: <Satellite />,
        techTags: ["Satellite Imaging", "NDVI Analysis", "Geospatial"],
        fullDescription: "PestOrbite offre la vue d'ensemble (\"The Big Picture\"). En exploitant les constellations satellitaires Sentinel-2 et Landsat, nous fournissons une analyse de la vigueur végétative sur de très grandes surfaces, permettant aux coopératives et agro-industriels de prioriser leurs interventions.",
        architecture: "Notre pipeline de traitement ingère les images brutes, effectue les corrections atmosphériques et calcule les indices de végétation (NDVI, NDRE, EVI). Les anomalies sont ensuite flaggées par notre algorithme de détection de changements temporels.",
        keyFeatures: [
          "Historique des parcelles sur 5 ans",
          "Détection du stress hydrique",
          "Estimation des rendements",
          "Mise à jour tous les 5 jours"
        ],
        specs: [
          { label: "Résolution Spatiale", value: "10m / pixel" },
          { label: "Fréquence Revisit", value: "5 jours" },
          { label: "Bandes Spectrales", value: "13 bandes" },
          { label: "API", value: "REST / GeoJSON" }
        ]
      }
    ]
  },
  {
    id: "PROD-LOCAL",
    title: "LocalPro.AI",
    subtitle: "SMB Growth Engine",
    themeColor: "blue",
    icon: <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEntAyOwWUb0g/company-logo_200_200/B4DZsUpxv2J8AQ-/0/1765578062500?e=1770249600&v=beta&t=Ai107VJTmQdhmae_xKSzFLxmbCfsb0--D4OVirv27lQ" alt="LocalPro Logo" className="w-full h-full object-cover rounded-lg" />,
    description: "L'assistant de croissance pour entrepreneurs. Automatisation marketing, CRM simplifié et acquisition client locale.",
    targetAudience: "Entrepreneurs, Artisans, Freelances, TPE/PME",
    impactStats: [
      { label: "Gain de temps", value: "15h / semaine" },
      { label: "Conversion", value: "+35%" },
      { label: "Canaux", value: "SMS / WhatsApp / Email" }
    ],
    challenges: [
      {
        title: "Invisibilité Numérique",
        description: "Les artisans et PME peinent à exister en ligne face aux géants, perdant 80% des opportunités locales.",
        stat: "80% Perte",
        icon: <EyeOff />
      },
      {
        title: "Chaos Administratif",
        description: "Gestion des clients sur carnet ou Excel. Perte d'information, oubli de relance et impayés.",
        stat: "Admin Chaos",
        icon: <FileWarning />
      },
      {
        title: "Marketing Complexe",
        description: "Les outils existants (Ads, SEO) sont trop complexes et chers pour l'entrepreneur individuel.",
        stat: "Trop Cher",
        icon: <TrendingUp />
      },
      {
        title: "Temps Perdu",
        description: "L'entrepreneur passe plus de temps à chercher des clients qu'à exercer son métier.",
        stat: "-15h/sem",
        icon: <Clock />
      }
    ],
    fullDescription: "LocalPro.AI est une plateforme intelligente développée par Ecliptix pour démocratiser la croissance digitale. Pensée pour les réalités africaines, elle rend la prospection et la fidélisation accessibles sans expertise technique.\n\nLa plateforme aide les entrepreneurs à trouver des clients locaux via un ciblage précis, à automatiser leurs campagnes de relance marketing sur les canaux les plus utilisés (WhatsApp, SMS) et à gérer leurs prospects via un mini CRM ultra-intuitif.",
    modules: [
      {
        id: "MOD-AUTOMKT",
        title: "Auto-Marketing",
        subtitle: "Campagnes Automatisées",
        description: "Créez et diffusez des campagnes marketing sur WhatsApp, SMS et Email.",
        icon: <MessageSquare />,
        techTags: ["Generative AI", "WhatsApp API", "Automation"],
        fullDescription: "Le module Auto-Marketing est votre département marketing virtuel. Il permet de créer, planifier et diffuser des campagnes promotionnelles sur les canaux qui comptent vraiment en Afrique : WhatsApp et SMS. L'IA générative intégrée rédige pour vous des messages accrocheurs et personnalisés.",
        architecture: "Le système repose sur un moteur de templates dynamique couplé à l'API WhatsApp Business officielle et des agrégateurs SMS locaux. Un modèle de langage (LLM) fine-tuné sur le copywriting commercial suggère les textes.",
        keyFeatures: [
          "Générateur de texte par IA",
          "Séquences de relance automatiques",
          "Statistiques d'ouverture en temps réel",
          "Respect des quotas anti-spam"
        ],
        specs: [
          { label: "Débit Envoi", value: "100 msg / sec" },
          { label: "Canaux", value: "WhatsApp, SMS, Email" },
          { label: "Personnalisation", value: "Variables Dynamiques" },
          { label: "Conformité", value: "RGPD / local data" }
        ]
      },
      {
        id: "MOD-CRM",
        title: "Mini CRM",
        subtitle: "Gestion Client Simplifiée",
        description: "Centralisez vos contacts et suivez l'état de vos devis.",
        icon: <PieChart />,
        techTags: ["Contact Management", "Deal Pipeline", "Analytics"],
        fullDescription: "Fini les carnets de notes perdus et les fichiers Excel illisibles. Le Mini CRM de LocalPro est conçu pour la mobilité. Il centralise toutes vos interactions clients, vos devis et vos factures dans une interface ultra-simple. Vous savez toujours qui rappeler et quand.",
        architecture: "Base de données relationnelle distribuée avec synchronisation offline-first (PouchDB/CouchDB). L'interface utilisateur est optimisée pour les écrans tactiles et les connexions à faible bande passante.",
        keyFeatures: [
          "Pipeline de vente visuel (Kanban)",
          "Importation contacts téléphone",
          "Génération de devis PDF",
          "Historique des interactions"
        ],
        specs: [
          { label: "Capacité", value: "Illimité" },
          { label: "Export", value: "CSV / Excel / PDF" },
          { label: "Sécurité", value: "Chiffrement AES-256" },
          { label: "Backup", value: "Cloud Auto" }
        ]
      },
      {
        id: "MOD-BOOST",
        title: "Local Boost",
        subtitle: "Acquisition Géolocalisée",
        description: "Trouvez des clients potentiels dans votre zone géographique précise.",
        icon: <Plane />,
        techTags: ["Geolocation", "Audience Targeting", "Lead Gen"],
        fullDescription: "Local Boost est un moteur de recherche de prospects (Lead Generation) ultra-puissant. Il scanne les données publiques et les réseaux sociaux pour identifier des clients potentiels dans votre zone de chalandise qui correspondent à votre activité.",
        architecture: "Nos crawlers indexent des millions de points d'intérêt (POI) et d'activités commerciales. Un algorithme de matching géospatial croise votre offre avec la demande locale détectée.",
        keyFeatures: [
          "Carte interactive des prospects",
          "Filtrage par secteur d'activité",
          "Enrichissement des données (Tel, Email)",
          "Score de pertinence IA"
        ],
        specs: [
          { label: "Rayon Scan", value: "1 à 50 km" },
          { label: "Sources", value: "GMaps, Social, Web" },
          { label: "Mise à jour", value: "Hebdomadaire" },
          { label: "Précision", value: "Coordonnées GPS" }
        ]
      }
    ]
  },
  {
    id: "PROD-FASSI",
    title: "FASSI",
    subtitle: "BTP Operating System",
    themeColor: "orange",
    icon: <HardHat />,
    description: "Plateforme 360° de pilotage de chantiers BTP : gestion de projet, suivi budgétaire et certification de conformité.",
    targetAudience: "Entreprises BTP, Promoteurs, Maîtres d'Ouvrage, Bureaux de Contrôle",
    impactStats: [
      { label: "Retards", value: "-70%" },
      { label: "Marge Nette", value: "+15%" },
      { label: "Traçabilité", value: "100%" }
    ],
    challenges: [
      {
        title: "Coulage de Matériaux",
        description: "Vols et pertes de matériaux (ciment, fer) sur les chantiers, impactant directement la marge.",
        stat: "15% Perte",
        icon: <AlertTriangle />
      },
      {
        title: "Dérapage Planning",
        description: "Retards chroniques dus à une mauvaise coordination et un manque de visibilité temps réel.",
        stat: "+3 Mois",
        icon: <Clock />
      },
      {
        title: "Opacité Qualité",
        description: "Difficulté pour les maîtres d'ouvrage de vérifier la qualité réelle et la conformité des travaux.",
        stat: "Risque",
        icon: <ShieldCheck />
      },
      {
        title: "Reporting Archaïque",
        description: "Rapports papier ou WhatsApp inexploitables pour une prise de décision stratégique.",
        stat: "Data Perdue",
        icon: <FileWarning />
      }
    ],
    fullDescription: "FASSI évolue pour devenir le système d'exploitation du BTP en Afrique. Plus qu'un simple outil de certification, c'est une tour de contrôle complète pour les entreprises de construction.\n\nElle permet de piloter l'avancement physique des travaux, de gérer les ressources (matériaux, main d'œuvre) et de garantir la qualité technique via des certifications digitales infalsifiables. FASSI réduit les retards, sécurise les marges et instaure un climat de confiance absolu entre maîtres d'ouvrage et entreprises.",
    modules: [
      {
        id: "MOD-SITE-MASTER",
        title: "Site-Master",
        subtitle: "Pilotage de Chantier",
        description: "Suivi d'avancement physique, journal de chantier numérique et coordination des équipes.",
        icon: <ClipboardList />,
        techTags: ["Real-time Sync", "Mobile Reporting", "Team Collab"],
        fullDescription: "Site-Master est le cerveau opérationnel du chantier. Il remplace les rapports papiers et les groupes WhatsApp chaotiques. Les chefs de chantier remontent l'avancement quotidien, pointent les présences et signalent les bloquants directement depuis leur smartphone. Le bureau a une visibilité instantanée sur la réalité du terrain.",
        architecture: "Application mobile offline-first synchronisée avec un dashboard web central. Utilisation de la géolocalisation pour valider la présence sur site et horodatage blockchain des rapports journaliers.",
        keyFeatures: [
          "Journal de chantier digital",
          "Suivi des tâches (Gantt dynamique)",
          "Gestion des réserves avec photos",
          "Pointage des équipes"
        ],
        specs: [
          { label: "Mode", value: "Offline / Online" },
          { label: "Utilisateurs", value: "Illimité" },
          { label: "Export", value: "PDF / Excel" },
          { label: "Notifications", value: "Push / SMS" }
        ]
      },
      {
        id: "MOD-CERTIF-SHIELD",
        title: "Certif-Shield",
        subtitle: "Confiance & Qualité",
        description: "Gestion des agréments, contrôle qualité et certification digitale des étapes clés.",
        icon: <ShieldCheck />,
        techTags: ["Blockchain", "Document AI", "Quality Control"],
        fullDescription: "La confiance est la monnaie du BTP. Certif-Shield numérise et vérifie tous les documents critiques : assurances décennales, agréments techniques, PV de réception. L'IA analyse la validité des pièces et la Blockchain ancre les étapes clés du projet pour créer un dossier technique infalsifiable.",
        architecture: "Coffre-fort numérique sécurisé avec analyse documentaire par OCR/NLP. Génération de certificats numériques (NFT/Verifiable Credentials) pour chaque jalon validé.",
        keyFeatures: [
          "Vérification automatique documents",
          "Ancrage Blockchain des PV",
          "Portefeuille de qualifications",
          "Score de fiabilité entreprise"
        ],
        specs: [
          { label: "Sécurité", value: "AES-256 + Blockchain" },
          { label: "Conformité", value: "Normes BTP" },
          { label: "Vérification", value: "IA + Humain" },
          { label: "Accès", value: "QR Code Sécurisé" }
        ]
      },
      {
        id: "MOD-RESOURCE-FLOW",
        title: "Resource-Flow",
        subtitle: "Gestion & Budget",
        description: "Suivi des consommations matériaux, gestion des approvisionnements et contrôle budgétaire.",
        icon: <TrendingUp />,
        techTags: ["Cost Control", "Supply Chain", "Predictive Analytics"],
        fullDescription: "Maîtrisez vos marges. Resource-Flow permet de suivre en temps réel la consommation des matériaux (Ciment, Fer, Béton) et de les comparer au budget initial. L'IA détecte les écarts anormaux (vols, gaspillage) et prédit les besoins de réapprovisionnement pour éviter les ruptures de stock.",
        architecture: "Système de gestion de stock simplifié connecté aux données de chantier. Algorithmes prédictifs basés sur l'avancement physique pour estimer le 'Reste à Faire' (RAF) et le coût final.",
        keyFeatures: [
          "Suivi budgétaire en temps réel",
          "Gestion des stocks chantiers",
          "Commandes fournisseurs intégrées",
          "Alertes dépassement budget"
        ],
        specs: [
          { label: "Précision", value: "Temps réel" },
          { label: "Intégration", value: "Excel / ERP" },
          { label: "Analyse", value: "Écart / Prévision" },
          { label: "ROI", value: "Immédiat" }
        ]
      }
    ]
  }
];

interface HubProps {
  onProductClick: (product: ProductItem) => void;
  onBack?: () => void;
  isSection?: boolean;
}

export const Hub: React.FC<HubProps> = ({ onProductClick, onBack, isSection = false }) => {
  const pestAI = productsData[0];
  const localPro = productsData[1];
  const fassi = productsData[2];

  const Container = isSection ? 'section' : 'div';
  const containerClasses = isSection 
    ? "py-16 md:py-32 relative border-t border-white/10" 
    : "min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]";

  return (
    <Container id={isSection ? "hub" : undefined} className={containerClasses}>
      
      {/* Background Ambience */}
      {!isSection && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-green-900/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
        </div>
      )}

      {isSection && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
           <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-ecliptix-orange/5 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Navigation only for standalone */}
        {!isSection && onBack && (
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-12"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour au QG
          </button>
        )}

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 border border-white/20 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <FlaskConical size={14} className="text-ecliptix-orange" />
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Innovation Lab</span>
           </div>
           <h1 className={`${isSection ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'} font-bold text-white mb-6`}>Ecliptix <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecliptix-orange to-white">Hub</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto font-light text-base md:text-lg">
             Le laboratoire où le futur prend forme. Découvrez nos solutions propriétaires déployées sur le terrain, combinant l'IA de pointe aux réalités concrètes de l'Afrique.
           </p>
        </div>

        {/* PEST AI CARD */}
        <div className="mb-16 md:mb-32 cursor-pointer group" onClick={() => onProductClick(pestAI)}>
          <div className="relative bg-slate-900/60 border border-green-500/30 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-green-500/60 transition-colors duration-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.1)]">
            {/* Header Product */}
            <div className="p-6 md:p-12 border-b border-green-500/20 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between bg-green-950/20 group-hover:bg-green-950/30 transition-colors">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full md:w-auto">
                {/* LOGO CONTAINER */}
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-2xl bg-green-900/30 border border-green-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)] group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQF8aFwVyRfGHg/company-logo_200_200/B4EZU33xiUHcAI-/0/1740399123289?e=1767225600&v=beta&t=7D5Lb2mOY1FULswru3tiJqVGinxqcpTCjunP-CToiHI" 
                    alt="PEST AI Logo" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">{pestAI.title}</h3>
                  <p className="text-green-400 font-mono text-xs md:text-sm uppercase tracking-widest mt-2">:: {pestAI.subtitle} ::</p>
                </div>
              </div>
              <div className="text-left md:text-right max-w-lg">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pestAI.description}
                </p>
              </div>
            </div>

            {/* Preview Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-green-500/20 border-t border-green-500/20">
              {pestAI.modules.map((mod, idx) => (
                <div key={idx} className="p-6 md:p-8 bg-slate-900/60 hover:bg-green-500/10 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4 text-green-400">
                    {React.cloneElement(mod.icon as React.ReactElement<any>, { size: 20 })}
                    <h4 className="font-bold uppercase tracking-wider text-sm">{mod.title}</h4>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-green-950/30 border-t border-green-500/20 text-center group-hover:bg-green-500/20 transition-colors">
              <button className="text-xs font-mono text-green-400 group-hover:text-white uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
                Explorer la solution <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* LOCALPRO & FASSI (Compact) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="cursor-pointer group" onClick={() => onProductClick(localPro)}>
                <div className="relative bg-slate-900/60 border border-blue-500/30 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-blue-500/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] h-full flex flex-col">
                    <div className="p-8 border-b border-blue-500/20 flex items-start gap-6 bg-blue-950/20">
                        <div className="w-20 h-20 rounded-xl bg-blue-900/30 border border-blue-500/50 flex items-center justify-center shrink-0">
                            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEntAyOwWUb0g/company-logo_200_200/B4DZsUpxv2J8AQ-/0/1765578062500?e=1767225600&v=beta&t=Mt_nY4KO_x2cCiynGSOhv_rJUOymanuKLrNxxPytWGo" alt="LocalPro Logo" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white font-mono tracking-tight">{localPro.title}</h3>
                            <p className="text-blue-400 font-mono text-xs uppercase tracking-widest mt-1 mb-2">{localPro.subtitle}</p>
                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{localPro.description}</p>
                        </div>
                    </div>
                    <div className="p-4 bg-blue-950/30 border-t border-blue-500/20 text-center mt-auto group-hover:bg-blue-500/20 transition-colors">
                        <span className="text-xs font-mono text-blue-400 group-hover:text-white uppercase tracking-widest flex items-center justify-center gap-2">
                            Découvrir <ArrowRight size={12} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="cursor-pointer group" onClick={() => onProductClick(fassi)}>
                <div className="relative bg-slate-900/60 border border-orange-500/30 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-orange-500/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(249,115,22,0.1)] h-full flex flex-col">
                    <div className="p-8 border-b border-orange-500/20 flex items-start gap-6 bg-orange-950/20">
                        <div className="w-20 h-20 rounded-xl bg-orange-900/30 border border-orange-500/50 flex items-center justify-center shrink-0">
                            <HardHat size={32} className="text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white font-mono tracking-tight">{fassi.title}</h3>
                            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mt-1 mb-2">{fassi.subtitle}</p>
                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{fassi.description}</p>
                        </div>
                    </div>
                    <div className="p-4 bg-orange-950/30 border-t border-orange-500/20 text-center mt-auto group-hover:bg-orange-500/20 transition-colors">
                        <span className="text-xs font-mono text-orange-400 group-hover:text-white uppercase tracking-widest flex items-center justify-center gap-2">
                            Découvrir <ArrowRight size={12} />
                        </span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Container>
  );
};
