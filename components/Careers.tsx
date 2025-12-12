
import React, { useState } from 'react';
import { Rocket, Users, Handshake, ChevronRight, Briefcase, MapPin, Send, UploadCloud, Cpu, Layout, Globe, Shield } from 'lucide-react';
import { JobPosting } from '../types';
import { JobDetail } from './JobDetail';

const jobs: JobPosting[] = [
  {
    id: "JOB-SCRUM",
    title: "Scrum Master",
    department: "Project Management Office",
    location: "Saint-Louis / Hybride",
    type: "Full-time",
    experienceLevel: "Mid/Senior (3+ ans)",
    description: "Orchestrez nos escouades de développement et garantissez la vélocité de nos livraisons.",
    mission: "En tant que Scrum Master chez Ecliptix, vous êtes le gardien de l'agilité. Votre mission est de fluidifier le travail de nos équipes techniques (Mobile, IA, Backend) en éliminant les obstacles et en facilitant les rituels. Vous ne gérez pas des personnes, vous gérez le flux de valeur. Vous opérerez dans un environnement complexe mêlant Hardware (Drones/IoT) et Software.",
    responsibilities: [
      "Faciliter les cérémonies Agile (Daily, Sprint Planning, Review, Retrospective) pour 2 squads.",
      "Protéger l'équipe des interruptions extérieures et éliminer les points de blocage (Impediments).",
      "Coacher l'équipe et le Product Owner sur les meilleures pratiques Scrum/Kanban et l'écriture de User Stories.",
      "Maintenir les artefacts à jour (Backlog, Burndown charts, Velocity) sur Jira avec une rigueur absolue.",
      "Favoriser une culture d'amélioration continue et de transparence radicale.",
      "Gérer les dépendances entre les équipes Frontend, Backend et Data Science."
    ],
    requirements: [
      "Certification CSM (Certified ScrumMaster) ou PSM I (obligatoire)",
      "Expérience démontrée (3 ans+) dans un environnement startup tech ou scale-up",
      "Excellente capacité de communication et de résolution de conflits",
      "Compréhension technique suffisante pour dialoguer avec des développeurs",
      "Français courant, Anglais technique opérationnel"
    ],
    skills: [
      "Facilitation Graphique",
      "Conflict Resolution",
      "Servant Leadership",
      "Risk Management",
      "Agile Coaching"
    ],
    tools: [
      "Jira Advanced",
      "Confluence",
      "Miro / FigJam",
      "Slack / Discord",
      "GitLab (Notions)"
    ],
    benefits: [
      "Environnement High-Tech",
      "Formation continue certifiante",
      "Horaires flexibles",
      "Primes de performance projet"
    ]
  },
  {
    id: "JOB-DEVOPS",
    title: "DevOps Engineer",
    department: "Engineering - Infrastructure",
    location: "Saint-Louis / Remote",
    type: "Full-time",
    experienceLevel: "Mid/Senior (3+ ans)",
    description: "Architecturer l'usine logicielle et garantir la fiabilité de nos déploiements Cloud & Edge.",
    mission: "Vous êtes le gardien de la production. Votre mission est d'automatiser le cycle de vie de nos applications, du commit du développeur jusqu'au déploiement sur des serveurs Cloud ou des drones en bordure de réseau (Edge). Vous construisez une infrastructure invisible, résiliente et auto-réparatrice pour PEST AI et LocalPro.",
    responsibilities: [
      "Concevoir et maintenir les pipelines CI/CD (GitHub Actions) pour accélérer le Time-to-Market.",
      "Gérer l'infrastructure en tant que code (IaC) avec Terraform et Ansible.",
      "Orchestrer les conteneurs avec Kubernetes et Docker Swarm en production.",
      "Mettre en place une observabilité complète (Prometheus, Grafana, ELK Stack).",
      "Assurer la sécurité des environnements (SecDevOps) et la gestion des secrets."
    ],
    requirements: [
      "Maîtrise absolue de Linux et du scripting (Bash, Python)",
      "Expérience significative avec Docker et un orchestrateur (K8s recommandé)",
      "Pratique courante d'un Cloud Provider majeur (AWS de préférence)",
      "Obsession pour l'automatisation et la documentation",
      "Compréhension des enjeux réseaux (DNS, Load Balancing, VPN)"
    ],
    skills: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Security",
      "Monitoring/Alerting"
    ],
    tools: [
      "Docker / Kubernetes",
      "Terraform / Ansible",
      "GitHub Actions",
      "AWS / DigitalOcean",
      "Prometheus / Grafana"
    ],
    benefits: [
      "Poste clé dans la stack technique",
      "Liberté de choix technologique",
      "Formation certifiante Cloud",
      "Ambiance Tech-First"
    ]
  },
  {
    id: "JOB-DESIGN",
    title: "UI/UX Designer",
    department: "Product - LocalPro",
    location: "Dakar / Saint-Louis",
    type: "Full-time",
    experienceLevel: "Mid (2+ ans)",
    description: "Concevez l'interface de notre SaaS LocalPro pour qu'elle soit intuitive pour des millions d'entrepreneurs.",
    mission: "LocalPro.AI doit être utilisable par un artisan qui n'a jamais touché un ordinateur. Votre défi est de rendre la complexité de l'IA invisible. Vous concevrez des parcours utilisateurs fluides, mobile-first et adaptés aux réalités cognitives de nos utilisateurs ouest-africains (faible littératie numérique, connexions lentes).",
    responsibilities: [
      "Créer des wireframes, prototypes interactifs et maquettes haute-fidélité sur Figma.",
      "Mener des recherches utilisateurs (User Research) et des tests d'utilisabilité sur le terrain avec les cibles.",
      "Maintenir et faire évoluer le Design System Ecliptix (Atomic Design).",
      "Collaborer étroitement avec les développeurs frontend pour assurer la fidélité de l'intégration.",
      "Concevoir les assets graphiques pour le marketing produit et les présentations investisseurs."
    ],
    requirements: [
      "Portfolio solide démontrant des projets Mobile (iOS/Android) et Web App",
      "Expertise avancée sur Figma (Auto-layout, Variables, Prototyping avancé)",
      "Compréhension profonde des contraintes d'accessibilité (WCAG) et du Mobile First",
      "Sensibilité au design émotionnel et à la micro-interaction",
      "Connaissances de base HTML/CSS/Tailwind est un gros plus"
    ],
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Design Systems"
    ],
    tools: [
      "Figma",
      "Adobe CC",
      "Lottie Files",
      "Maze (Testing)",
      "Notion"
    ],
    benefits: [
      "MacBook Pro M2 fourni",
      "Liberté créative totale",
      "Participation aux conférences Design",
      "Télétravail partiel possible"
    ]
  },
  {
    id: "JOB-ZONE",
    title: "Animateur de Zone",
    department: "Operations - PEST AI",
    location: "Vallée du Fleuve / Niayes",
    type: "Full-time (Terrain)",
    experienceLevel: "Junior/Mid",
    description: "Soyez le visage d'Ecliptix auprès des agriculteurs et supervisez les opérations drones.",
    mission: "Vous êtes notre agent de liaison sur le terrain (Field Officer). Vous déployez la solution PEST AI auprès des coopératives, formez les agriculteurs à l'utilisation de l'application et supervisez les missions de drones PESTFLY dans votre zone assignée. Vous êtes le pont entre la technologie et la terre.",
    responsibilities: [
      "Prospection et onboarding de nouvelles coopératives agricoles et grands producteurs.",
      "Organisation de démonstrations techniques (vols de drones, diagnostic IA en temps réel).",
      "Formation pédagogique des utilisateurs finaux (souvent analphabètes) à l'application PEST AI.",
      "Remontée des bugs, des feedbacks terrain et des besoins culturels à l'équipe technique.",
      "Suivi des indicateurs de performance agronomique (Rendement, baisse des intrants) de la zone."
    ],
    requirements: [
      "Formation en Agronomie, Développement Rural ou Géographie",
      "Permis de conduire (Moto/Auto) obligatoire et aisance de conduite sur piste",
      "Excellente maîtrise des langues locales (Wolof, Pulaar) et du Français",
      "Aisance avec la technologie (Smartphones Android, Tablettes, GPS)",
      "Capacité à vivre en zone rurale et à interagir avec les communautés"
    ],
    skills: [
      "Pédagogie Adulte",
      "Négociation Commerciale",
      "Pilotage Drone (Basique)",
      "Agronomie Tropicale",
      "Reporting Terrain"
    ],
    tools: [
      "ODK Collect",
      "QGIS (Basique)",
      "DJI Flight App",
      "WhatsApp Business",
      "Excel / GSheets"
    ],
    benefits: [
      "Véhicule de fonction (Moto Cross / 4x4)",
      "Tablette durcie fournie",
      "Primes sur objectifs de déploiement",
      "Impact social direct et visible"
    ]
  },
  {
    id: "JOB-BACKEND",
    title: "Developpeur Backend Django",
    department: "Engineering - LocalPro",
    location: "Saint-Louis / Remote",
    type: "Full-time",
    experienceLevel: "Senior (4+ ans)",
    description: "Architecturer l'API robuste et scalable qui propulse notre écosystème SaaS.",
    mission: "Vous serez le moteur de LocalPro.AI. Vous concevrez et maintiendrez des API RESTful performantes, gérerez des bases de données PostgreSQL massives et intégrerez des modèles d'IA via des queues asynchrones. La sécurité, la scalabilité et l'optimisation des coûts cloud sont vos priorités absolues.",
    responsibilities: [
      "Développer et maintenir des API REST robustes avec Python, Django et Django Rest Framework (DRF).",
      "Optimiser les requêtes PostgreSQL complexes et la structure de la base de données (Indexing, Partitioning).",
      "Mettre en place des tâches asynchrones (Background jobs) avec Celery et Redis.",
      "Intégrer les API tierces critiques : WhatsApp Business API (Meta), SMS Gateways, Payment Providers.",
      "Assurer la couverture de tests (Pytest), la documentation (Swagger) et la CI/CD (GitHub Actions)."
    ],
    requirements: [
      "Expertise approfondie en Python 3.x et Django Framework (+4 ans)",
      "Maîtrise de Docker, Docker Compose et des concepts Kubernetes",
      "Expérience solide avec PostgreSQL, Redis et l'optimisation SQL",
      "Connaissance des principes SOLID, Clean Architecture et 12-Factor App",
      "Expérience avec un Cloud Provider (AWS, GCP ou DigitalOcean)"
    ],
    skills: [
      "API Design",
      "Database Optimization",
      "System Architecture",
      "Cloud Security",
      "DevOps Basics"
    ],
    tools: [
      "Django / DRF",
      "PostgreSQL",
      "Docker / K8s",
      "Celery / Redis",
      "GitHub Actions"
    ],
    benefits: [
      "Salaire compétitif selon profil",
      "Stock Options (BSPCE) possibles",
      "Hardware haut de gamme (Mac/Linux)",
      "Hackathons internes trimestriels"
    ]
  }
];

