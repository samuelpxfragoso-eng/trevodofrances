import { Heart, Landmark, Users2, Calendar, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'União e Presença',
      icon: Users2,
      description: 'Integração total entre moradores, veranistas, amigos e o comércio local. Unidos, criamos um canal de cooperação mútua onde todos se conhecem e se apoiam.',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      title: 'Ação Social & Bem-Estar',
      icon: Calendar,
      description: 'Incentivo à saúde, esporte e lazer na comunidade. Oferecemos aulas gratuitas e regulares de Ritbox e Zumba na praça central, mutirões ecológicos e festividades.',
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    {
      title: 'Voz Ativa Comunitária',
      icon: Landmark,
      description: 'Diálogo direto com órgãos públicos. Lutamos por asfalto, iluminação eficiente, saneamento e parcerias estratégicas com as forças de segurança (PM e Guarda Municipal).',
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    }
  ];

  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              Manifesto Comunitário
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
              Nossa Voz, Nossa Força
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              O entorno do Trevo do Francês (Marechal Deodoro - AL) expandiu-se e hoje abriga milhares de famílias que escolheram este paraíso para construir suas vidas. A nossa Associação nasceu da necessidade de organizar essa força coletiva.
            </p>
            
            <p className="text-slate-600 text-base leading-relaxed">
              Trabalhamos incansavelmente para transformar nossa região em um modelo de convivência integrada: unindo o bem-estar social das atividades na praça com a inovação absoluta de um dos sistemas de segurança colaborativos mais avançados do estado. Aqui, cada detalhe é planejado para elevar a qualidade de vida e preservar a tranquilidade do nosso entorno.
            </p>

            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 max-w-md">
              <MapPin className="w-5 h-5 text-red-500 shrink-0" />
              <div className="text-xs text-slate-600">
                <span className="font-semibold block text-slate-800">Abrangência Territorial:</span>
                Entorno do Trevo do Francês, Loteamentos Jardim, Luar, Enseada e Alamedas adjacentes (SUL de AL-101).
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 max-w-lg mx-auto bg-slate-950 group">
              <video 
                src="https://res.cloudinary.com/dbuiqh0ee/video/upload/v1780166121/SnapInsta.to_AQMNXjLlJ1fzsl16jISy-116ghnXH6CqWR7O3WsZNtEfF4bL176PdCrCQ1kDNbwqROxE4952H6LNCAUjqk3U-jtBnTz3xPK3hrALLE8_rtnwlc.mp4" 
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Video Indicator Badges */}
              <div className="absolute top-4 right-4 bg-slate-950/90 border border-emerald-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold shadow-lg backdrop-blur-sm pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>APRESENTAÇÃO VÍDEO</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white text-left pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-semibold">Tecnologia &amp; União</span>
                </div>
                <p className="text-xs font-light text-slate-300">
                  Assista ao manifesto da nossa comunidade e veja o Trevo do Francês em constante união e movimento.
                </p>
              </div>
            </div>
            
            {/* Visual background blob decoration */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-100 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-teal-100 rounded-full blur-3xl -z-10 animate-pulse" />
          </div>
        </div>

        {/* Pillars Display Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div 
              key={i}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${pillar.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center text-xs font-mono font-bold text-slate-500 group-hover:text-blue-600 transition-colors gap-1">
                <span>CONHECER PILAR</span>
                <span className="group-hover:translate-x-1 duration-300 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
