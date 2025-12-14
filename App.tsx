
import React, { useRef, useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services, servicesData } from './components/Services';
import { Hub, productsData } from './components/Hub';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Careers, jobs } from './components/Careers';
import { Process, processSteps } from './components/Process';
import { ServiceDetail } from './components/ServiceDetail';
import { ProductDetail } from './components/ProductDetail';
import { ModuleDetail } from './components/ModuleDetail';
import { Journal, logs } from './components/Journal';
import { Podcast } from './components/Podcast';
import { Partners } from './components/Partners';
import { Team } from './components/Team';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Academy, courses } from './components/Academy';
import { AcademyPreview } from './components/AcademyPreview';
import { DemoRequest } from './components/DemoRequest';
import { JobApplication } from './components/JobApplication';
import { AcademyRegistration } from './components/AcademyRegistration';
import { PartnershipRequest } from './components/PartnershipRequest';
import { SuccessPage } from './components/SuccessPage';
import { NeuralMapping } from './components/NeuralMapping';
import { QuantumEncryption } from './components/QuantumEncryption';
import { DeepLearningPage } from './components/DeepLearningPage';
import { SwarmIntelligence } from './components/SwarmIntelligence';
import { ZeroKnowledge } from './components/ZeroKnowledge';
import { Newsletter } from './components/Newsletter';
import { ProcessDetail } from './components/ProcessDetail';
import { LogDetail } from './components/LogDetail';
import { CourseDetail } from './components/CourseDetail';
import { JobDetail } from './components/JobDetail';
import { Facebook, Linkedin, Menu, X, Radio } from 'lucide-react';
import { ServiceItem, ProductItem, ProductModule, JobPosting, Course, ProcessStep, LogEntry } from './types';

