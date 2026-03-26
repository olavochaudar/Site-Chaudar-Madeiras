import React from 'react'

const Contato = () => {
  return (
    <section id="contato" className="bg-white py-24 px-6 md:py-32">
      <div className="max-w-4xl mx-auto text-center">

        {/* Detalhe Superior Marrom */}
        <div className="w-12 h-1 bg-[#5d4037] mx-auto mb-8 md:mb-12"></div>

        {/* Título Centralizado - Preto e Verde (Fonte Serifada) */}
        <h2 className="text-5xl md:text-8xl font-serif text-black leading-tight mb-8">
          Entre em <br />
          <span className="text-emerald-700 italic">Contato</span>
        </h2>

        {/* Texto de Chamada - Simples e Direto */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-stone-500 text-lg md:text-2xl leading-relaxed font-light">
            Solicite seu orçamento.
            Nossa equipe está pronta para te atender com agilidade e transparência.
          </p>
        </div>

        {/* Área do Botão de WhatsApp - Arredondado e Imponente */}
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://wa.me/5515996125662"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-4 bg-emerald-700 text-white px-10 md:px-16 py-6 md:py-8 rounded-full shadow-[0_20px_50px_rgba(4,120,87,0.3)] hover:shadow-emerald-900/40 hover:-translate-y-2 transition-all duration-500 active:scale-95 w-full md:w-auto"
          >
            {/* Ícone do WhatsApp Sutil */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.55 4.197 1.592 6.015L0 24l6.135-1.61a11.887 11.887 0 005.911 1.56h.005c6.632 0 12.05-5.414 12.05-12.05a11.84 11.84 0 00-3.528-8.521z" />
            </svg>

            <span className="text-sm md:text-lg font-black uppercase tracking-[0.2em]">
              Falar no WhatsApp
            </span>

            {/* Brilho interno animado no hover */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
          </a>

          {/* Número escrito para confiança do cliente */}
          <p className="text-stone-400 font-bold tracking-widest text-[10px] md:text-xs uppercase">
            +55 (15) 99612-5662
          </p>
        </div>

        {/* Detalhe Marrom Final - Organizador */}
        <div className="mt-24 pt-12 border-t border-stone-100">
          <p className="text-stone-300 font-serif italic text-xl">
            Chaudar Madeiras — <span className="text-emerald-700">Tradição</span> e Qualidade.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contato