import { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQItem } from '../types';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'geral' | 'seguranca' | 'contribuicao'>('todos');

  const faqs: FAQItem[] = [
    {
      question: 'Quem pode se associar à Associação?',
      answer: 'Qualquer morador, veranista ou proprietário de comércio no entorno do Trevo do Francês (Praia do Francês, Marechal Deodoro - AL) é muito bem-vindo para fazer parte da nossa associação e participar das decisões comunitárias.',
      category: 'geral'
    },
    {
      question: 'Como funciona o reconhecimento por Inteligência Artificial?',
      answer: 'As nossas câmeras nos pórticos virtuais possuem lentes e softwares de leitura de placas (LPR). O sistema analisa instantaneamente os dados de circulação pública e, ao detectar veículos suspeitos ou com registro ativo de restrição de roubo, emite alertas automáticos e imediatos no celular dos moradores participantes e às forças policiais locais.',
      category: 'seguranca'
    },
    {
      question: 'Para onde vai o dinheiro recolhido com a mensalidade?',
      answer: 'A destinação segue uma regulação rígida: 100% dos recursos são revertidos no pagamento e manutenção das filmadoras, licenciamento do software de IA, contratação de internet para os portais, contratação de professores das atividades físicas gratuitas na praça (Zumba e Ritbox) e melhorias contínuas na infraestrutura física do nosso entorno.',
      category: 'contribuicao'
    },
    {
      question: 'Quais os dias e horários das aulas gratuitas de Zumba e Ritbox?',
      answer: 'As aulas de Zumba ocorrem na Praça Comunitária toda terça e quinta-feira às 18h30. Já as sessões intensivas de Ritbox acontecem de segunda e quarta-feira às 19h00. Todas as atividades são oferecidas gratuitamente para moradores e veranistas, custeadas integralmente pelos nossos associados.',
      category: 'geral'
    },
    {
      question: 'Tenho casa de veraneio no Francês. Posso assinar apenas na temporada de férias?',
      answer: 'Sim, você pode assinar o nosso Plano Proteção Total apenas pelo período em que estiver veraneando ou quando deixar sua residência vazia nas baixas temporadas. Não temos carência contratual, pois queremos blindar seu patrimônio de maneira prática.',
      category: 'contribuicao'
    },
    {
      question: 'Como faço para receber o acesso às câmeras ao vivo do celular?',
      answer: 'Ao se cadastrar no Plano Proteção Total, nossa equipe fará uma verificação do seu terreno ou lote no bairro, cadastrando seu login no aplicativo oficial do morador. Você receberá o convite de download e ativação no WhatsApp em até 24h úteis.',
      category: 'seguranca'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = activeFilter === 'todos'
    ? faqs
    : faqs.filter(f => f.category === activeFilter);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-805 text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Central de Dúvidas
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Perguntas Frequentes FAQ
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base">
            Tem alguma dúvida sobre as câmeras inteligentes, funcionamento das aulas sociais ou faturas da associação? Encontre respostas rápidas abaixo.
          </p>
        </div>

        {/* Categories Tab navigation */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 border-b border-slate-100">
          {(['todos', 'geral', 'seguranca', 'contribuicao'] as const).map((tab) => (
            <button
              key={tab}
              id={`btn-faq-filter-${tab}`}
              onClick={() => {
                setActiveFilter(tab);
                setOpenIndex(null); // Close accordion on change
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab === 'todos' && 'Todas as Dúvidas'}
              {tab === 'geral' && 'Funcionamento Geral'}
              {tab === 'seguranca' && 'Segurança & Câmeras'}
              {tab === 'contribuicao' && 'Contribuição & Contas'}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                id={`accordion-item-${index}`}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-slate-50 ${
                  isOpen 
                    ? 'border-blue-500 bg-white shadow-md shadow-blue-500/5' 
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  id={`accordion-btn-${index}`}
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-slate-900 font-semibold text-sm sm:text-base text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold leading-tight text-slate-950">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Smooth reveal animation container */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-slate-600 text-sm sm:text-base leading-relaxed font-light bg-slate-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Support Direct Link */}
        <div className="mt-12 bg-blue-50 border border-blue-102 rounded-2xl p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-blue-900 font-display">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-blue-700">Fale diretamente com o nosso comitê de atendimento de moradores pelo WhatsApp.</p>
          </div>
          <a 
            id="btn-faq-whatsapp-direct"
            href="https://wa.me/5582999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-1.5 transition-all active:scale-95 shrink-0"
          >
            Chamar no WhatsApp
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
