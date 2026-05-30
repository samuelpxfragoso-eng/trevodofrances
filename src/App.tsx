import { useState, useEffect, FormEvent } from 'react';
import { X, Check, ArrowRight, ShieldCheck, CreditCard, Sparkles, Heart, Smartphone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import WhyAssociate from './components/WhyAssociate';
import SubscriptionPlans from './components/SubscriptionPlans';
import CommunityWall from './components/CommunityWall';
import Faq from './components/Faq';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import { Supporter } from './types';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'Associado'>('Associado');
  
  // Checkout Stepper states
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'payment' | 'success'>('details');
  const [supporterName, setSupporterName] = useState('');
  const [supporterPhone, setSupporterPhone] = useState('');
  const [supporterEmail, setSupporterEmail] = useState('');
  const [supporterLoteamento, setSupporterLoteamento] = useState('Loteamento Jardim do Francês');

  // Trigger scroll helper
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

  // Open checkout with pre-selected plan
  const handleOpenJoinModal = (plan?: 'Associado') => {
    if (plan) setSelectedPlan(plan);
    setCheckoutStep('details');
    setIsJoinModalOpen(true);
  };

  // Form Submission handles
  const handleGoToPayment = (e: FormEvent) => {
    e.preventDefault();
    if (!supporterName.trim() || !supporterPhone.trim() || !supporterEmail.trim()) return;
    setCheckoutStep('payment');
  };

  const handleCompletePixSimulator = () => {
    const newSupporter: Supporter = {
      id: `sup-${Date.now()}`,
      name: supporterName,
      loteamento: supporterLoteamento,
      plan: selectedPlan,
      date: 'Hoje',
      avatarSeed: Math.floor(Math.random() * 100)
    };

    // Store in localStorage so the CommunityWall component can sync immediately
    const existingStr = localStorage.getItem('trevo_supporters');
    let existingList: Supporter[] = [];
    if (existingStr) {
      try {
        existingList = JSON.parse(existingStr);
      } catch (e) {
        existingList = [];
      }
    }
    const updated = [newSupporter, ...existingList];
    localStorage.setItem('trevo_supporters', JSON.stringify(updated));

    // Force dispatch a custom storage update event so any loaded component listens and reloads state
    window.dispatchEvent(new Event('storage'));

    setCheckoutStep('success');
  };

  const handleCloseModalAndRefresh = () => {
    setIsJoinModalOpen(false);
    // Reset inputs
    setSupporterName('');
    setSupporterPhone('');
    setSupporterEmail('');
    
    // Smooth scroll down to the Supporters Wall to let the user see their name in real-time!
    setTimeout(() => {
      scrollToSection('comunidade');
    }, 455);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-neutral-900">
      
      {/* Navbar Integration */}
      <Navbar 
        onOpenJoinModal={handleOpenJoinModal} 
      />

      {/* Main Single-Screen / Single-View Layout Blocks */}
      <main>
        
        {/* Section 1: Hero */}
        <Hero 
          onOpenJoinModal={handleOpenJoinModal} 
          onScrollToSection={scrollToSection} 
        />

        {/* Section 2: Quem Somos */}
        <About />

        {/* Section 3: Instagram Feed (O Trevo em Movimento) */}
        <InstagramFeed />

        {/* Section 3.5: Por que ser Associado */}
        <WhyAssociate onOpenJoinModal={handleOpenJoinModal} />

        {/* Section 5: Planos de Assinatura */}
        <SubscriptionPlans 
          onSelectPlan={(plan) => handleOpenJoinModal(plan)} 
        />

        {/* Section 6: Mural de Membros Ativos */}
        <CommunityWall />

        {/* Section 7: FAQ (Dúvidas Frequentes) */}
        <Faq />

        {/* Section 8: Mapa de Cobertura da Praia do Francês */}
        <MapSection />

      </main>

      {/* Footer Integration */}
      <Footer />


      {/* INTERACTIVE COMPREHENSIVE CHECKOUT STEPPER MODAL */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-lg bg-white text-slate-950 rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden animate-fade-in text-left">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-emerald-500 text-neutral-900 rounded-lg">
                  <Heart className="w-4 h-4 fill-neutral-900" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wide">Fazer Parte • Trevo do Francês</h3>
                  <span className="text-[9px] text-emerald-400 font-mono">PLANO EM COMPRA: {selectedPlan.toUpperCase()}</span>
                </div>
              </div>
              <button 
                onClick={() => setIsJoinModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                id="btn-close-checkout-modal"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress bar indicators */}
            <div className="grid grid-cols-3 gap-0.5 bg-slate-100 p-1 text-[10px] font-mono border-b border-slate-200 text-center font-bold">
              <div className={`py-1.5 rounded ${checkoutStep === 'details' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>1. Dados</div>
              <div className={`py-1.5 rounded ${checkoutStep === 'payment' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>2. Pix Apoio</div>
              <div className={`py-1.5 rounded ${checkoutStep === 'success' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>3. Sucesso</div>
            </div>

            {/* Step Content Area */}
            <div className="p-6">
              
              {/* STEP 1: Personal Contact Details Form */}
              {checkoutStep === 'details' && (
                <form onSubmit={handleGoToPayment} className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-600 mb-2">
                    Você escolheu o <strong className="text-slate-900">Plano Associado</strong> de <strong className="text-slate-900">R$ 30,00/mês</strong>. 
                    Por favor, preencha os dados da sua residência no entorno para emitirmos seu token de acesso.
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-owner-name" className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Seu Nome Completo:</label>
                    <input 
                      id="modal-owner-name"
                      type="text" 
                      value={supporterName}
                      onChange={(e) => setSupporterName(e.target.value)}
                      placeholder="Ex: Samuel Fragoso Bezerra" 
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-owner-phone" className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Seu Celular / WhatsApp:</label>
                      <input 
                        id="modal-owner-phone"
                        type="tel" 
                        value={supporterPhone}
                        onChange={(e) => setSupporterPhone(e.target.value)}
                        placeholder="Ex: (82) 99999-9999" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="modal-owner-email" className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Seu E-mail Principal:</label>
                      <input 
                        id="modal-owner-email"
                        type="email" 
                        value={supporterEmail}
                        onChange={(e) => setSupporterEmail(e.target.value)}
                        placeholder="Ex: samuel@exemplo.com" 
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-owner-loteamento" className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Seu Loteamento / Endereço:</label>
                    <select 
                      id="modal-owner-loteamento"
                      value={supporterLoteamento}
                      onChange={(e) => setSupporterLoteamento(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="Loteamento Jardim do Francês">Loteamento Jardim do Francês</option>
                      <option value="Loteamento Luar do Francês">Loteamento Luar do Francês</option>
                      <option value="Loteamento Trevo do Francês">Loteamento Trevo do Francês</option>
                      <option value="Loteamento Enseada do Francês">Loteamento Enseada do Francês</option>
                      <option value="Alameda Brisa do Mar">Alameda Brisa do Mar</option>
                      <option value="Rua dos Corais / Acesso do Cabo">Rua dos Corais / Acesso do Cabo</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="btn-modal-goToPay"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm cursor-pointer active:scale-98 mt-4 shadow-md shadow-blue-100"
                  >
                    Prosseguir para Pagamento (Pix)
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </form>
              )}


              {/* STEP 2: Simulated Pix Checkout Scan screen */}
              {checkoutStep === 'payment' && (
                <div className="space-y-5 text-center py-2 animate-fade-in">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#56bc94] font-bold bg-[#dbf5eb] px-3 py-1 rounded-full display inline-block">PIX SEGURO DE CONTRIBUIÇÃO</span>
                    <h4 className="text-xl font-display font-bold text-slate-900 mt-2">Leia ou Copie o QR Code</h4>
                    <p className="text-xs text-slate-500">Transação simulada de adesão comunitária. Em nossa associação real, o PIX envia fundos diretamente à conta bancária institucional.</p>
                  </div>

                  {/* QR Image vector placeholder */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-3xl inline-block shadow-inner">
                    {/* Elegant custom high-contrast QR simulation */}
                    <div className="w-40 h-40 bg-slate-900 flex items-center justify-center rounded-2xl p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="text-white w-full h-full" fill="currentColor">
                        <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z" />
                        <path d="M40,40 h20 v20 h-20 z M45,45 h10 v10 h-10 z" />
                        <path d="M0,45 h15 v5 h-15 z M45,0 v15 h5 v-15 z M85,45 h15 v5 h-15 z M45,85 v15 h5 v-15 z" />
                        <path d="M30,30 h10 v10 h-10 z M60,60 h10 v10 h-10 z M20,40 h10 v10 h-10 z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Código Pix Copia e Cola:</span>
                    <div className="bg-slate-100 p-3 rounded-xl border border-slate-200 font-mono text-[9px] text-slate-650 break-all select-all select-none">
                      00020126580014BR.GOV.BCB.PIX0136samuel.px.fragoso-trevo520400005303986540530.005802BR5925ASSOC_TREVO_DO_FRANCES6010MARECHAL_AL
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      id="btn-modal-backStep"
                      onClick={() => setCheckoutStep('details')}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-4 py-3 rounded-xl cursor-not-allowed text-xs"
                    >
                      Voltar Dados
                    </button>
                    
                    <button
                      type="button"
                      id="btn-simulate-pix-paid"
                      onClick={handleCompletePixSimulator}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 rounded-xl transition-all cursor-pointer text-sm shadow-md shadow-emerald-100 active:scale-95"
                    >
                      Confirmar que paguei PIX (Simular)
                    </button>
                  </div>
                </div>
              )}


              {/* STEP 3: Complete Success Screen */}
              {checkoutStep === 'success' && (
                <div className="space-y-6 text-center py-6 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <Check className="w-9 h-9 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">Você apoia o Trevo!</h4>
                    <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full display inline-block">Adesão Registrada</span>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto pt-2">
                      Ficamos muito gratos pela sua colaboração, <strong className="text-slate-900">{supporterName}</strong>. 
                      Seu cadastro foi salvo em nosso banco de dados. Você já pode visualizar seu nome listado no nosso Mural de Apoiadores.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl max-w-sm mx-auto text-left space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase">
                      <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
                      Acesso ao App Liberado!
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Nossos analistas técnicos de Marechal Deodoro (AL) já receberam seu contato pelo e-mail <strong className="text-slate-800">{supporterEmail}</strong> e vão mandar as credenciais e link de download no WhatsApp <strong className="text-slate-800">{supporterPhone}</strong> em instantes.
                    </p>
                  </div>

                  <button
                    type="button"
                    id="btn-success-close-and-scroll"
                    onClick={handleCloseModalAndRefresh}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-2xl transition-all cursor-pointer text-sm shadow-md"
                  >
                    Ver Meu Nome no Mural
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
