
import React, { useState } from 'react';
import { GraduationCap, Code2, Database, Plane, Cpu, ArrowRight, BrainCircuit, Terminal, Layers, Network, FileCode, Container, Server, Globe, Bot, Eye, BarChart3, Smartphone, PieChart, Cloud, Wifi, Lock, ShieldCheck, HardDrive, GitMerge, Megaphone, Heart, Image, Users, MessageCircle, Sparkles, Zap } from 'lucide-react';
import { Course } from '../types';

export const courses: Course[] = [
  {
    id: "FOUNDATION-PY",
    title: "Python & AI Foundations",
    level: "Junior (Débutant)",
    duration: "3 Mois",
    format: "Soir (18h-21h) + Weekend",
    nextSession: "10 Février 2026",
    price: "150,000 FCFA",
    icon: <FileCode />,
    stack: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Jupyter"],
    stackIcons: [<FileCode size={14}/>, <Database size={14}/>, <Terminal size={14}/>],
    description: "La porte d'entrée vers l'ingénierie moderne. Apprenez à penser comme un ordinateur, maîtrisez Python de zéro et construisez vos premiers modèles de Machine Learning. Aucun prérequis technique.",
    objectives: [
      "Maîtriser la syntaxe et la logique Python",
      "Manipuler des données avec Pandas",
      "Créer des visualisations de données",
      "Entraîner un premier modèle prédictif"
    ],
    prerequisites: [
      "Aisance avec un ordinateur",
      "Logique mathématique niveau Lycée",
      "Motivation de fer"
    ],
    targetAudience: ["Étudiants", "Reconversion Pro", "Débutants complets"],
    curriculum: [
      { module: "Semaine 1-4", title: "Algorithmique & Python", topics: ["Variables & Boucles", "Fonctions", "Structures de données", "Mini-Projet: Jeu Terminal"] },
      { module: "Semaine 5-8", title: "Data Analysis", topics: ["NumPy Arrays", "Pandas Dataframes", "Data Cleaning", "Projet: Analyse Ventes"] },
      { module: "Semaine 9-12", title: "Intro Machine Learning", topics: ["Régression Linéaire", "Classification", "Scikit-Learn", "Capstone: Prédiction Immobilière"] }
    ],
    certification: "Ecliptix Python Associate"
  },
  {
    id: "AI-MARKETING",
    title: "IA Générative pour le Marketing",
    level: "Intermédiaire",
    duration: "2 Mois",
    format: "Weekend Intensif",
    nextSession: "25 Février 2026",
    price: "200,000 FCFA",
    icon: <Megaphone />,
    stack: ["ChatGPT", "Midjourney", "Zapier", "Canva AI", "Notion"],
    stackIcons: [<Bot size={14}/>, <Image size={14}/>, <Zap size={14}/>],
    description: "Boostez votre productivité créative. Apprenez à utiliser l'IA pour rédiger des contenus viraux, générer des visuels époustouflants et automatiser vos tâches répétitives. Devenez un Marketer Augmenté.",
    objectives: [
      "Maîtriser le Prompt Engineering avancé (Texte & Image)",
      "Créer des visuels publicitaires avec Midjourney",
      "Automatiser la création de contenu (Réseaux Sociaux)",
      "Construire un assistant marketing personnalisé"
    ],
    prerequisites: [
      "Bases du Marketing Digital",
      "Usage courant d'un ordinateur"
    ],
    targetAudience: ["Community Managers", "Entrepreneurs", "Responsables Com", "Freelances"],
    curriculum: [
      { module: "Semaine 1-3", title: "Prompt Engineering & Copywriting", topics: ["ChatGPT Masterclass", "Frameworks de Copywriting", "SEO avec IA", "Projet: Stratégie Éditoriale"] },
      { module: "Semaine 4-6", title: "Art Génératif & Visuels", topics: ["Midjourney V6", "Canva Magic Studio", "Cohérence de Marque", "Projet: Campagne Pub"] },
      { module: "Semaine 7-8", title: "Automatisation & Workflows", topics: ["Zapier / Make", "Auto-posting", "Analyse Sentiment", "Capstone: Agence Automatisée"] }
    ],
    certification: "AI Marketing Specialist"
  },
  {
    id: "DATA-ANALYST",
    title: "Data Analyst & BI",
    level: "Junior / Intermédiaire",
    duration: "3 Mois",
    format: "Weekend Intensif",
    nextSession: "20 Février 2026",
    price: "200,000 FCFA",
    icon: <BarChart3 />,
    stack: ["SQL", "PowerBI", "Excel", "Python", "Tableau"],
    stackIcons: [<Database size={14}/>, <PieChart size={14}/>, <FileCode size={14}/>],
    description: "Les données sont le nouveau pétrole. Apprenez à les extraire, les nettoyer et les transformer en tableaux de bord stratégiques pour la prise de décision en entreprise.",
    objectives: [
      "Maîtriser le requêtage SQL complexe",
      "Créer des dashboards interactifs PowerBI",
      "Nettoyer des datasets bruts (Data Wrangling)",
      "Storytelling avec la donnée"
    ],
    prerequisites: [
      "Bonne maîtrise d'Excel",
      "Esprit analytique"
    ],
    targetAudience: ["Comptables", "Marketers", "Gestionnaires", "Étudiants"],
    curriculum: [
      { module: "Semaine 1-4", title: "Excel Avancé & SQL", topics: ["VLOOKUP/XLOOKUP", "Pivot Tables", "SELECT/JOIN/GROUP BY", "Projet: Analyse Financière"] },
      { module: "Semaine 5-8", title: "PowerBI & Viz", topics: ["DAX Basics", "Data Modeling", "Interactive Dashboards", "Projet: Rapport Ventes"] },
      { module: "Semaine 9-12", title: "Data Storytelling", topics: ["Python Seaborn", "Présentation Executive", "KPIs Stratégiques", "Capstone: Audit Entreprise"] }
    ],
    certification: "Certified Data Analyst"
  },
  {
    id: "AI-FOR-ALL",
    title: "IA pour Tous (Gratuit)",
    level: "Débutant (Grand Public)",
    duration: "2 Semaines",
    format: "En Ligne (Soir)",
    nextSession: "Session Mensuelle",
    price: "Gratuit",
    icon: <Heart />,
    stack: ["ChatGPT", "Gemini", "Bing", "Perplexity"],
    stackIcons: [<Bot size={14}/>, <Globe size={14}/>, <Sparkles size={14}/>],
    description: "L'intelligence artificielle n'est pas réservée aux ingénieurs. Cette initiation gratuite vous donne les clés pour comprendre, utiliser et ne pas subir la révolution IA au quotidien.",
    objectives: [
      "Comprendre ce qu'est vraiment l'IA (et ce qu'elle n'est pas)",
      "Utiliser ChatGPT pour gagner du temps au quotidien",
      "Découvrir les outils IA gratuits accessibles",
      "Sensibilisation aux enjeux éthiques"
    ],
    prerequisites: [
      "Curiosité",
      "Aucun prérequis technique"
    ],
    targetAudience: ["Étudiants", "Parents", "Curieux", "Professionnels"],
    curriculum: [
      { module: "Semaine 1", title: "Démystification", topics: ["Histoire de l'IA", "LLM expliqués simplement", "ChatGPT vs Google", "Atelier: Premier Prompt"] },
      { module: "Semaine 2", title: "Boîte à Outils", topics: ["IA pour écrire", "IA pour chercher", "IA pour organiser", "Quiz de fin"] }
    ],
    certification: "Attestation de Participation"
  },
  {
    id: "MOBILE-FLUTTER",
    title: "Mobile Dev & AI Integration",
    level: "Intermédiaire",
    duration: "4 Mois",
    format: "Soir (19h-22h)",
    nextSession: "01 Mars 2026",
    price: "250,000 FCFA",
    icon: <Smartphone />,
    stack: ["Flutter", "Dart", "Firebase", "TensorFlow Lite", "API REST"],
    stackIcons: [<Smartphone size={14}/>, <Code2 size={14}/>, <Bot size={14}/>],
    description: "Créez des applications mobiles iOS et Android natives avec une seule base de code. Apprenez à intégrer de l'IA (Vision, Chat) directement dans vos apps comme PEST AI.",
    objectives: [
      "Développer des apps cross-platform avec Flutter",
      "Gérer l'état (Provider/Riverpod) et les API",
      "Intégrer des modèles IA on-device (TF Lite)",
      "Publier sur Play Store et App Store"
    ],
    prerequisites: [
      "Connaissances bases programmation (Algo)",
      "Logique orientée objet"
    ],
    targetAudience: ["Développeurs Web", "Étudiants IT", "Entrepreneurs"],
    curriculum: [
      { module: "Semaine 1-4", title: "Dart & Flutter UI", topics: ["Widgets Basics", "Layouts", "Navigation", "Projet: Clone WhatsApp UI"] },
      { module: "Semaine 5-8", title: "Logic & Data", topics: ["State Management", "API Consumption", "Firebase Auth", "Projet: E-commerce App"] },
      { module: "Semaine 9-12", title: "AI Integration", topics: ["Camera API", "TensorFlow Lite", "Chatbot UI", "Projet: Plant Disease Scanner"] },
      { module: "Semaine 13-16", title: "Polish & Deploy", topics: ["Animations", "Offline Mode", "Store Release", "Capstone: Votre Startup App"] }
    ],
    certification: "Mobile AI Developer"
  },
  {
    id: "BACKEND-MASTER",
    title: "Backend Mastery: Django & APIs",
    level: "Officier (Intermédiaire)",
    duration: "4 Mois",
    format: "Intensif Hybride",
    nextSession: "15 Mars 2026",
    price: "250,000 FCFA",
    icon: <Server />,
    stack: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
    stackIcons: [<Server size={14}/>, <Database size={14}/>, <Container size={14}/>, <Globe size={14}/>],
    description: "Devenez le moteur des applications web. Apprenez à construire des API robustes, sécurisées et scalables qui alimentent les applications mobiles et les systèmes IA.",
    objectives: [
      "Créer des API RESTful avec Django REST Framework",
      "Gérer des bases de données PostgreSQL",
      "Conteneuriser des applications avec Docker",
      "Déployer sur le Cloud (AWS/DigitalOcean)"
    ],
    prerequisites: [
      "Connaissances solides en Python",
      "Compréhension du Web (HTTP, JSON)",
      "Bases de SQL"
    ],
    targetAudience: ["Développeurs Frontend", "Juniors Python", "Autodidactes"],
    curriculum: [
      { module: "Semaine 1-4", title: "Architecture Django", topics: ["MVT Pattern", "ORM & Models", "Admin Panel", "Projet: Blog Engine"] },
      { module: "Semaine 5-8", title: "API Development", topics: ["Serializers", "Authentication (JWT)", "Permissions", "Projet: E-commerce API"] },
      { module: "Semaine 9-12", title: "Advanced Backend", topics: ["Celery (Async Tasks)", "Redis Caching", "Testing (Pytest)", "Projet: Chat App"] },
      { module: "Semaine 13-16", title: "DevOps & Deploy", topics: ["Docker Compose", "CI/CD GitHub", "Nginx/Gunicorn", "Capstone: SaaS Complet"] }
    ],
    certification: "Certified Backend Engineer"
  },
  {
    id: "MLOPS-CLOUD",
    title: "MLOps & Cloud Engineering",
    level: "Commandant (Expert)",
    duration: "5 Mois",
    format: "Soir & Samedi",
    nextSession: "20 Mars 2026",
    price: "400,000 FCFA",
    icon: <Cloud />,
    stack: ["Docker", "Kubernetes", "AWS SageMaker", "MLflow", "Terraform"],
    stackIcons: [<Container size={14}/>, <Cloud size={14}/>, <Server size={14}/>, <GitMerge size={14}/>],
    description: "Le modèle ne sert à rien s'il reste dans un notebook. Apprenez à industrialiser l'IA : pipeline CI/CD, conteneurisation, orchestration et monitoring en production sur le Cloud.",
    objectives: [
      "Conteneuriser des modèles ML avec Docker",
      "Orchestrer des déploiements avec Kubernetes",
      "Mettre en place des pipelines CI/CD pour le ML (CT/CD)",
      "Monitorer la dérive des données (Data Drift) en prod"
    ],
    prerequisites: [
      "Bases en Machine Learning",
      "Familiarité avec Linux et la ligne de commande",
      "Bases de Python"
    ],
    targetAudience: ["Data Scientists", "DevOps Engineers", "Backend Devs"],
    curriculum: [
      { module: "Semaine 1-5", title: "Containerization", topics: ["Docker Basics", "Multi-stage builds", "Docker Compose", "Projet: API Flask ML"] },
      { module: "Semaine 6-10", title: "Cloud & Infrastructure", topics: ["AWS Basics (EC2, S3)", "Terraform (IaC)", "Serverless Inference", "Projet: Cloud Deploy"] },
      { module: "Semaine 11-15", title: "ML Lifecycle", topics: ["MLflow Tracking", "Model Registry", "Feature Stores", "Projet: End-to-End Pipeline"] },
      { module: "Semaine 16-20", title: "Kubernetes & Scaling", topics: ["K8s Pods/Services", "Helm Charts", "KServe", "Capstone: MLOps Platform"] }
    ],
    certification: "Cloud ML Engineer"
  },
  {
    id: "IOT-AGRITECH",
    title: "IoT & Systèmes Embarqués",
    level: "Intermédiaire",
    duration: "4 Mois",
    format: "Présentiel (Hardware)",
    nextSession: "01 Avril 2026",
    price: "300,000 FCFA",
    icon: <Wifi />,
    stack: ["C++", "Arduino/ESP32", "LoRaWAN", "MQTT", "PCB Design"],
    stackIcons: [<Cpu size={14}/>, <Wifi size={14}/>, <Code2 size={14}/>],
    description: "Connectez le monde physique au numérique. Concevez des capteurs intelligents pour l'agriculture (comme PestSense), la ville intelligente ou l'industrie. De la soudure au Cloud.",
    objectives: [
      "Programmer des microcontrôleurs (ESP32, Arduino)",
      "Concevoir des circuits imprimés (PCB) avec KiCad",
      "Communiquer via LoRaWAN (Longue portée)",
      "Visualiser les données capteurs sur un dashboard"
    ],
    prerequisites: [
      "Bases en programmation",
      "Notions d'électricité (Loi d'Ohm)"
    ],
    targetAudience: ["Makers", "Ingénieurs Électroniques", "Développeurs curieux"],
    curriculum: [
      { module: "Semaine 1-4", title: "Électronique & C++", topics: ["Microcontrôleurs", "Capteurs (Temp/Hum)", "C++ pour Embedded", "Projet: Station Météo"] },
      { module: "Semaine 5-8", title: "Connectivité", topics: ["WiFi/BLE", "Protocole MQTT", "HTTP Requests", "Projet: Smart Home Switch"] },
      { module: "Semaine 9-12", title: "IoT Industriel (LPWAN)", topics: ["Architecture LoRaWAN", "The Things Network", "Low Power Design", "Projet: Capteur Champ"] },
      { module: "Semaine 13-16", title: "PCB & Production", topics: ["Design KiCad", "Prototypage 3D", "Boîtiers", "Capstone: Produit IoT Fini"] }
    ],
    certification: "IoT Hardware Specialist"
  },
  {
    id: "CYBER-DEFENSE",
    title: "Cybersecurity & AI Defense",
    level: "Officier (Intermédiaire)",
    duration: "4 Mois",
    format: "Soir (19h-22h)",
    nextSession: "15 Avril 2026",
    price: "350,000 FCFA",
    icon: <Lock />,
    stack: ["Kali Linux", "Python", "Wireshark", "Metasploit", "Adversarial ML"],
    stackIcons: [<ShieldCheck size={14}/>, <Terminal size={14}/>, <Lock size={14}/>],
    description: "Protégez les systèmes numériques contre les menaces émergentes. Apprenez le Hacking Éthique, la sécurisation des serveurs et la défense spécifique des modèles d'IA contre les attaques adverses.",
    objectives: [
      "Réaliser des tests d'intrusion (Pentesting)",
      "Sécuriser des serveurs Linux et des réseaux",
      "Comprendre les attaques contre l'IA (Poisoning, Extraction)",
      "Réaliser un audit de sécurité"
    ],
    prerequisites: [
      "Solides connaissances Linux/Réseau",
      "Bases de Python"
    ],
    targetAudience: ["Admin Sys", "Développeurs", "Passionnés de sécurité"],
    curriculum: [
      { module: "Semaine 1-4", title: "Bases Sécurité & Linux", topics: ["Kali Linux", "Bash Scripting", "Réseaux (TCP/IP)", "Projet: Scan Réseau"] },
      { module: "Semaine 5-8", title: "Offensive Security", topics: ["Web Vulnerabilities (OWASP)", "SQL Injection", "Metasploit", "Projet: CTF Web"] },
      { module: "Semaine 9-12", title: "Defensive & Blue Team", topics: ["Hardening Linux", "Firewalls/IDS", "Log Analysis", "Projet: Secure Server"] },
      { module: "Semaine 13-16", title: "AI Security", topics: ["Adversarial Attacks", "Model Inversion", "Prompt Injection", "Capstone: Audit Plateforme IA"] }
    ],
    certification: "Cyber Defense Operator"
  },
  {
    id: "SPEC-VISION",
    title: "Computer Vision & Edge AI",
    level: "Officier (Intermédiaire)",
    duration: "4 Mois",
    format: "Hybride (Projets Drones)",
    nextSession: "05 Mars 2026",
    price: "350,000 FCFA",
    icon: <Plane />,
    stack: ["OpenCV", "YOLOv8", "TensorRT", "Jetson", "Python"],
    stackIcons: [<Plane size={14}/>, <Eye size={14}/>, <Cpu size={14}/>],
    description: "L'IA ne vit pas que dans le Cloud. Apprenez à déployer des réseaux de neurones sur des systèmes embarqués (Drones, Caméras IoT, Robots) pour l'analyse d'images en temps réel.",
    objectives: [
      "Entraîner des modèles de détection d'objets (YOLOv8)",
      "Maîtriser la segmentation sémantique pour l'imagerie satellite/drone",
      "Optimiser les modèles pour l'Edge (Quantization, TensorRT)",
      "Déployer sur NVIDIA Jetson et Raspberry Pi"
    ],
    prerequisites: [
      "Bases solides en Python et Mathématiques",
      "Intérêt pour le Hardware"
    ],
    targetAudience: ["Robotics Engineers", "IoT Developers", "Data Scientists"],
    curriculum: [
      { module: "Semaine 1-4", title: "Deep Vision Basics", topics: ["CNNs", "Image Processing", "Data Augmentation", "Projet: Classificateur"] },
      { module: "Semaine 5-8", title: "Object Detection", topics: ["YOLO Architecture", "Annotation (CVAT)", "Training", "Projet: Détection Véhicules"] },
      { module: "Semaine 9-12", title: "Edge Deployment", topics: ["ONNX", "Quantization", "NVIDIA DeepStream", "Projet: Caméra Intelligente"] },
      { module: "Semaine 13-16", title: "Capstone Drone", topics: ["Integration Drone", "Télémétrie", "Real-time Inference", "Projet: Scan Agricole"] }
    ],
    certification: "Edge AI Specialist"
  },
  {
    id: "MASTER-GENAI",
    title: "Architecte IA Générative & LLM",
    level: "Commandant (Expert)",
    duration: "6 Mois",
    format: "Bootcamp Intensif (Soir & Weekend)",
    nextSession: "12 Février 2026",
    price: "450,000 FCFA",
    icon: <BrainCircuit />,
    stack: ["LangChain", "PyTorch", "HuggingFace", "Pinecone", "LlamaIndex"],
    stackIcons: [<BrainCircuit size={14}/>, <Bot size={14}/>, <Database size={14}/>],
    description: "Devenez l'architecte des systèmes cognitifs de demain. Maîtrisez la chaîne de valeur complète des LLMs : du Prompt Engineering avancé au Fine-Tuning de modèles Open Source, en passant par le déploiement d'Agents Autonomes (RAG).",
    objectives: [
      "Concevoir des architectures RAG (Retrieval Augmented Generation) production-ready",
      "Fine-tuner des modèles Llama 3 / Mistral sur des données métiers",
      "Développer des Agents Autonomes avec LangChain et AutoGPT",
      "Optimiser les coûts d'inférence et la latence des modèles"
    ],
    prerequisites: [
      "Maîtrise solide de Python",
      "Expérience préalable en Deep Learning (Pytorch/Tensorflow)",
      "Compréhension des architectures Transformers"
    ],
    targetAudience: ["Senior Data Scientists", "Software Engineers", "Tech Leads"],
    curriculum: [
      { module: "Semaine 1-6", title: "NLP & Transformers", topics: ["Attention Mechanism", "Embeddings", "HuggingFace Hub", "Projet: Semantic Search"] },
      { module: "Semaine 7-12", title: "Advanced RAG", topics: ["Vector DBs", "Hybrid Search", "Reranking", "Projet: Chatbot Documentaire"] },
      { module: "Semaine 13-18", title: "Fine-Tuning", topics: ["PEFT/LoRA", "Dataset Prep", "Training Loop", "Projet: LLM Juridique"] },
      { module: "Semaine 19-24", title: "Agents & Prod", topics: ["Multi-Agent Systems", "Tool Calling", "Eval & Monitoring", "Capstone: Autonomous Analyst"] }
    ],
    certification: "Master Ecliptix GenAI Architect"
  }
];

