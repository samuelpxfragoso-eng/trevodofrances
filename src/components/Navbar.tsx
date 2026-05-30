import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, Users, MessageSquare, DollarSign, Map, HelpCircle, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (selectedPlan?: 'Associado') => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Quem Somos', icon: Users, targetId: 'quem-somos' },
    { label: 'Ações', icon: ShieldCheck, targetId: 'instagram-feed' },
    { label: 'Planos', icon: DollarSign, targetId: 'planos' },
    { label: 'Depoimentos', icon: HelpCircle, targetId: 'comunidade' },
    { label: 'FAQ', icon: MessageSquare, targetId: 'faq' },
    { label: 'Localização', icon: Map, targetId: 'mapa-regiao' }
  ];

  return (
    <nav 
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-900/90 text-white backdrop-blur-md shadow-lg border-b border-white/5 py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-500/90 bg-neutral-900 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400 animate-shimmer-shining animate-sweep-reflection flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.35)]">
              <img 
                src="https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780165490/WhatsApp_Image_2026-05-30_at_3.14.18_PM_md9i7x.jpg" 
                alt="Trevo do Francês Logo" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight block">Trevo do Francês</span>
              <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase block -mt-1 font-semibold">Associação de Moradores</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 xl:gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.targetId}
                  id={`nav-link-${item.targetId}`}
                  onClick={() => scrollToSection(item.targetId)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:text-emerald-400 hover:bg-white/5 transition-all cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <button
                id="btn-nav-join"
                onClick={() => onOpenJoinModal()}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-950/20 active:scale-95 transition-all cursor-pointer"
              >
                Quero Apoiar
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              id="btn-nav-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-white/10 text-white slide-down-animation">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.targetId}
                id={`nav-link-mob-${item.targetId}`}
                onClick={() => scrollToSection(item.targetId)}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 hover:bg-white/5 hover:text-emerald-400 transition-all cursor-pointer"
              >
                <item.icon className="w-5 h-5 text-emerald-500" />
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4 border-t border-white/5 flex flex-col gap-3">
              <button
                id="btn-nav-mob-join"
                onClick={() => {
                  setIsOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Tornar-se Membro
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
