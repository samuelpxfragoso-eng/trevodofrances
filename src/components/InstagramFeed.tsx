import React, { useState, useRef } from 'react';
import { Instagram, Heart, Volume2, VolumeX, Play, Pause, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
  likes: number;
}

export default function InstagramFeed() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  
  // Track mute status individually for each video card (default muted: true)
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    'media-1': true,
    'media-3': true,
    'media-5': true,
    'media-6': true,
    'media-8': true,
  });

  // Track play/pause status individually (default playing: true)
  const [playStates, setPlayStates] = useState<Record<string, boolean>>({
    'media-1': true,
    'media-3': true,
    'media-5': true,
    'media-6': true,
    'media-8': true,
  });

  const mediaItems: MediaItem[] = [
    {
      id: 'media-1',
      type: 'video',
      url: 'https://res.cloudinary.com/dbuiqh0ee/video/upload/v1780168242/SnapInsta.to_AQNjndFJyNKovd2dbAffP4Fx8RR9HOvHCWDCaELUQVESfLADl9_-trodZO2PtkgsZ9mT6IK4vDtdJav5qcBufAa0_qqlryj.mp4',
      title: 'Zumba & Ritbox ao Vivo',
      description: '🔋 Energia inexplicável das nossas aulas semanais gratuitas na praça do Trevo!',
      likes: 312
    },
    {
      id: 'media-2',
      type: 'image',
      url: 'https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780168220/WhatsApp_Image_2026-05-30_at_4.02.57_PM_ryjvl2.jpg',
      title: 'Ação Social Integrada',
      description: '🤝 Nossos associados e profissionais reunidos para prestação de contas na sede oficial.',
      likes: 194
    },
    {
      id: 'media-3',
      type: 'video',
      url: 'https://res.cloudinary.com/dbuiqh0ee/video/upload/v1780168240/SnapInsta.to_AQMgGA5rR59cpW1i5nIu96MKOBCRQv5_Edl9PmXkF9DlLkJmFOj_YtCIFlDxznhKUCHtsft5tKKUocI5oFOalk3xborgdC-ktDfvz6w_si6xlk.mp4',
      title: 'Atividades Comunitárias',
      description: '🎒 Engajamento e apoio diário às causas sociais e projetos esportivos locais.',
      likes: 245
    },
    {
      id: 'media-4',
      type: 'image',
      url: 'https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780168219/WhatsApp_Image_2026-05-30_at_4.02.56_PM_zrsuha.jpg',
      title: 'Atendimento Gratuito',
      description: '🩺 Mutirão da saúde oferecendo exames preventivos periódicos para o entorno.',
      likes: 280
    },
    {
      id: 'media-5',
      type: 'video',
      url: 'https://res.cloudinary.com/dbuiqh0ee/video/upload/v1780168239/SnapInsta.to_AQMAuYGHC5I6WyE6PGRfvHpqssmo5uFnS5lfcIpVK8cDJa9C0e4hrFk5ppUUWkJPGsdReAV_pN6C6ytGTk-F85Et_b7yzub.mp4',
      title: 'Melhorias de Infraestrutura',
      description: '🚧 Acompanhando as obras solicitadas pela Associação para melhor calçamento e iluminação.',
      likes: 189
    },
    {
      id: 'media-6',
      type: 'video',
      url: 'https://res.cloudinary.com/dbuiqh0ee/video/upload/v1780168235/SnapInsta.to_AQNFYevHD7zxXjdStG8NYvGzIEZwmVVeY0GfS75azS1CwUvnEnel40BsCeKtxQvWlyG0Anil3TC3H5PjqFywBibUTIxtsSAxsnxO5gc_jt2x2f.mp4',
      title: 'Integração de Famílias',
      description: '✨ Promovendo encontros festivos, culturais e torneios que fortalecem o vínculo comunitário.',
      likes: 224
    },
    {
      id: 'media-7',
      type: 'image',
      url: 'https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780168221/WhatsApp_Image_2026-05-30_at_4.02.56_PM_1_jlrj3l.jpg',
      title: 'Atendimento na Sede',
      description: '🏛️ Nossa sede de portas abertas atendendo moradores e garantindo parcerias importantes.',
      likes: 310
    },
    {
      id: 'media-8',
      type: 'video',
      url: 'https://res.cloudinary.com/dbuiqh0ee/video/upload/v1780168234/SnapInsta.to_AQOT_i0Ne5IxLLG_8V5ZozCQeVmNw-umqK7gegW2Sxm_G0kY2Hp7SlcCZYqYbNou9aBtvRWyxxBhknDAoZeIknX5_gw0mmv.mp4',
      title: 'Dança Comunitária',
      description: '💃 Fortalecimento físico e mental com alegria contagiante nas areias do Francês!',
      likes: 412
    },
    {
      id: 'media-9',
      type: 'image',
      url: 'https://res.cloudinary.com/dbuiqh0ee/image/upload/v1780168220/WhatsApp_Image_2026-05-30_at_4.02.57_PM_1_gyuxxe.jpg',
      title: 'Planejamento Ativo',
      description: '📋 Diretoria reunida definindo as próximas metas do cercamento digital e zeladoria comunitária.',
      likes: 156
    }
  ];

  const handleLike = (id: string) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleMute = (id: string, videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;
    const isNowMuted = !videoElement.muted;
    videoElement.muted = isNowMuted;
    setMutedStates(prev => ({
      ...prev,
      [id]: isNowMuted
    }));
  };

  const togglePlay = (id: string, videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;
    if (videoElement.paused) {
      videoElement.play().catch(err => console.log('Video play error:', err));
      setPlayStates(prev => ({ ...prev, [id]: true }));
    } else {
      videoElement.pause();
      setPlayStates(prev => ({ ...prev, [id]: false }));
    }
  };

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setDragMoved(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setDragMoved(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMediaClick = (id: string, videoRef: HTMLVideoElement | null) => {
    if (dragMoved) return; // Ignore play/pause toggle if they were only dragging
    togglePlay(id, videoRef);
  };

  return (
    <section id="instagram-feed" className="py-24 bg-slate-50 text-slate-900 border-t border-b border-slate-150/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Instagram className="w-3.5 h-3.5" />
              O Trevo em Movimento
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
              Ações e Projetos que Transformam o Francês
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Confira os registros reais de nossas aulas de Ritbox, mutirões de saúde, assembleias e o progresso da nossa região no cotidiano. Acesse o perfil oficial da associação para ver tudo!
            </p>
          </div>

          {/* Slider Controllers */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              id="btn-scroll-left"
              onClick={() => scroll('left')}
              className="p-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="btn-scroll-right"
              onClick={() => scroll('right')}
              className="p-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Containers - Draggable with Grab Handlers */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex lg:grid-cols-9 overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-300 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 select-none ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'thin' }}
        >
          {mediaItems.map((item) => {
            const isLiked = likedItems[item.id];
            // Video elements refs are managed locally using high-performance callback ref pattern
            let videoRef: HTMLVideoElement | null = null;

            return (
              <div 
                key={item.id}
                id={`media-item-${item.id}`}
                className="flex-shrink-0 w-[290px] sm:w-[340px] bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between snap-start overflow-hidden group select-none"
              >
                {/* Simulated Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full bg-slate-900 border border-white rounded-full flex items-center justify-center">
                        <Instagram className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">@trevodofrances</span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-0.5 font-light">
                        <Sparkles className="w-2.5 h-2.5 text-yellow-500" />
                        {item.type === 'video' ? 'VÍDEO AO VIVO' : 'REGISTRO DE FOTO'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Media Container Box */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950 flex items-center justify-center pointer-events-auto">
                  {item.type === 'video' ? (
                    <div className="w-full h-full relative cursor-pointer" onClick={() => handleMediaClick(item.id, videoRef)}>
                      <video
                        ref={(el) => { videoRef = el; }}
                        src={item.url}
                        className="w-full h-full object-cover"
                        loop
                        muted={mutedStates[item.id]}
                        playsInline
                        autoPlay
                      />
                      
                      {/* Playback Control overlays */}
                      <div className="absolute inset-x-0 bottom-3 px-3 flex items-center justify-between gap-2 z-10">
                        {/* Audio Toggle (Mutado / Com som) button */}
                        <button
                          type="button"
                          id={`btn-mute-toggle-${item.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute(item.id, videoRef);
                          }}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all shadow-md ${
                            mutedStates[item.id]
                              ? 'bg-red-500 text-white hover:bg-red-400'
                              : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                          }`}
                        >
                          {mutedStates[item.id] ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5 shrink-0" />
                              <span>ATIVAR SOM</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5 shrink-0" />
                              <span>COM SOM</span>
                            </>
                          )}
                        </button>

                        {/* Play/Pause state badge */}
                        <div className="w-7 h-7 rounded-lg bg-slate-950/80 border border-white/20 flex items-center justify-center text-white backdrop-blur-xs">
                          {playStates[item.id] ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                        </div>
                      </div>

                      {/* Muted Watermark Overlay */}
                      {mutedStates[item.id] && (
                        <div className="absolute top-3 right-3 bg-red-600/35 border border-red-500/20 px-2 py-0.5 rounded text-[9px] font-mono text-red-100 inline-flex items-center gap-1 backdrop-blur-xs">
                          <VolumeX className="w-3 h-3" />
                          <span>MUDO</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 pointer-events-none select-none"
                      draggable={false}
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                {/* Footer and captions - Only showing likes */}
                <div className="p-4 text-left">
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleLike(item.id)}
                      className="hover:scale-110 active:scale-95 transition-all text-slate-800 hover:text-red-500 flex items-center gap-1.5 cursor-pointer"
                      id={`btn-like-heart-${item.id}`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      <span className="text-xs font-bold text-slate-700">
                        {item.likes + (isLiked ? 1 : 0)} curtidas
                      </span>
                    </button>
                    <span className="text-[10px] font-semibold text-slate-400 font-mono">
                      TREVO DEODORO
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Navigation Bottom Note */}
        <p className="text-center text-xs text-slate-400 font-light mt-6">
          👉 Arraste para o lado ou clique nos botões superiores de navegação para ver todas as fotos e vídeos.
        </p>

        {/* Direct Link button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/trevodofrances/"
            target="_blank"
            id="btn-sub-insta-profile"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-102 active:scale-98 cursor-pointer text-xs"
          >
            <Instagram className="w-5 h-5 text-white" />
            Siga nosso Instagram @trevodofrances
          </a>
        </div>

      </div>
    </section>
  );
}
