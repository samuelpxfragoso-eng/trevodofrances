import { MapPin, Navigation, Map, Shield, Compass } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="mapa-regiao" className="relative py-20 bg-slate-950 text-white overflow-hidden border-t border-slate-900">
      
      {/* Decorative vector assets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-10 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold shadow-inner">
            <Map className="w-3.5 h-3.5" />
            <span>Área de Cobertura</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
            Nossa Localização no Francês
          </h2>
          <div className="h-1 w-16 bg-emerald-500 rounded-full mx-auto" />
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-light">
            O Trevo do Francês é a porta de entrada para um dos litorais mais bonitos do Brasil. Nosso perímetro de atuação e vigilância abrange os principais acessos aos loteamentos locais.
          </p>
        </div>

        {/* Layout Grid: Iframe Map and Card Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Iframe */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl h-[450px] bg-slate-900 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.558364849317!2d-35.84589923838637!3d-9.766861596200236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70146f8876fc1bd%3A0xe67cb56bd0dfb414!2sPraia%20do%20Franc%C3%AAs%2C%20Marechal%20Deodoro%20-%20AL!5e0!3m2!1spt-BR!2sbr!4v1717102431718!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-750"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Praia do Francês Alagoas"
            />
            {/* Live Border Pulse Accent */}
            <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/20 rounded-3xl pointer-events-none transition-colors duration-500" />
            
            {/* Map floating tag */}
            <div className="absolute bottom-4 left-4 bg-slate-950/90 border border-slate-800 backdrop-blur-sm p-3.5 rounded-2xl flex items-center gap-3 shadow-lg pointer-events-none">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Compass className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Coordenadas Gps</span>
                <span className="text-xs font-mono text-emerald-400 font-bold block">9.7669° S, 35.8459° W</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information card with directions */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800/80 shadow-xl relative">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MapPin className="text-emerald-400 w-5 h-5 shrink-0" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Endereço de Apoio</span>
              </div>

              <div className="text-left space-y-4">
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Entorno do Trevo do Francês
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Nossa sede provisória de apoio e o cinturão de segurança inteligente de alta definição operam ao longo da rodovia <strong className="text-slate-200">AL-101 Sul</strong> e nos principais cruzamentos de acesso ao bairro do Francês, abrangendo Loteamento Jardim, Luar, Enseada e adjacências.
                </p>
                
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-[10px] font-mono uppercase text-slate-300 font-bold">Perímetro Monitorado</span>
                  </div>
                  <ul className="text-[10.5px] text-slate-400 font-light space-y-1.5 list-disc list-inside">
                    <li>Pórtico de Entrada Principal (AL-101)</li>
                    <li>Alameda das Brisas &amp; Ruas Internas</li>
                    <li>Loteamento Jardim do Francês</li>
                    <li>Suporte Integrado 24h por Dia</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 text-left">
              <a
                id="btn-external-google-maps"
                href="https://maps.google.com/?q=Praia+do+Frances,+Marechal+Deodoro+-+AL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800 hover:bg-slate-700 hover:text-white text-emerald-400 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs cursor-pointer active:scale-98 shadow-md"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                Rotas com o Google Maps
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