interface AcademyProps {
  onRegister?: (course: Course) => void;
}

export const Academy: React.FC<AcademyProps> = ({ onRegister }) => {
  return (
    <section className="min-h-screen pt-24 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 border border-purple-500/30 px-4 py-1 rounded-full bg-purple-500/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <GraduationCap size={14} className="text-purple-400" />
             <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em]">Ecliptix Academy</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Neuronale</span></h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
             Formations d'élite rendues accessibles. Rejoignez la nouvelle garde des ingénieurs africains.
           </p>
           <div className="mt-6 flex justify-center gap-4">
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300 font-mono font-bold uppercase tracking-wide flex items-center gap-2">
                <Code2 size={14}/> Learning by Doing
              </span>
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300 font-mono font-bold uppercase tracking-wide flex items-center gap-2">
                <Layers size={14}/> Projet Réel
              </span>
           </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
           <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 text-center hover:bg-slate-900/60 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform"><Code2 /></div>
              <h3 className="text-white font-bold mb-2">Pratique Intensive</h3>
              <p className="text-sm text-slate-400">70% de pratique. Vous sortirez avec un portfolio de projets GitHub concrets.</p>
           </div>
           <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 text-center hover:bg-slate-900/60 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform"><Network /></div>
              <h3 className="text-white font-bold mb-2">Stack Moderne</h3>
              <p className="text-sm text-slate-400">Apprenez sur les outils demandés par les entreprises : Docker, Flutter, PowerBI, LangChain.</p>
           </div>
           <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 text-center hover:bg-slate-900/60 transition-colors group">
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform"><Layers /></div>
              <h3 className="text-white font-bold mb-2">Mentorat Pro</h3>
              <p className="text-sm text-slate-400">Vos formateurs sont des experts en poste qui partagent la réalité du terrain.</p>
           </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           {courses.map((course) => (
              <div 
                key={course.id} 
                onClick={() => window.location.hash = `#/academy/course/${course.id}`}
                className="group relative bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer flex flex-col hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
              >
                 {/* Top Decoration */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="p-8 flex-1">
                    <div className="flex justify-between items-start mb-6">
                       <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-500 shadow-lg shrink-0">
                          {React.cloneElement(course.icon as React.ReactElement<any>, { size: 28 })}
                       </div>
                       <span className={`px-2 py-1 rounded-full border border-white/10 bg-black/40 text-[9px] font-mono uppercase tracking-widest flex items-center gap-2 ${course.level.includes("Expert") ? 'text-red-400' : course.level.includes("Intermédiaire") ? 'text-yellow-400' : 'text-green-400'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${course.level.includes("Expert") ? 'bg-red-500' : course.level.includes("Intermédiaire") ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                          {course.level.split(' ')[0]}
                       </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">{course.title}</h3>
                    
                    {/* Tech Stack Icons */}
                    <div className="flex items-center gap-2 mb-4">
                      {course.stackIcons?.slice(0, 4).map((icon, idx) => (
                        <div key={idx} className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-slate-400 border border-white/5">
                          {icon}
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                       {course.description}
                    </p>

                    <div className="flex flex-col gap-2 mb-6">
                       {course.curriculum.slice(0, 2).map((mod, idx) => (
                          <div key={idx} className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded border border-white/5">
                             <span className="text-[9px] font-mono text-purple-400 uppercase w-16 shrink-0">{mod.module}</span>
                             <span className="text-[10px] text-slate-300 truncate">{mod.title}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="p-6 bg-black/20 border-t border-white/5 flex justify-between items-center group-hover:bg-purple-500/10 transition-colors">
                    <div className="flex flex-col">
                       <span className="text-[9px] font-mono text-slate-500 uppercase">Tarif</span>
                       <span className={`text-sm font-bold ${course.price === 'Gratuit' ? 'text-green-400' : 'text-white'}`}>{course.price}</span>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-purple-500 group-hover:text-black group-hover:border-purple-500 transition-all">
                       <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
           ))}
        </div>

        {/* COMMUNITY HUB */}
        <div className="mt-20 p-8 md:p-16 rounded-3xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 relative overflow-hidden text-center">
           {/* Background Decorations */}
           <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px]"></div>
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px]"></div>

           <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
                 <Users size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Rejoignez la Communauté <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Ecliptix</span></h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                L'apprentissage ne s'arrête jamais. Intégrez notre réseau d'alumni, d'experts et de passionnés. Accès exclusif à des webinaires, des offres d'emploi et du mentorat par les pairs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                 <a href="https://chat.whatsapp.com/..." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] hover:bg-[#20b857] text-white font-bold rounded-xl flex items-center gap-3 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/20">
                    <MessageCircle size={20} /> Rejoindre le WhatsApp
                 </a>
                 <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold rounded-xl flex items-center gap-3 transition-transform hover:-translate-y-1 backdrop-blur-md">
                    <Sparkles size={20} className="text-yellow-400" /> Découvrir les Events
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