interface CareersProps {
  onJobApply?: (job: JobPosting) => void;
  onSpontaneousApply?: () => void;
  onPartnerRequest?: () => void;
}

export const Careers: React.FC<CareersProps> = ({ onJobApply, onSpontaneousApply, onPartnerRequest }) => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'partners'>('jobs');
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} onApply={(job) => onJobApply?.(job)} />;
  }

  return (
    <section id="careers" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-ecliptix-orange/30 px-4 py-1 rounded-full bg-ecliptix-orange/5 backdrop-blur-md mb-6 animate-pulse-slow">
             <Rocket size={14} className="text-ecliptix-orange" />
             <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Recrutement & Alliances</span>
           </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Rejoignez l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-ecliptix-orange to-white">Équipage</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Ecliptix est plus qu'une entreprise, c'est une mission. Nous cherchons des explorateurs prêts à repousser les frontières de l'IA en Afrique.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-900/50 p-1 rounded-lg border border-white/10">
            <button 
              onClick={() => setActiveTab('jobs')}
              className={`px-8 py-3 rounded-md text-sm font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${activeTab === 'jobs' ? 'bg-ecliptix-orange text-black font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              <Briefcase size={16} /> Offres de Mission
            </button>
            <button 
              onClick={() => setActiveTab('partners')}
              className={`px-8 py-3 rounded-md text-sm font-mono uppercase tracking-wider transition-all flex items-center gap-2 ${activeTab === 'partners' ? 'bg-ecliptix-orange text-black font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              <Handshake size={16} /> Partenariats
            </button>
          </div>
        </div>

        {activeTab === 'jobs' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-[fadeIn_0.5s_ease-out]">
            {/* Job Listings */}
            <div className="lg:col-span-2 space-y-4">
              {jobs.map((job) => (
                <div 
                  key={job.id} 
                  onClick={() => setSelectedJob(job)}
                  className="group relative bg-slate-900/40 border border-white/10 p-6 hover:border-ecliptix-orange/50 transition-all cursor-pointer overflow-hidden rounded-lg"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-ecliptix-orange transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-ecliptix-orange transition-colors flex items-center gap-2">
                        {job.title} <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-ecliptix-orange" />
                      </h3>
                      <div className="flex gap-3 mt-2 text-xs font-mono text-slate-500 uppercase">
                        <span className="flex items-center gap-1"><Briefcase size={12} /> {job.department}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-slate-300">{job.type}</span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full border border-slate-700">{skill}</span>
                    ))}
                    <span className="text-[10px] px-2 py-0.5 bg-slate-900 text-slate-500 rounded-full border border-slate-800">+{job.skills.length - 3} more</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Spontaneous Application */}
            <div className="hud-panel p-6 bg-slate-900/60 h-fit">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <UploadCloud className="text-ecliptix-orange" size={20} />
                Candidature Spontanée
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Aucune mission ne correspond à votre profil ? Envoyez vos coordonnées, nous scannons la galaxie en permanence.
              </p>
              
              <button 
                onClick={onSpontaneousApply}
                className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                Envoyer Profil <Send size={14} />
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-[fadeIn_0.5s_ease-out]">
            
            {/* Partners Hero */}
            <div className="hud-panel p-8 md:p-12 border-t-4 border-t-ecliptix-orange mb-12">
               <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="flex-1">
                   <h3 className="text-3xl font-bold text-white mb-6">Protocole d'Alliance</h3>
                   <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                     Ecliptix construit un écosystème ouvert. Nous collaborons avec des entités visionnaires pour accélérer le déploiement de l'IA en Afrique de l'Ouest.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 border border-white/5 rounded">
                         <Cpu className="text-ecliptix-orange mb-2" />
                         <h4 className="font-bold text-white text-sm uppercase mb-1">Partenaire Tech</h4>
                         <p className="text-xs text-slate-500">Intégration API, Co-R&D, Infrastructure Cloud.</p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded">
                         <Globe className="text-blue-400 mb-2" />
                         <h4 className="font-bold text-white text-sm uppercase mb-1">Partenaire ONG</h4>
                         <p className="text-xs text-slate-500">Déploiement terrain, Impact Social, Agriculture.</p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded">
                         <Layout className="text-green-400 mb-2" />
                         <h4 className="font-bold text-white text-sm uppercase mb-1">Commercial</h4>
                         <p className="text-xs text-slate-500">Distribution, Revente White-label, Apporteur d'affaires.</p>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/5 rounded">
                         <Shield className="text-purple-400 mb-2" />
                         <h4 className="font-bold text-white text-sm uppercase mb-1">Académique</h4>
                         <p className="text-xs text-slate-500">Recherche conjointe, Stages, Formation.</p>
                      </div>
                   </div>
                 </div>

                 <div className="flex-1 w-full bg-slate-900/50 p-6 rounded-xl border border-white/10 text-center">
                    <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Initier une collaboration</h4>
                    <p className="text-slate-400 text-sm mb-6">
                      Vous représentez une organisation et souhaitez créer des synergies ? Ouvrons un canal sécurisé.
                    </p>
                    <button 
                      onClick={onPartnerRequest}
                      className="w-full py-4 bg-ecliptix-orange hover:bg-orange-600 text-black font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      Transmettre Proposition <Send size={14} />
                    </button>
                 </div>
               </div>
            </div>

            {/* Quote / Vision */}
            <div className="text-center max-w-2xl mx-auto">
               <p className="text-slate-500 italic text-sm">
                 "Seul on va plus vite, ensemble on va plus loin. Ecliptix ne cherche pas des fournisseurs, mais des alliés pour la transformation digitale de l'Afrique."
               </p>
               <div className="w-12 h-0.5 bg-ecliptix-orange mx-auto mt-4"></div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
