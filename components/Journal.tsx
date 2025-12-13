
import React from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, Hash, Tag } from 'lucide-react';
import { LogEntry } from '../types';

// Content data with HTML strings for rich text formatting
export const logs: LogEntry[] = [
  {
    id: "LOG-004",
    date: "10.12.2025",
    title: "Immersion en Guinée : Retour sur un Bootcamp d’IA qui a transformé ma vision",
    category: "Mission",
    excerpt: "Récit d'une aventure panafricaine humaine et technologique, propulsée par UniPod et le PNUD.",
    readTime: "15 min read",
    image: "https://th.bing.com/th?id=OIF.Bu%2Bs8ZtbHehJjTj%2FpiYDvw&cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    author: "Thierno Bocar DIENG",
    role: "CEO & Founder",
    location: "Conakry / Mamou, Guinée",
    clearanceLevel: "Niveau 1 - Public",
    tags: ["Bootcamp", "PanAfrican", "Innovation", "Timbuktoo", "UniPod"],
    content: `
      <div class="mb-12 p-8 bg-gradient-to-r from-slate-900 to-black border-l-4 border-ecliptix-orange rounded-r-xl shadow-2xl">
         <p class="text-xl md:text-2xl text-white font-light italic leading-relaxed">
           "Il existe des expériences qui nous instruisent. D’autres qui nous transforment. <br/>
           <span class="text-ecliptix-orange font-normal">Et il y a celles qui redéfinissent notre mission en tant qu’innovateurs africains."</span>
         </p>
      </div>

      <div class="mb-12 text-lg text-slate-300 leading-loose">
        <p class="mb-6">
          Du <strong>9 novembre au 5 décembre 2025</strong>, j’ai eu l’immense privilège de représenter le Sénégal au <em>Bootcamp Régional d’Intelligence Artificielle</em>, organisé par <strong>UniPod Guinée</strong>, soutenu par le <strong>PNUD</strong> et propulsé par l’initiative <strong>Timbuktoo</strong>.
        </p>
        <p>
          Un programme unique rassemblant des jeunes innovateurs venus de neuf pays africains : <span class="text-white font-bold">Guinée, Sénégal, Gabon, Mali, Mauritanie, Bénin, Togo, Tchad et Rwanda</span>. Ce mois fut une aventure immersive, humaine, technologique et panafricaine… dont je me souviendrai toute ma vie.
        </p>
      </div>

      <div class="my-16">
        <h3 class="text-3xl font-bold text-white mb-8 flex items-center gap-4 border-b border-white/10 pb-4">
          <span class="text-4xl">🇬🇳</span> La Guinée : un accueil d’une chaleur incomparable
        </h3>
        <p class="text-slate-400 mb-8 leading-relaxed">
          Dès notre arrivée, nous avons été frappés par l’hospitalité exceptionnelle du peuple guinéen. Chaque geste, chaque sourire, chaque échange nous a enveloppés d’une bienveillance rare.
        </p>
        <div class="bg-ecliptix-orange/5 p-6 rounded-xl border border-ecliptix-orange/20 relative">
           <div class="text-ecliptix-orange text-6xl absolute -top-4 -left-2 font-serif opacity-20">"</div>
           <p class="text-slate-300 italic relative z-10 pl-6">
             Je tiens à exprimer toute ma gratitude envers les Guinéens qui nous ont accueillis avec noblesse et respect. Grâce à vous, la Guinée n’a pas été un simple pays d’accueil : elle est devenue un foyer temporaire où nous nous sommes sentis profondément chez nous.
           </p>
        </div>
      </div>

      <div class="my-16">
        <h3 class="text-3xl font-bold text-white mb-8 flex items-center gap-4 border-b border-white/10 pb-4">
          <span class="text-4xl">🧪</span> Deux semaines intenses à Mamou
        </h3>
        <p class="text-slate-400 mb-8 leading-relaxed">
          L’un des moments les plus marquants de cette aventure fut notre déplacement à Mamou, au sein des laboratoires d’innovation d’UniPod. Pendant deux semaines, nous avons travaillé dans des conditions optimales pour :
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
           <div class="bg-slate-900 p-4 rounded-lg border border-white/5 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1</div>
              <span class="text-slate-300">Prototyper nos solutions</span>
           </div>
           <div class="bg-slate-900 p-4 rounded-lg border border-white/5 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">2</div>
              <span class="text-slate-300">Tester nos hypothèses</span>
           </div>
           <div class="bg-slate-900 p-4 rounded-lg border border-white/5 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">3</div>
              <span class="text-slate-300">Améliorer la viabilité des modèles</span>
           </div>
           <div class="bg-slate-900 p-4 rounded-lg border border-white/5 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">4</div>
              <span class="text-slate-300">Collaborer avec des experts</span>
           </div>
        </div>
        
        <p class="text-slate-400 leading-relaxed">
          Pour moi et pour <strong>PEST AI</strong>, ce fut un tournant majeur. Nous avons pu affiner notre système, confronter nos idées à d’autres perspectives et obtenir des feedbacks qui serviront durablement au développement du produit. Ces moments passés à Mamou resteront gravés comme une étape fondatrice.
        </p>
      </div>

      <div class="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-white/10 mb-16">
         <h3 class="text-2xl font-bold text-white mb-4">📍 Transform Africa Summit : Une vitrine continentale</h3>
         <p class="text-slate-400 mb-6 leading-relaxed">
           Du 12 au 14 novembre, j’ai également eu la chance de participer au <strong>Transform Africa Summit (TAS)</strong>. Un événement de grande envergure réunissant leaders, décideurs et entrepreneurs.
         </p>
         <div class="flex items-center gap-4">
            <div class="h-px bg-white/20 flex-1"></div>
            <span class="text-white font-bold text-center uppercase tracking-widest text-sm">L’Afrique est en mouvement — et elle construit elle-même son avenir numérique.</span>
            <div class="h-px bg-white/20 flex-1"></div>
         </div>
      </div>

      <div class="my-16">
         <h3 class="text-3xl font-bold text-white mb-6">🌾 PEST AI : Pour l'Afrique</h3>
         <p class="text-slate-400 leading-relaxed mb-6">
           Durant ce Bootcamp, j’ai présenté PEST AI. Le programme m’a permis de renforcer la pertinence technique du projet et de valider les besoins dans différents pays. Face aux défis agricoles communs, j’ai compris une chose : <strong>PEST AI n’est pas seulement une solution sénégalaise — c’est un outil pour toute l’Afrique.</strong>
         </p>
      </div>

      <div class="my-16">
         <div class="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div class="p-6 bg-white/5 border-b border-white/10">
               <h3 class="text-xl font-bold text-white flex items-center gap-2">
                 <span class="text-2xl">🇸🇳</span> Ma reconnaissance envers la délégation sénégalaise
               </h3>
            </div>
            <div class="p-8">
               <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div class="text-center p-4 bg-black/40 rounded-lg border border-white/5 hover:border-ecliptix-orange/30 transition-colors">
                     <div class="w-12 h-12 mx-auto bg-white/10 rounded-full mb-3 flex items-center justify-center text-xl">🇸🇳</div>
                     <div class="font-bold text-white mb-1">Cira Sow Sakina</div>
                     <div class="text-[10px] text-slate-500 uppercase">Innovatrice</div>
                  </div>
                  <div class="text-center p-4 bg-black/40 rounded-lg border border-white/5 hover:border-ecliptix-orange/30 transition-colors">
                     <div class="w-12 h-12 mx-auto bg-white/10 rounded-full mb-3 flex items-center justify-center text-xl">🇸🇳</div>
                     <div class="font-bold text-white mb-1">Cheikh Omar Thiam</div>
                     <div class="text-[10px] text-slate-500 uppercase">Innovateur</div>
                  </div>
                  <div class="text-center p-4 bg-black/40 rounded-lg border border-white/5 hover:border-ecliptix-orange/30 transition-colors">
                     <div class="w-12 h-12 mx-auto bg-white/10 rounded-full mb-3 flex items-center justify-center text-xl">🇸🇳</div>
                     <div class="font-bold text-white mb-1 text-xs">Cheikh A. T. Ndiaye</div>
                     <div class="text-[10px] text-slate-500 uppercase">Innovateur</div>
                  </div>
                  <div class="text-center p-4 bg-black/40 rounded-lg border border-white/5 hover:border-ecliptix-orange/30 transition-colors">
                     <div class="w-12 h-12 mx-auto bg-white/10 rounded-full mb-3 flex items-center justify-center text-xl">🇸🇳</div>
                     <div class="font-bold text-white mb-1">Laho Sow</div>
                     <div class="text-[10px] text-slate-500 uppercase">Innovatrice</div>
                  </div>
               </div>
               <p class="text-center text-slate-400 italic text-sm">
                 "Vous avez porté haut les couleurs du Sénégal avec vos projets brillants, votre détermination et votre fraternité. Merci pour votre soutien et votre énergie positive."
               </p>
            </div>
         </div>
      </div>

      <div class="my-16">
         <h3 class="text-2xl font-bold text-white mb-8">🤝 Fraternité Panafricaine</h3>
         <p class="text-slate-400 mb-6">À vous, innovateurs du <strong>Rwanda, Tchad, Bénin, Togo, Guinée, Gabon, Mali, Mauritanie</strong> : Merci. Grâce à vous, je me suis senti profondément africain. Votre diversité et votre force collective m'ont inspiré.</p>
         <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇷🇼 Rwanda</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇹🇩 Tchad</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇧🇯 Bénin</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇹🇬 Togo</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇬🇳 Guinée</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇬🇦 Gabon</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇲🇱 Mali</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">🇲🇷 Mauritanie</span>
         </div>
      </div>

      <div class="my-16 space-y-8">
         <h3 class="text-3xl font-bold text-white mb-8 text-center uppercase tracking-widest border-b border-white/10 pb-4">Tableau d'Honneur & Remerciements</h3>
         
         <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-b from-slate-800 to-black p-6 rounded-xl border border-white/10 text-center hover:border-ecliptix-orange/50 transition-colors group">
               <div class="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
               <h4 class="text-ecliptix-orange font-bold text-sm uppercase mb-2">Mme Mia Kaba Condé</h4>
               <p class="text-xs text-slate-400 leading-relaxed">
                 Merci pour votre disponibilité, votre bienveillance et votre dévouement tout au long du programme.
               </p>
            </div>
            <div class="bg-gradient-to-b from-slate-800 to-black p-6 rounded-xl border border-white/10 text-center hover:border-ecliptix-orange/50 transition-colors group">
               <div class="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
               <h4 class="text-ecliptix-orange font-bold text-sm uppercase mb-2">M. José Ndione</h4>
               <p class="text-xs text-slate-400 leading-relaxed">
                 Gratitude sincère. Depuis le Sénégal jusqu’à la Guinée, vous nous avez guidés et orientés.
               </p>
            </div>
            <div class="bg-gradient-to-b from-slate-800 to-black p-6 rounded-xl border border-white/10 text-center hover:border-ecliptix-orange/50 transition-colors group">
               <div class="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
               <h4 class="text-ecliptix-orange font-bold text-sm uppercase mb-2">M. Moussa Bangoura</h4>
               <p class="text-xs text-slate-400 leading-relaxed">
                 Un facilitateur exemplaire et un véritable pilier pour toute l’équipe. Merci pour vos conseils et votre patience.
               </p>
            </div>
         </div>

         <!-- Points Focaux & Intervenants -->
         <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div class="bg-slate-900/50 p-8 rounded-xl border-l-4 border-yellow-500 hover:bg-slate-800 transition-colors">
               <h4 class="text-white font-bold mb-4 flex items-center gap-3 text-lg">
                  <span class="text-2xl">💡</span> Aux Points Focaux
               </h4>
               <p class="text-sm text-slate-400 leading-relaxed italic">
                 "À vous qui avez partagé votre expertise technique sans réserve et remonté notre moral dans les moments de doute : vous avez été les gardiens de notre flamme. Merci d'avoir cru en nous quand la fatigue se faisait sentir et de nous avoir poussés à l'excellence."
               </p>
            </div>

            <div class="bg-slate-900/50 p-8 rounded-xl border-l-4 border-blue-500 hover:bg-slate-800 transition-colors">
               <h4 class="text-white font-bold mb-4 flex items-center gap-3 text-lg">
                  <span class="text-2xl">🏛️</span> Aux Intervenants & Officiels
               </h4>
               <p class="text-sm text-slate-400 leading-relaxed italic">
                 "Merci d'avoir suspendu vos activités stratégiques pour venir à notre rencontre. Votre humilité et votre soutien nous ont honorés. En venant nous renforcer, vous nous avez prouvé que les décideurs sont prêts à accompagner la jeunesse innovante."
               </p>
            </div>
         </div>

         <div class="bg-slate-900/50 p-8 rounded-xl border border-white/10">
            <h4 class="text-white font-bold mb-6 flex items-center gap-2"><span class="text-xl">🙏</span> Reconnaissance Institutionnelle</h4>
            <div class="space-y-4 text-sm text-slate-400">
               <div class="flex items-start gap-4 p-3 bg-black/20 rounded-lg">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                     <strong class="text-blue-400 block mb-1">Au PNUD</strong>
                     Merci pour votre engagement constant envers la jeunesse africaine et pour croire en notre capacité à transformer le continent.
                  </div>
               </div>
               <div class="flex items-start gap-4 p-3 bg-black/20 rounded-lg">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                     <strong class="text-green-400 block mb-1">À UniPod Guinée</strong>
                     Merci pour l'organisation impeccable, les infrastructures mises à notre disposition, votre accompagnement et votre accueil chaleureux.
                  </div>
               </div>
               <div class="flex items-start gap-4 p-3 bg-black/20 rounded-lg">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                     <strong class="text-purple-400 block mb-1">À Timbuktoo</strong>
                     Merci de propulser les initiatives africaines et de créer des passerelles entre les talents et les opportunités.
                  </div>
               </div>
            </div>
            <div class="mt-6 pt-6 border-t border-white/10 text-center">
               <p class="text-slate-300 italic">"À tous les autres facilitateurs et mentors de chaque pays : votre travail, votre soutien et votre engagement ont été essentiels. Merci pour votre professionnalisme."</p>
            </div>
         </div>
      </div>

      <div class="text-center py-12">
         <h3 class="text-3xl font-bold text-white mb-6">🚀 L’histoire continue…</h3>
         <p class="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
           Ce Bootcamp m’a apporté une vision plus large, des compétences renforcées, un réseau continental puissant, et une motivation décuplée pour faire grandir Ecliptix et PEST AI.
         </p>
         <div class="inline-block border-b-2 border-ecliptix-orange pb-2">
            <span class="text-xl text-white font-bold uppercase tracking-widest">L’Afrique avance, et nous avançons avec elle.</span>
         </div>
      </div>
    `
  },
  {
    id: "LOG-001",
    date: "24.10.2025",
    title: "Mission PESTFLY : Succès opérationnel en zone sahélienne",
    category: "Tech",
    excerpt: "Premier déploiement à grande échelle de notre flotte de drones autonomes. Analyse multispectrale de 500 hectares et réduction de 40% des intrants chimiques.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
    author: "Cmdt. Fallou Diop",
    role: "Head of Agritech Ops",
    location: "Richard-Toll, Sénégal",
    clearanceLevel: "Niveau 2 - Technique",
    tags: ["Drone", "Agriculture", "Sahel", "Success Story"],
    content: `
      <h3 class="text-2xl font-bold text-white mb-4">Initialisation de la Mission</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">
        À 06h00 Zulu, l'escadron Alpha de nos unités <strong>PESTFLY</strong> a décollé depuis notre base avancée de Richard-Toll. L'objectif était clair : scanner une zone de 500 hectares de cultures rizicoles suspectée d'être infiltrée par une colonie de tisserins et de ravageurs fongiques précoces.
      </p>
      
      <div class="my-8 p-6 bg-slate-900 border-l-4 border-green-500 rounded-r-lg">
         <h4 class="text-green-400 font-bold uppercase text-xs mb-2">Résultat Télémétrie</h4>
         <p class="text-white text-lg">Cartographie complète en <strong>3 heures et 42 minutes</strong>.</p>
         <p class="text-slate-400 text-sm">Contre 4 jours pour une inspection humaine traditionnelle.</p>
      </div>

      <h3 class="text-2xl font-bold text-white mb-4">Impact Agronomique</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">
        Une fois les données traitées par le Core Ecliptix, nous avons généré une carte de prescription variable (VRA). Les agriculteurs ont pu traiter uniquement les zones infectées.
      </p>
      <ul class="space-y-4 mb-8">
         <li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 bg-ecliptix-orange rounded-full"></span> 40% d'économie sur les pesticides</li>
         <li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 bg-ecliptix-orange rounded-full"></span> Protection des nappes phréatiques</li>
         <li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 bg-ecliptix-orange rounded-full"></span> Augmentation prévisionnelle du rendement de 15%</li>
      </ul>
    `
  },
  {
    id: "LOG-002",
    date: "12.11.2025",
    title: "Souveraineté Numérique : Le projet Neural Roots",
    category: "Vision",
    excerpt: "Pourquoi l'Afrique doit posséder ses propres modèles de langage (LLM). Lancement de notre initiative pour collecter 50TB de données en langues locales.",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Aminata Ly",
    role: "Chief AI Scientist",
    location: "Ecliptix HQ",
    clearanceLevel: "Niveau 5 - Stratégique",
    tags: ["Souveraineté", "LLM", "Wolof", "Infrastructure"],
    content: `
      <h3 class="text-2xl font-bold text-white mb-4">La Colonisation des Données</h3>
      <p class="mb-6 text-slate-300 leading-relaxed">
        Nous vivons un tournant historique. Alors que la Silicon Valley déploie des modèles d'IA de plus en plus puissants, une question cruciale se pose : allons-nous être de simples consommateurs, ou allons-nous être les architectes de notre futur cognitif ?
      </p>
      <p class="mb-6 text-slate-300 leading-relaxed">
        Utiliser un modèle entraîné exclusivement sur des données occidentales crée un biais cognitif inhérent. Ces modèles "hallucinent" sur nos réalités culturelles et ignorent nos langues.
      </p>

      <div class="bg-black border border-white/10 p-8 rounded-xl my-8 text-center">
         <h4 class="text-white font-bold text-2xl mb-2">Initiative Neural Roots</h4>
         <p class="text-ecliptix-orange font-mono uppercase tracking-widest mb-6">Infrastructure de Données Souveraine</p>
         <div class="grid grid-cols-3 gap-4 text-sm text-slate-400">
            <div>
               <div class="font-bold text-white text-xl">50 TB</div>
               <div>Dataset Audio/Texte</div>
            </div>
            <div>
               <div class="font-bold text-white text-xl">5</div>
               <div>Langues Cibles</div>
            </div>
            <div>
               <div class="font-bold text-white text-xl">H100</div>
               <div>Cluster GPU Local</div>
            </div>
         </div>
      </div>

      <p class="text-slate-300 leading-relaxed">
        C'est notre vision chez Ecliptix. Coder notre futur, avec nos règles, nos langues et nos valeurs.
      </p>
    `
  }
];

