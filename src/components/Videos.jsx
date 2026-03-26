import React from 'react'

const Videos = () => {
  const galeriaVideos = [
    { id: 1, src: "/video1.mp4", label: "O Produto Final", desc: "Padrão e Qualidade Chaudar" },
    { id: 2, src: "/video2.mp4", label: "Nossa Produção", desc: "Processos e Tecnologia" },
    { id: 3, src: "/video3.mp4", label: "Nossa Produção", desc: "Rigor Técnico e Agilidade" },
  ];

  return (
    <section id="trabalho" className="bg-stone-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <div className="w-12 h-1 bg-[#5d4037] mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-7xl font-serif text-black leading-tight">
            Nossa <span className="text-emerald-700 italic">Operação</span>
          </h2>
          <p className="mt-4 text-stone-400 text-[10px] font-black uppercase tracking-[0.4em]">
            Qualidade que você pode acompanhar
          </p>
        </div>

        {/* Grid de Vídeos - 1 coluna mobile / 2 tablet / 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {galeriaVideos.map((video) => (
            <div key={video.id} className="group">
              {/* Container do Vídeo com bordas super arredondadas */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-xl border-[4px] border-white transition-all duration-500 group-hover:border-emerald-700/30 group-hover:-translate-y-3 group-hover:shadow-2xl bg-black">
                <video
                  className="w-full aspect-[9/16] md:aspect-video lg:aspect-[9/16] object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>

                {/* Linha decorativa Marrom no topo do vídeo */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#5d4037] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Legendas Modernas */}
              <div className="mt-8">
                <h3 className="text-2xl font-serif text-black italic leading-none">
                  {video.label}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-1 h-1 bg-emerald-700 rounded-full"></div>
                  <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">
                    {video.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Detalhe estético de fundo (Opcional) */}
        <div className="mt-24 border-t border-stone-200 pt-8">
          <p className="text-stone-300 font-serif italic text-lg text-center">
            "Compromisso com a transparência em cada tora serrada."
          </p>
        </div>
      </div>
    </section>
  )
}

export default Videos