// Star generator component
const StarField = () => {
  const [stars, setStars] = useState<Array<{top: string, left: string, size: number, opacity: number, delay: string}>>([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        delay: `${Math.random() * 5}s`
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, i) => (
        <div 
          key={i}
          className="star absolute bg-white rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('');

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedModule, setSelectedModule] = useState<ProductModule | null>(null);
  const [demoRequestProduct, setDemoRequestProduct] = useState<ProductItem | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobPosting | null | 'spontaneous'>(null);
  const [registeringCourse, setRegisteringCourse] = useState<Course | null>(null);
  const [selectedProcessStep, setSelectedProcessStep] = useState<ProcessStep | null>(null);
  const [showPartnershipRequest, setShowPartnershipRequest] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  
  // Page States
  const [showCareers, setShowCareers] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showPodcast, setShowPodcast] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAcademy, setShowAcademy] = useState(false);
  const [showHub, setShowHub] = useState(false);
  
  // Detail States (New)
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  
  // Tech pages state
  const [showNeural, setShowNeural] = useState(false);
  const [showQuantum, setShowQuantum] = useState(false);
  const [showDeep, setShowDeep] = useState(false);
  const [showSwarm, setShowSwarm] = useState(false);
  const [showZero, setShowZero] = useState(false);

  const resetAllViews = () => {
    setSelectedService(null);
    setSelectedProduct(null);
    setSelectedModule(null);
    setDemoRequestProduct(null);
    setApplyingJob(null);
    setRegisteringCourse(null);
    setSelectedProcessStep(null);
    setShowPartnershipRequest(false);
    setShowSuccessPage(false);
    setShowCareers(false);
    setShowJournal(false);
    setShowPodcast(false);
    setShowTeam(false);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowAcademy(false);
    setShowHub(false);
    setShowNeural(false);
    setShowQuantum(false);
    setShowDeep(false);
    setShowSwarm(false);
    setShowZero(false);
    setSelectedLog(null);
    setSelectedCourse(null);
    setSelectedJob(null);
    setMobileMenuOpen(false);
  };

  // --- AGGRESSIVE SCROLL TO TOP ON VIEW CHANGE ---
  // This hook ensures that whenever any view state changes, the window scrolls to top immediately.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [
    selectedService,
    selectedProduct,
    selectedModule,
    demoRequestProduct,
    applyingJob,
    registeringCourse,
    selectedProcessStep,
    showPartnershipRequest,
    showSuccessPage,
    selectedLog,
    selectedCourse,
    selectedJob,
    showCareers,
    showJournal,
    showPodcast,
    showTeam,
    showPrivacy,
    showTerms,
    showAcademy,
    showHub,
    showNeural,
    showQuantum,
    showDeep,
    showSwarm,
    showZero
  ]);

  // --- ROUTER LOGIC ---
  useEffect(() => {
    // 1. DISABLE BROWSER SCROLL RESTORATION
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Default / Landing
      if (!hash || hash === '#/') {
        resetAllViews();
        setActiveNav('');
        // Instant Scroll
        window.scrollTo(0, 0);
        return;
      }

      // Sections
      if (hash.startsWith('#/section/')) {
        const section = hash.split('/')[2];
        resetAllViews();
        setActiveNav(section);
        // Scroll to section with a slight delay to allow rendering
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
        return;
      }

      resetAllViews(); // Clear previous view before setting new one

      // Pages & Details
      if (hash === '#/academy') {
        setShowAcademy(true);
        setActiveNav('academy');
      } else if (hash.startsWith('#/academy/course/')) {
        const id = hash.split('/')[3];
        const course = courses.find(c => c.id === id);
        if (course) setSelectedCourse(course);
      } else if (hash === '#/journal') {
        setShowJournal(true);
        setActiveNav('journal');
      } else if (hash.startsWith('#/journal/log/')) {
        const id = hash.split('/')[3];
        const log = logs.find(l => l.id === id);
        if (log) setSelectedLog(log);
      } else if (hash === '#/podcast') {
        setShowPodcast(true);
        setActiveNav('podcast');
      } else if (hash === '#/careers') {
        setShowCareers(true);
        setActiveNav('careers');
      } else if (hash.startsWith('#/careers/job/')) {
        const id = hash.split('/')[3];
        const job = jobs.find(j => j.id === id);
        if (job) setSelectedJob(job);
      } else if (hash === '#/hub') {
        setShowHub(true);
        setActiveNav('hub');
      } else if (hash.startsWith('#/product/')) {
        const id = hash.split('/')[2];
        const product = productsData.find(p => p.id === id);
        if (product) setSelectedProduct(product);
      } else if (hash.startsWith('#/service/')) {
        const id = hash.split('/')[2];
        const service = servicesData.find(s => s.id === id);
        if (service) setSelectedService(service);
      } else if (hash.startsWith('#/process/')) {
        const id = hash.split('/')[2];
        const step = processSteps.find(s => s.id === id);
        if (step) setSelectedProcessStep(step);
      } else if (hash === '#/team') {
        setShowTeam(true);
        setActiveNav('team');
      } else if (hash === '#/privacy') {
        setShowPrivacy(true);
      } else if (hash === '#/terms') {
        setShowTerms(true);
      } else if (hash === '#/tech/neural') {
        setShowNeural(true);
      } else if (hash === '#/tech/quantum') {
        setShowQuantum(true);
      } else if (hash === '#/tech/deep') {
        setShowDeep(true);
      } else if (hash === '#/tech/swarm') {
        setShowSwarm(true);
      } else if (hash === '#/tech/zero') {
        setShowZero(true);
      }

      // 2. AGGRESSIVE SCROLL TO TOP
      // Scroll immediately
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      // Scroll again after a tiny delay to allow React to render the new component
      // This beats the browser's attempt to restore scroll position at bottom
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 10);

      // Final check for slower devices
      setTimeout(() => {
        if (window.scrollY > 0) window.scrollTo(0, 0);
      }, 50);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Trigger initial load if hash exists
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (id: string) => {
    window.location.hash = `#/section/${id}`;
  };

  const handleBackToOrbit = () => {
    window.location.hash = '#/';
  };

  const handleBackToProduct = () => {
    if (selectedProduct) {
       setSelectedModule(null);
       window.scrollTo(0, 0);
    } else {
       window.location.hash = '#/hub';
    }
  };

  const handleRequestDemo = (product: ProductItem) => {
    setDemoRequestProduct(product);
    window.scrollTo(0, 0);
  };

  const handleJobApplication = (job: JobPosting) => {
    setApplyingJob(job);
    window.scrollTo(0, 0);
  };

  const handleSpontaneousApplication = () => {
    setApplyingJob('spontaneous');
    window.scrollTo(0, 0);
  };

  const handleCourseRegistration = (course: Course) => {
    setRegisteringCourse(course);
    window.scrollTo(0, 0);
  };

  const handlePartnershipRequest = () => {
    setShowPartnershipRequest(true);
    window.scrollTo(0, 0);
  };

  const handleSubmitSuccess = () => {
    // We keep success page local state to not pollute history or make it shareable
    setDemoRequestProduct(null);
    setApplyingJob(null);
    setRegisteringCourse(null);
    setShowPartnershipRequest(false);
    setShowSuccessPage(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-black selection:bg-ecliptix-orange selection:text-black">
      <StarField />
      <div className="scanlines"></div>

      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.location.hash = '#/'}>
              <Logo />
              <div className="hidden md:flex h-4 w-px bg-white/20 mx-2"></div>
              <span className="hidden md:block text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                Orbital Systems
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <button onClick={() => scrollToSection('hub')} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'hub' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                 <span className="relative z-10">Innovation Hub</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'hub' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => scrollToSection('services')} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'services' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                 <span className="relative z-10">Services</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => window.location.hash = '#/academy'} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'academy' ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'}`}>
                 <span className="relative z-10">Academy</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 transform transition-transform origin-right duration-500 ${activeNav === 'academy' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => scrollToSection('about')} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'about' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                 <span className="relative z-10">Mission</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => window.location.hash = '#/journal'} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'journal' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                 <span className="relative z-10">Journal</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'journal' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => window.location.hash = '#/podcast'} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'podcast' ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}>
                 <span className="relative z-10">Podcast</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 transform transition-transform origin-right duration-500 ${activeNav === 'podcast' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => window.location.hash = '#/team'} className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'team' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                 <span className="relative z-10">Team</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'team' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              <button onClick={() => window.location.hash = '#/careers'} className={`relative px-6 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors border rounded ml-2 ${activeNav === 'careers' ? 'bg-ecliptix-orange text-black border-ecliptix-orange' : 'text-ecliptix-orange hover:text-white border-ecliptix-orange/30 hover:bg-ecliptix-orange/10'}`}>
                Carrière
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 border border-white/20 rounded">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/10 absolute w-full backdrop-blur-xl">
            <div className="px-4 pt-4 pb-8 space-y-4 font-mono text-sm uppercase">
              <button onClick={() => scrollToSection('hub')} className="block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5">Innovation Hub</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5">Services</button>
              <button onClick={() => window.location.hash = '#/academy'} className="block w-full text-left px-4 py-3 border-l-2 border-purple-400 text-purple-400 hover:bg-white/5">Academy</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5">Mission</button>
              <button onClick={() => window.location.hash = '#/journal'} className="block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5">Journal</button>
              <button onClick={() => window.location.hash = '#/podcast'} className="block w-full text-left px-4 py-3 border-l-2 border-cyan-400 text-cyan-400 hover:bg-white/5">Podcast</button>
              <button onClick={() => window.location.hash = '#/team'} className="block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5">Team</button>
              <button onClick={() => window.location.hash = '#/careers'} className="block w-full text-left px-4 py-3 border-l-2 border-ecliptix-orange text-ecliptix-orange hover:bg-white/5">Carrière</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-500 hover:text-white hover:bg-white/5">Comm Link</button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        
        {/* VIEW ROUTING LOGIC */}
        {showSuccessPage ? (
          <SuccessPage onBackToHome={resetAllViews} />
        ) : demoRequestProduct ? (
          <DemoRequest 
            product={demoRequestProduct} 
            onBack={() => setDemoRequestProduct(null)} 
            onSubmitSuccess={handleSubmitSuccess}
          />
        ) : applyingJob ? (
          <JobApplication 
            job={applyingJob === 'spontaneous' ? null : applyingJob}
            onBack={() => setApplyingJob(null)}
            onSubmitSuccess={handleSubmitSuccess}
          />
        ) : registeringCourse ? (
          <AcademyRegistration 
             course={registeringCourse}
             onBack={() => setRegisteringCourse(null)}
             onSubmitSuccess={handleSubmitSuccess}
          />
        ) : showPartnershipRequest ? (
          <PartnershipRequest 
             onBack={() => setShowPartnershipRequest(false)}
             onSubmitSuccess={handleSubmitSuccess}
          />
        ) : selectedService ? (
          <ServiceDetail service={selectedService} onBack={handleBackToOrbit} onInitialize={handleSubmitSuccess} />
        ) : selectedModule && selectedProduct ? (
          <ModuleDetail 
            module={selectedModule} 
            productName={selectedProduct.title} 
            themeColor={selectedProduct.themeColor}
            onBack={handleBackToProduct} 
          />
        ) : selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToOrbit} 
            onModuleClick={(module) => setSelectedModule(module)}
            onRequestDemo={handleRequestDemo}
          />
        ) : selectedProcessStep ? (
          <ProcessDetail 
            step={selectedProcessStep}
            onBack={() => window.location.hash = '#/section/process'}
          />
        ) : selectedCourse ? (
          <CourseDetail 
            course={selectedCourse} 
            onBack={() => window.location.hash = '#/academy'} 
            onRegister={handleCourseRegistration}
          />
        ) : selectedJob ? (
          <JobDetail 
            job={selectedJob} 
            onBack={() => window.location.hash = '#/careers'} 
            onApply={handleJobApplication} 
          />
        ) : selectedLog ? (
          <LogDetail 
            entry={selectedLog} 
            onBack={() => window.location.hash = '#/journal'} 
          />
        ) : showCareers ? (
          <Careers 
             onJobApply={handleJobApplication} 
             onSpontaneousApply={handleSpontaneousApplication}
             onPartnerRequest={handlePartnershipRequest}
          />
        ) : showJournal ? (
          <Journal onBack={handleBackToOrbit} />
        ) : showPodcast ? (
          <Podcast onBack={handleBackToOrbit} />
        ) : showTeam ? (
          <Team onBack={handleBackToOrbit} />
        ) : showPrivacy ? (
          <PrivacyPolicy onBack={handleBackToOrbit} />
        ) : showTerms ? (
          <TermsOfService onBack={handleBackToOrbit} />
        ) : showAcademy ? (
          <Academy 
             onRegister={handleCourseRegistration}
          />
         ) : showHub ? (
          <Hub onProductClick={(p) => window.location.hash = `#/product/${p.id}`} onBack={handleBackToOrbit} />
        ) : showNeural ? (
          <NeuralMapping onBack={handleBackToOrbit} />
        ) : showQuantum ? (
          <QuantumEncryption onBack={handleBackToOrbit} />
        ) : showDeep ? (
          <DeepLearningPage onBack={handleBackToOrbit} />
        ) : showSwarm ? (
          <SwarmIntelligence onBack={handleBackToOrbit} />
        ) : showZero ? (
          <ZeroKnowledge onBack={handleBackToOrbit} />
        ) : (
          <>
            <Hero onDiscover={() => scrollToSection('services')} onOpenJournal={() => window.location.hash = '#/journal'} />
            <About />
            <Process onStepClick={(step) => window.location.hash = `#/process/${step.id}`} />
            <Hub onProductClick={(p) => window.location.hash = `#/product/${p.id}`} isSection={true} />
            <Services onServiceClick={(s) => window.location.hash = `#/service/${s.id}`} />
            <AcademyPreview onOpen={() => window.location.hash = '#/academy'} />
            <Features />
            <Partners onBecomePartner={handlePartnershipRequest} />
            <Contact onSubmitSuccess={handleSubmitSuccess} />
          </>
        )}
      </main>

      <Newsletter />

      <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Logo className="h-8 mb-6" />
              <p className="text-slate-500 text-xs font-mono leading-relaxed mt-4">
                SYSTEM STATUS: NOMINAL<br/>
                LOCATION: SAINT LOUIS, SN<br/>
                VERSION: 4.2.1-BETA
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-mono font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2 inline-block">Protocols</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li onClick={() => window.location.hash = '#/tech/neural'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Neural Mapping</li>
                <li onClick={() => window.location.hash = '#/tech/quantum'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Quantum Encryption</li>
                <li onClick={() => window.location.hash = '#/tech/deep'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Deep Learning</li>
                <li onClick={() => window.location.hash = '#/tech/swarm'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Swarm Intelligence</li>
                <li onClick={() => window.location.hash = '#/tech/zero'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Zero-Knowledge</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-mono font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2 inline-block">Base Info</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li onClick={() => window.location.hash = '#/academy'} className="hover:text-purple-400 cursor-pointer transition-colors text-purple-400 font-bold">Ecliptix Academy</li>
                <li onClick={() => window.location.hash = '#/podcast'} className="hover:text-cyan-400 cursor-pointer transition-colors">Podcast</li>
                <li onClick={() => window.location.hash = '#/careers'} className="hover:text-ecliptix-orange cursor-pointer transition-colors text-ecliptix-orange/80 font-bold">Rejoindre l'équipe</li>
                <li onClick={() => window.location.hash = '#/team'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Information Société</li>
                <li onClick={() => window.location.hash = '#/journal'} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Journal de Mission</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-mono font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2 inline-block">Restez Connecté</h4>
              
              <div className="flex space-x-4 mb-8">
                <a href="https://www.linkedin.com/company/ecliptix-group" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-slate-400 hover:border-ecliptix-orange hover:text-ecliptix-orange transition-all"><Linkedin size={18} /></a>
                <a href="https://www.facebook.com/share/1FSpHuCmqw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-slate-400 hover:border-ecliptix-orange hover:text-ecliptix-orange transition-all"><Facebook size={18} /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            <p>ECLIPTIX SYSTEMS CORP // EST. 2025</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <button onClick={() => window.location.hash = '#/privacy'} className="hover:text-white transition-colors uppercase">Privacy Protocol</button>
               <button onClick={() => window.location.hash = '#/terms'} className="hover:text-white transition-colors uppercase">Terms of Engagement</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
