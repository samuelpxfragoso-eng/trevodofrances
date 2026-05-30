import { Check, ShieldCheck, DollarSign, HelpCircle, ArrowRight, Award } from 'lucide-react';

interface SubscriptionPlansProps {
  onSelectPlan: (planName: 'Associado') => void;
}

export default function SubscriptionPlans({ onSelectPlan }: SubscriptionPlansProps) {
  return (
    <section id="planos" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" />
            Adesão Comunitária &amp; Transparência
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Seja um Morador Associado
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base">
            Contribua de forma unificada para manter a segurança do nosso bairro, as melhorias urbanas na AL-101 e todos os projetos esportivos comunitários ativos.
          </p>
        </div>

        {/* Center Single Subscription Card */}
        <div className="max-w-md mx-auto">
          
          <div className="border-2 border-slate-900 rounded-3xl p-8 bg-slate-950 text-white text-left flex flex-col justify-between hover:border-emerald-500 transition-all shadow-2xl relative overflow-hidden group">
            
            <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 text-[9px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
              <Award className="w-3 h-3 fill-slate-950" />
              Adesão Oficial
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest font-mono font-bold text-emerald-400 mb-2">Contribuição Única</div>
              <h3 className="font-display font-bold text-2xl text-white">Plano Associado</h3>
              
              <p className="text-xs text-slate-400 mt-2 mb-6">
                Apoie integralmente a Associação de Moradores do Trevo do Francês e tenha voz ativa além de benefícios imediatos.
              </p>

              <div className="flex items-baseline gap-1 mb-8 border-b border-white/5 pb-6">
                <span className="text-5xl font-extrabold text-white tracking-tight">R$ 30</span>
                <span className="text-2xl font-bold text-slate-205">,00</span>
                <span className="text-xs text-slate-400 font-mono tracking-wider uppercase ml-1.5">/ mês</span>
              </div>

              <ul className="space-y-4">
                {[
                  'Acesso liberado ao app de monitoramento comunitário',
                  'Apoio direto à instalação de câmeras e pórticos de IA',
                  'Vantagens e descontos exclusivos em comércios parceiros',
                  'Desconto em serviços com profissionais conveniados',
                  'Prioridade no atendimento em nossa sede comunitária',
                  'Acesso facilitado a projetos, campanhas e ações esportivas',
                  'Voz e participação ativa nas assembleias do bairro'
                ].map((item, id) => (
                  <li key={id} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="btn-subscribe-associado-single"
              onClick={() => onSelectPlan('Associado')}
              className="mt-8 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/10 text-xs active:scale-98"
            >
              Fazer Minha Adesão
              <ArrowRight className="w-4 h-4 text-slate-950 font-bold" />
            </button>
          </div>

        </div>

        {/* Small Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 leading-normal max-w-md mx-auto italic">
            * Contribuição 100% destinada para melhorias do bairro, zeladoria urbana, manutenção do sistema de segurança inteligente e ações de lazer na região.
          </p>
        </div>

      </div>
    </section>
  );
}
