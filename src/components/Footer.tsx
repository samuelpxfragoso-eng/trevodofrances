import { MapPin, Phone, Mail, ShieldAlert, Instagram, HelpCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/5 pb-12">
          
          {/* Logo & Manifesto Column */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              onClick={scrollToTop}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 bg-neutral-900 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-400 animate-shimmer-shining animate-sweep-reflection flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.25)]">
                <img 
                  src="https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780165490/WhatsApp_Image_2026-05-30_at_3.14.18_PM_md9i7x.jpg" 
                  alt="Trevo do Francês Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-tight block">Trevo do Francês</span>
                <span className="text-[9px] text-emerald-400 font-mono tracking-widest uppercase block -mt-1 font-semibold">Associação de Moradores</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Uma entidade sem fins lucrativos comprometida em pavimentar o progresso urbano, esportivo, cultural e tecnológico nos acessos norte e sul ao paraíso turístico da Praia do Francês, Alagoas.
            </p>

            <div className="flex gap-3 text-slate-400">
              <a 
                id="footer-ig-link"
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer text-slate-200"
                aria-label="Instagram da associação"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a 
                id="footer-phone-link"
                href="https://wa.me/5582999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-all cursor-pointer text-slate-200"
                aria-label="WhatsApp de suporte"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Location details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-300">Localização e Registro</h4>
            
            <ul className="space-y-3.5 text-xs text-slate-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Praia do Francês, Entorno do Trevo Principal, Rod. AL-101 Sul. CEP 57160-000, Marechal Deodoro - AL, Brasil.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldAlert className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <span>CNPJ: 45.188.648/0001-53 (Simulação de Registro)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                <span>contato@trevodofrances.org.br</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-300">Navegação</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <button onClick={() => scrollToSection('quem-somos')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Quem Somos</button>
              <button onClick={() => scrollToSection('instagram-feed')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Ações Sociais</button>
              <button onClick={() => scrollToSection('mapa-regiao')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Localização</button>
              <button onClick={() => scrollToSection('planos')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Ver Mensalidades</button>
            </div>
          </div>

          {/* Security alerts representation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-300">Atendimento Extra</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Perguntas FAQ</button>
              <button onClick={() => scrollToSection('comunidade')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Mural de Membros</button>
              <a href="https://wa.me/5582999999999" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                Suporte Administrativo
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Outer Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div>
            © 2026 Associação de Moradores e Amigos do Entorno do Trevo do Francês. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#termos" className="hover:underline">Termos de Uso</a>
            <a href="#privacidade" className="hover:underline">Privacidade de Câmeras (LGPD)</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
