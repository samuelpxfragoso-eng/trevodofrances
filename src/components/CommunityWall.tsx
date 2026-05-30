import { useState, useEffect, FormEvent } from 'react';
import { Users, UserPlus, Heart, Smile, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { Supporter } from '../types';

export default function CommunityWall() {
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [newName, setNewName] = useState('');
  const [selectedLoteamento, setSelectedLoteamento] = useState('Loteamento Jardim do Francês');
  const [selectedPlan] = useState<'Associado'>('Associado');
  const [hasJoined, setHasJoined] = useState(false);

  const loteamentos = [
    'Loteamento Jardim do Francês',
    'Loteamento Luar do Francês',
    'Loteamento Trevo do Francês',
    'Loteamento Enseada do Francês',
    'Alameda Brisa do Mar',
    'Rua dos Corais / Acesso do Cabo',
    'Rua da bica e adjacências'
  ];

  // Initial mock residents list
  const initialSupporters: Supporter[] = [
    { id: 'sup-1', name: 'Carlos Eduardo Nogueira', loteamento: 'Loteamento Jardim do Francês', plan: 'Associado', date: '30 Mai, 2026', avatarSeed: 12 },
    { id: 'sup-2', name: 'Mariana de Souza Guedes', loteamento: 'Loteamento Luar do Francês', plan: 'Associado', date: '29 Mai, 2026', avatarSeed: 45 },
    { id: 'sup-3', name: 'Aline Cavalcanti Bezerra', loteamento: 'Loteamento Enseada do Francês', plan: 'Associado', date: '27 Mai, 2026', avatarSeed: 33 },
    { id: 'sup-4', name: 'Dr. Roberto M. Teixeira', loteamento: 'Loteamento Trevo do Francês', plan: 'Associado', date: '25 Mai, 2026', avatarSeed: 58 },
    { id: 'sup-5', name: 'Sandra Maria de Oliveira', loteamento: 'Loteamento Luar do Francês', plan: 'Associado', date: '22 Mai, 2026', avatarSeed: 72 }
  ];

  useEffect(() => {
    // Load from local storage or set initial values
    const stored = localStorage.getItem('trevo_supporters');
    if (stored) {
      try {
        setSupporters(JSON.parse(stored));
      } catch (e) {
        setSupporters(initialSupporters);
      }
    } else {
      setSupporters(initialSupporters);
      localStorage.setItem('trevo_supporters', JSON.stringify(initialSupporters));
    }
  }, []);

  const handleJoin = (e: FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newSupporter: Supporter = {
      id: `sup-${Date.now()}`,
      name: newName.trim(),
      loteamento: selectedLoteamento,
      plan: selectedPlan,
      date: 'Hoje',
      avatarSeed: Math.floor(Math.random() * 100)
    };

    const updated = [newSupporter, ...supporters];
    setSupporters(updated);
    localStorage.setItem('trevo_supporters', JSON.stringify(updated));
    
    setHasJoined(true);
    setNewName('');

    // Reset back to normal view after 4 seconds
    setTimeout(() => {
      setHasJoined(false);
    }, 4000);
  };

  const getAvatarUrl = (seed: number) => {
    return `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc`;
  };

  return (
    <section id="comunidade" className="py-20 md:py-28 bg-slate-50 text-slate-905 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-105 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Voz Comunitária Real
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight">
            Nossos Apoiadores Ativos
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg">
            Moradores do entorno do Trevo que entendem a importância da união e da infraestrutura de segurança para pavimentar o nosso futuro. Juntos, somos mais fortes!
          </p>
        </div>

        {/* Dynamic Interactive Panel Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Board Column: Sign-up simulated widget form */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm text-left relative">
            <div className="absolute top-4 right-4 text-emerald-500 animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
              <UserPlus className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-base text-slate-900">Demostrar seu Apoio</h3>
                <span className="text-[10px] text-slate-400 font-mono">INSIRA SEU NOME NO MURAL DO TREVO</span>
              </div>
            </div>

            {hasJoined ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-900">Parabéns pelo Apoio!</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                  Seu nome foi adicionado com sucesso ao mural de apoiadores do Trevo do Francês. Juntos vamos transformar nosso bairro!
                </p>
                <div className="text-[10px] text-emerald-600 font-mono bg-emerald-50 px-3 py-1 rounded-full display inline-block">
                  Simulação Concluída
                </div>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="wall-supporter-name" className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Seu Nome Completo:</label>
                  <input 
                    id="wall-supporter-name"
                    type="text" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ex: Samuel Fragoso Bezerra" 
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="wall-supporter-loteamento" className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Seu Loteamento / Localização:</label>
                  <select 
                    id="wall-supporter-loteamento"
                    value={selectedLoteamento}
                    onChange={(e) => setSelectedLoteamento(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all focus:outline-none cursor-pointer"
                  >
                    {loteamentos.map((l, id) => (
                      <option key={id} value={l}>{l}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-slate-50 p-4 border border-slate-100 rounded-xl text-xs text-slate-600 block leading-relaxed">
                  Planos unificados para <strong>Adesão de R$ 30,00/mês</strong> com acesso total de monitoramento, desconto comercial e voto em assembleia!
                </div>

                <button
                  type="submit"
                  id="btn-wall-submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/10 active:scale-98 text-sm"
                >
                  <Heart className="w-4.5 h-4.5 text-white" />
                  Estar no Mural de Membros
                </button>
              </form>
            )}

            {/* Testimonials Quote placeholder below */}
            <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 flex gap-2">
              <Smile className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="italic text-left leading-relaxed">
                "As aulas de Zumba de terça-feira mudaram a rotina da minha aposentadoria, e me sinto muito mais segura voltando pra casa à noite agora com as câmeras com IA nos protegendo."
                <span className="block font-bold text-slate-700 not-italic mt-1.5">— Sandra Maria, moradora do Luar do Francês</span>
              </div>
            </div>
          </div>

          {/* Right Board Column: Grid of dynamic supporters */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {supporters.map((sup) => (
                <div 
                  key={sup.id} 
                  id={`supporter-item-${sup.id}`}
                  className="bg-white border border-slate-200 rounded-2xl p-4 text-left flex items-start gap-3.5 hover:border-slate-300 transition-all shadow-2xs group hover:shadow-md animate-fade-in"
                >
                  {/* Generated DiceBear profile representation */}
                  <img 
                    src={getAvatarUrl(sup.avatarSeed)} 
                    alt="mural-avatar" 
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 bg-slate-100 border border-slate-200 rounded-xl"
                  />
                  <div className="space-y-1 flex-1">
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-none group-hover:text-blue-600">{sup.name}</h4>
                      <span className="text-[8.5px] font-mono tracking-wider font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0 bg-emerald-100 text-emerald-800">
                        Associado
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{sup.loteamento}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 text-[9px] font-mono text-slate-400 border-t border-slate-100">
                      <span>Membro Ativo</span>
                      <span>{sup.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Live Counter Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200/60 pt-6 text-center">
              <div className="bg-white p-3 rounded-2xl border border-slate-200/50">
                <span className="block text-xl font-display font-bold text-slate-900">{supporters.length * 8 + 35}</span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400">Total Residentes</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/50 flex flex-col justify-center">
                <span className="block text-xl font-display font-bold text-emerald-600">
                  {supporters.length * 4 + 85}
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400">Associados Ativos</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/50">
                <span className="block text-xl font-display font-bold text-blue-600">94%</span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-slate-400">Aprovação local</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
