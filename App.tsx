
import React, { useRef, useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Hub } from './components/Hub';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Careers } from './components/Careers';
import { Process } from './components/Process';
import { ServiceDetail } from './components/ServiceDetail';
import { ProductDetail } from './components/ProductDetail';
import { ModuleDetail } from './components/ModuleDetail';
import { Journal } from './components/Journal';
import { Partners } from './components/Partners';
import { Team } from './components/Team';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Academy } from './components/Academy';
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
import { Facebook, Linkedin, Menu, X, Radio, Send, CheckCircle2, Loader2, Mail } from 'lucide-react';
import { ServiceItem, ProductItem, ProductModule, JobPosting, Course, ProcessStep } from './types';
import { submitForm } from './utils/formService';

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
  const [activeNav, setActiveNav] = useState<string>(''); // Tracks the active navigation item

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedModule, setSelectedModule] = useState<ProductModule | null>(null);
  const [demoRequestProduct, setDemoRequestProduct] = useState<ProductItem | null>(null);
  const [applyingJob, setApplyingJob] = useState<JobPosting | null | 'spontaneous'>(null);
  const [registeringCourse, setRegisteringCourse] = useState<Course | null>(null);
  const [selectedProcessStep, setSelectedProcessStep] = useState<ProcessStep | null>(null);
  const [showPartnershipRequest, setShowPartnershipRequest] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  
  const [showCareers, setShowCareers] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAcademy, setShowAcademy] = useState(false);
  const [showHub, setShowHub] = useState(false);
  
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
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    resetAllViews();
    setActiveNav(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleServiceClick = (service: ServiceItem) => {
    resetAllViews();
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product: ProductItem) => {
    resetAllViews();
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModuleClick = (module: ProductModule) => {
    setSelectedModule(module);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProcessStepClick = (step: ProcessStep) => {
    setSelectedProcessStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProduct = () => {
    setSelectedModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestDemo = (product: ProductItem) => {
    setDemoRequestProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJobApplication = (job: JobPosting) => {
    setApplyingJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSpontaneousApplication = () => {
    setApplyingJob('spontaneous');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseRegistration = (course: Course) => {
    setRegisteringCourse(course);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePartnershipRequest = () => {
    setShowPartnershipRequest(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitSuccess = () => {
    setDemoRequestProduct(null);
    setApplyingJob(null);
    setRegisteringCourse(null);
    setShowPartnershipRequest(false);
    setShowSuccessPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOrbit = () => {
    resetAllViews();
    setActiveNav('services'); // Default return state
    setTimeout(() => {
        const element = document.getElementById('services');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  // Generic Handlers
  const handleOpenCareers = () => { resetAllViews(); setShowCareers(true); setActiveNav('careers'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenJournal = () => { resetAllViews(); setShowJournal(true); setActiveNav('journal'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenTeam = () => { resetAllViews(); setShowTeam(true); setActiveNav('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenPrivacy = () => { resetAllViews(); setShowPrivacy(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenTerms = () => { resetAllViews(); setShowTerms(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenAcademy = () => { resetAllViews(); setShowAcademy(true); setActiveNav('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenHub = () => { resetAllViews(); setShowHub(true); setActiveNav('hub'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  
  const handleOpenNeural = () => { resetAllViews(); setShowNeural(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenQuantum = () => { resetAllViews(); setShowQuantum(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenDeep = () => { resetAllViews(); setShowDeep(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenSwarm = () => { resetAllViews(); setShowSwarm(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenZero = () => { resetAllViews(); setShowZero(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  // Initial scroll effect for active state if needed (optional)
  useEffect(() => {
    // If we wanted to spy on scroll, we would do it here. 
    // For now, we rely on click-setting the activeNav.
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-black selection:bg-ecliptix-orange selection:text-black">
      <StarField />
      <div className="scanlines"></div>

      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => { 
                resetAllViews();
                setActiveNav('');
                window.scrollTo({ top: 0, behavior: 'smooth'}) 
              }}>
              <Logo />
              <div className="hidden md:flex h-4 w-px bg-white/20 mx-2"></div>
              <span className="hidden md:block text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                Orbital Systems
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              
              {/* INNOVATION HUB */}
              <button 
                onClick={() => scrollToSection('hub')} 
                className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'hub' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                 <span className="relative z-10">Innovation Hub</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'hub' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>

              {/* SERVICES */}
              <button 
                onClick={() => scrollToSection('services')} 
                className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'services' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                 <span className="relative z-10">Services</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>

              {/* ACADEMY */}
              <button 
                onClick={handleOpenAcademy} 
                className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'academy' ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'}`}
              >
                 <span className="relative z-10">Academy</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 transform transition-transform origin-right duration-500 ${activeNav === 'academy' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>

              {/* MISSION */}
              <button 
                onClick={() => scrollToSection('about')} 
                className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'about' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                 <span className="relative z-10">Mission</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>

              {/* JOURNAL */}
              <button 
                onClick={handleOpenJournal} 
                className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'journal' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                 <span className="relative z-10">Journal</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'journal' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              
              {/* TEAM */}
              <button 
                onClick={handleOpenTeam} 
                className={`relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors group overflow-hidden ${activeNav === 'team' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                 <span className="relative z-10">Team</span>
                 <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-ecliptix-orange transform transition-transform origin-right duration-500 ${activeNav === 'team' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
              </button>
              
              {/* CAREERS */}
              <button 
                onClick={handleOpenCareers} 
                className={`relative px-6 py-2 text-xs font-bold font-mono uppercase tracking-widest transition-colors border rounded ml-2 ${activeNav === 'careers' ? 'bg-ecliptix-orange text-black border-ecliptix-orange' : 'text-ecliptix-orange hover:text-white border-ecliptix-orange/30 hover:bg-ecliptix-orange/10'}`}
              >
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
              <button 
                onClick={() => scrollToSection('hub')} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'hub' ? 'border-ecliptix-orange bg-white/10 text-white' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
              >Innovation Hub</button>
              
              <button 
                onClick={() => scrollToSection('services')} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'services' ? 'border-ecliptix-orange bg-white/10 text-white' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
              >Services</button>
              
              <button 
                onClick={handleOpenAcademy} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'academy' ? 'border-purple-400 bg-purple-900/20 text-purple-400' : 'border-transparent text-purple-400 hover:bg-white/5'}`}
              >Academy</button>
              
              <button 
                onClick={() => scrollToSection('about')} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'about' ? 'border-ecliptix-orange bg-white/10 text-white' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
              >Mission</button>
              
              <button 
                onClick={handleOpenJournal} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'journal' ? 'border-ecliptix-orange bg-white/10 text-white' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
              >Journal de Bord</button>
              
              <button 
                onClick={handleOpenTeam} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'team' ? 'border-ecliptix-orange bg-white/10 text-white' : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'}`}
              >Équipe</button>
              
              <button 
                onClick={handleOpenCareers} 
                className={`block w-full text-left px-4 py-3 border-l-2 transition-all ${activeNav === 'careers' ? 'border-ecliptix-orange bg-ecliptix-orange text-black' : 'border-transparent text-ecliptix-orange hover:bg-white/5'}`}
              >Carrière</button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`block w-full text-left px-4 py-3 border-l-2 border-transparent text-slate-500 hover:text-white hover:bg-white/5 transition-all`}
              >Comm Link</button>
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
            onModuleClick={handleModuleClick}
            onRequestDemo={handleRequestDemo}
          />
        ) : selectedProcessStep ? (
          <ProcessDetail 
            step={selectedProcessStep}
            onBack={() => setSelectedProcessStep(null)}
          />
        ) : showCareers ? (
          <Careers 
             onJobApply={handleJobApplication} 
             onSpontaneousApply={handleSpontaneousApplication}
             onPartnerRequest={handlePartnershipRequest}
          />
        ) : showJournal ? (
          <Journal onBack={handleBackToOrbit} />
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
          <Hub onProductClick={handleProductClick} onBack={handleBackToOrbit} />
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
            <Hero onDiscover={() => scrollToSection('services')} onOpenJournal={handleOpenJournal} />
            <About />
            <Process onStepClick={handleProcessStepClick} />
            <Hub onProductClick={handleProductClick} isSection={true} />
            <Services onServiceClick={handleServiceClick} />
            <AcademyPreview onOpen={handleOpenAcademy} />
            <Features />
            <Partners onBecomePartner={handlePartnershipRequest} />
            <Contact onSubmitSuccess={handleSubmitSuccess} />
          </>
        )}
      </main>

      {/* DEDICATED NEWSLETTER SECTION */}
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
                <li onClick={handleOpenNeural} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Neural Mapping</li>
                <li onClick={handleOpenQuantum} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Quantum Encryption</li>
                <li onClick={handleOpenDeep} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Deep Learning</li>
                <li onClick={handleOpenSwarm} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Swarm Intelligence</li>
                <li onClick={handleOpenZero} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Zero-Knowledge</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-mono font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2 inline-block">Base Info</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li onClick={handleOpenAcademy} className="hover:text-purple-400 cursor-pointer transition-colors text-purple-400 font-bold">Ecliptix Academy</li>
                <li onClick={handleOpenCareers} className="hover:text-ecliptix-orange cursor-pointer transition-colors text-ecliptix-orange/80 font-bold">Rejoindre l'équipe</li>
                <li onClick={handleOpenTeam} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Information Société</li>
                <li onClick={handleOpenJournal} className="hover:text-ecliptix-orange cursor-pointer transition-colors">Journal de Mission</li>
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
               <button onClick={handleOpenPrivacy} className="hover:text-white transition-colors uppercase">Privacy Protocol</button>
               <button onClick={handleOpenTerms} className="hover:text-white transition-colors uppercase">Terms of Engagement</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
