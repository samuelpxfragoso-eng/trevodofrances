import { CheckCircle2, Bookmark, Award, ShieldCheck, ArrowRight, HeartHandshake, Zap, Sparkles } from 'lucide-react';

interface WhyAssociateProps {
  onOpenJoinModal: (selectedPlan?: 'Associado') => void;
}

export default function WhyAssociate({ onOpenJoinModal }: WhyAssociateProps) {
  const benefits = [
    {
      title: "Descontos especiais em comércios",
      desc: "Economize diretamente em restaurantes, lojas de materiais de construção, farmácias e comércios no entorno do Trevo.",
      icon: Award,
      badge: "Economia Real"
    },
    {
      title: "Profissionais Conveniados",
      desc: "Descontos expressivos em consultas e serviços de profissionais parceiros, de saúde a consultorias jurídicas e contábeis.",
      icon: HeartHandshake,
      badge: "Rede de Apoio"
    },
    {
      title: "Prioridade na Sede",
      desc: "Prioridade absoluta nos agendamentos e nos atendimentos dos profissionais conveniados que atendem diretamente na sede.",
      icon: ShieldCheck,
      badge: "Sem Fila"
    },
    {
      title: "Acesso a Campanhas",
      desc: "Acesso facilitado e prioritário em todos os projetos, cursos livres, oficinas de esporte, campanhas e ações comunitárias.",
      icon: Zap,
      badge: "Iniciativas"
    },
    {
      title: "Voz e Voto Ativo",
      desc: "Participação direta e ativa nos votos das assembleias, decisões de novos investimentos em segurança e no futuro do bairro.",
      icon: Sparkles,
      badge: "Decisão Coletiva"
    }
  ];

  return (
    <section id="por-que-associar" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-12 right-12 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold shadow-inner">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Benefícios Exclusivos</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
            Por que ser associado à Associação de Moradores?
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto" />
        </div>

        {/* First block: Two-column introducing text and visual statement card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-slate-300">
            <p className="text-lg font-medium text-white leading-relaxed">
              Ser associado é contribuir diretamente para a construção de uma comunidade mais organizada, segura e valorizada para todos no nosso bairro.
            </p>
            <p className="leading-relaxed">
              Com a sua contribuição voluntária, a Associação fortalece ações voltadas para melhorias cruciais de infraestrutura urbana, intermediação com o poder público, segurança preventiva monitorada por IA, suporte à assistência social da região, manutenção dos projetos esportivos comunitários e iniciativas pensadas sob medida em prol da evolução saudável do comércio e do lazer.
            </p>
            <p className="leading-relaxed">
              Ao se tornar membro, você não apenas desfruta de uma rede completa de vantagens reais na sua rotina diária de consumo, mas assume um papel de protagonista em uma entidade forte, livre e focada no desenvolvimento socioeconômico da nossa região.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex items-center">
            {/* Visual Call-Out Glassmorphic Card */}
            <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-emerald-500/20 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
              {/* Decorative scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(16,185,129,0.05)_95%)] bg-[size:100%_20px]" />
              
              <div className="space-y-4 relative z-10">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full inline-block">
                  Compromisso Coletivo
                </span>
                <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug">
                  “Juntos, construímos um bairro cada vez melhor para viver, investir e criar nossas famílias.”
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800 relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-500">ASSOCIE-SE HOJE</div>
                  <div className="text-sm font-semibold text-emerald-400">Fortaleça sua Região</div>
                </div>
                <button
                  id="btn-why-associate-cta"
                  onClick={() => onOpenJoinModal()}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-98"
                >
                  Fazer Minha Adesão
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 group flex flex-col justify-between"
              id={`benefit-card-${idx}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-emerald-500/10 group-hover:text-emerald-400 border border-slate-800 text-slate-400 transition-colors">
                    <benefit.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="text-[9px] font-mono font-semibold tracking-wider text-slate-500 uppercase">
                    {benefit.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2 leading-snug group-hover:text-emerald-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>BENEFÍCIO VÁLIDO</span>
              </div>
            </div>
          ))}
        </div>

        {/* Final callout box */}
        <div className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
          <p className="text-sm font-light text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Além das vantagens individuais, seu apoio financia diretamente a ampliação do cinturão de segurança inteligente de Marechal Deodoro (AL). Toda a prestação de contas é publicada em nosso fórum.
          </p>
          <div className="pt-2">
            <button
              id="btn-why-associate-bottom-scroll"
              onClick={() => onOpenJoinModal()}
              className="bg-transparent hover:bg-white/5 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 font-mono text-xs px-6 py-3 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              CONSTATAR PLANOS E BENEFÍCIOS REAIS
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
