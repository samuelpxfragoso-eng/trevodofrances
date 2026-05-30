import { Shield, Sparkles, MapPin, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  onOpenJoinModal: (selectedPlan?: 'Associado') => void;
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onOpenJoinModal, onScrollToSection }: HeroProps) {
  return (
    <header className="relative min-h-screen bg-slate-950 text-white flex flex-col justify-center overflow-hidden pt-20">
      {/* Visual background with tropical/tech overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/50 z-10" />
        {/* Abstract vector beach background layout with pulsing lights to represent security and local community */}
        <div 
          className="w-full h-full opacity-30 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780166625/WhatsApp_Image_2026-05-30_at_3.39.07_PM_1_c3k8wi.jpg')`
          }}
        />
        {/* Live scanning grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] z-1" />
        
        {/* Safe area radar sweep animation */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-emerald-500/20 rounded-full animate-ping opacity-15 hidden md:block" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-blue-500/10 rounded-full animate-pulse opacity-10 hidden md:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider uppercase font-semibold font-display shadow-lg shadow-emerald-950/30">
              <Shield className="w-3.5 h-3.5" />
              <span>Associação Trevo do Francês • Ativa &amp; Segura</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-tight sm:leading-none">
              Unidos por uma Praia do Francês mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500">forte</span>, integrada e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">segura</span>.
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed font-light">
              A Associação de Moradores e Amigos do Entorno do Trevo do Francês trabalha para trazer voz, força, infraestrutura ativa e inovação inteligente para a nossa região.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="btn-hero-cta-primary"
                onClick={() => onOpenJoinModal()}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-98 cursor-pointer"
              >
                Quero Apoiar / Tornar-se Membro
                <ChevronRight className="w-5 h-5 text-slate-950" />
              </button>
              
              <button
                id="btn-hero-cta-secondary"
                onClick={() => onScrollToSection('mapa-regiao')}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold px-6 py-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Ver Localização e Mapa
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-slate-300">Assembleias Cidadãs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-slate-300">Zumba e Ritbox</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-slate-300">Cinturão de IA 24h</span>
              </div>
            </div>

          </div>

          {/* Interactive Hero Widget Column with float, brightness-pulsing, sweep-reflection and shimmer animations */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-float-premium">
            {/* Visual Glass Box simulating a security dome or citizen app preview */}
            <div className="relative mx-auto max-w-sm rounded-3xl border border-emerald-500/20 bg-slate-900/90 p-5 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-md overflow-hidden animate-sweep-reflection animate-shimmer-shining animate-brightness-pulse">
              {/* Camera status line */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-semibold font-display">PORTAL-01 - MONITOR</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded text-[10px] text-slate-400 font-mono">
                  <MapPin className="w-3 h-3 text-red-400" />
                  AL-101 Sul / Trevo
                </div>
              </div>

              {/* Simulated camera feed representation */}
              <div className="relative rounded-2xl bg-slate-950 aspect-video overflow-hidden border border-emerald-500/30 shadow-inner group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center opacity-85 filter saturate-100 contrast-110" style={{ backgroundImage: `url('https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780166625/WhatsApp_Image_2026-05-30_at_3.39.07_PM_1_c3k8wi.jpg')` }} />
                  {/* Targets overlay simulation */}
                  <div className="absolute top-1/4 left-1/3 border-2 border-emerald-500 w-16 h-12 rounded flex flex-col justify-between p-1">
                    <span className="text-[7px] font-mono text-emerald-400 bg-slate-950/80 px-1 self-start rounded">ALERTA AZUL</span>
                    <span className="text-[6px] font-mono text-emerald-400 text-right">LPR CAM-01</span>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 border-2 border-cyan-400 w-12 h-16 rounded flex flex-col justify-between p-1">
                    <span className="text-[7px] font-mono text-cyan-400 bg-slate-950/80 px-0.5 self-start rounded font-semibold">OK - CADASTRO</span>
                  </div>
                </div>
                {/* Tech scanline effect */}
                <div className="absolute left-0 w-full h-0.5 bg-emerald-500/30 top-1/4 animate-bounce z-10" />
                <div className="absolute bottom-2 left-2 bg-slate-950/90 text-[9px] font-mono text-slate-300 px-1.5 py-0.5 rounded tracking-wider flex items-center gap-1">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>30 MAI 2026 18:00:31 UTC</span>
                </div>
              </div>

              {/* Citizen App summary widgets */}
              <div className="mt-4 space-y-3.5">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1">
                    <span>Membros Ativos (Loteamentos)</span>
                    <span className="text-emerald-400">92% da Meta</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5 text-center">
                  <div className="bg-slate-950/50 p-2.5 rounded-xl border border-white/5 hover:border-slate-700/50 transition-colors">
                    <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">420+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Famílias Unidas</div>
                  </div>
                  <div className="bg-slate-950/50 p-2.5 rounded-xl border border-white/5 hover:border-slate-700/50 transition-colors">
                    <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400 tracking-tight">16+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Câmeras com IA</div>
                  </div>
                </div>

                <button
                  id="btn-hero-app-simulate"
                  onClick={() => onScrollToSection('mapa-regiao')}
                  className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-mono py-2.5 rounded-xl transition-all cursor-pointer block text-center"
                >
                  VER ÁREA DE COBERTURA
                </button>
              </div>
            </div>

            {/* Decorative background blur balls */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl z-0" />
          </div>

        </div>
      </div>
    </header>
  );
}