interface JournalProps {
  onBack: () => void;
}

export const Journal: React.FC<JournalProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 relative z-10 animate-[fadeIn_0.5s_ease-in-out]">
      
      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-ecliptix-orange transition-colors font-mono text-xs uppercase tracking-widest mb-8"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au Pont Principal
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-ecliptix-orange/30 px-4 py-1 rounded-full bg-ecliptix-orange/5 backdrop-blur-md mb-4">
              <Hash size={14} className="text-ecliptix-orange" />
              <span className="text-[10px] font-mono text-ecliptix-orange uppercase tracking-[0.3em]">Archives Stellaires</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Journal de Bord</h1>
            <p className="text-slate-400 font-light max-w-2xl">
              Rapports de missions, analyses stratégiques et chroniques de nos explorations.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Article (First one) */}
      <div className="max-w-7xl mx-auto mb-16">
         <div 
           onClick={() => window.location.hash = `#/journal/log/${logs[0].id}`}
           className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-slate-900 shadow-2xl"
         >
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="relative h-96 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-ecliptix-orange/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={logs[0].image} 
                    alt={logs[0].title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 z-20">
                     <span className="px-4 py-1.5 bg-ecliptix-orange text-black font-bold text-xs uppercase tracking-widest rounded shadow-lg">
                        À la Une
                     </span>
                  </div>
               </div>
               <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                     <Tag size={100} className="text-white" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                     <span className="flex items-center gap-2"><Calendar size={14}/> {logs[0].date}</span>
                     <span className="flex items-center gap-2"><Clock size={14}/> {logs[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-ecliptix-orange transition-colors">
                     {logs[0].title}
                  </h2>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 line-clamp-3">
                     {logs[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                     <span className="text-xs font-bold text-white uppercase tracking-widest border-b border-ecliptix-orange pb-1 group-hover:border-white transition-colors">
                        Lire le rapport complet
                     </span>
                     <ArrowRight size={16} className="text-ecliptix-orange group-hover:translate-x-2 transition-transform" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Other Logs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {logs.slice(1).map((log) => (
          <article 
            key={log.id} 
            onClick={() => window.location.hash = `#/journal/log/${log.id}`}
            className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-ecliptix-orange/50 transition-all duration-300 flex flex-col h-full cursor-pointer hover:bg-slate-900"
          >
            
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              
              <img 
                src={log.image} 
                alt={log.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/80 backdrop-blur border border-white/20 rounded text-[10px] font-mono text-white uppercase tracking-wider">
                  {log.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-slate-500 uppercase">
                <span className="flex items-center gap-1"><Calendar size={12} /> {log.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {log.readTime}</span>
              </div>

              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-ecliptix-orange transition-colors line-clamp-2">
                {log.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {log.excerpt}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">
                <span>Accéder aux données</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform text-ecliptix-orange" />
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
