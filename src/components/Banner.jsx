import React from 'react';

const Banner = () => {
  return (
    // id="inicio" para o link do header. pt-20 no mobile e pt-28 no PC para o header fixo.
    <section id="inicio" className="pt-20 md:pt-28 w-full bg-white flex justify-center overflow-hidden">

      <div className="w-full max-w-[1500px] md:px-6">

        {/* Link do WhatsApp envolvendo as duas imagens */}
        <a
          href="https://wa.me/5515996125662"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative w-full overflow-hidden md:rounded-[4rem] shadow-2xl bg-stone-100"
        >

          {/* BANNER MOBILE: Aparece apenas em celulares (abaixo de 768px) */}
          <img
            src="/banner2mobile.jpg"
            alt="Chaudar Madeiras - Atendimento Mobile"
            className="w-full h-auto block md:hidden transition-transform duration-700 active:scale-[0.98]"
          />

          {/* BANNER PC: Aparece apenas em computadores (acima de 768px) */}
          <img
            src="/bannerPc.png"
            alt="Chaudar Madeiras - Fornecedor de Pinus e Eucalipto"
            className="w-full h-auto hidden md:block transition-transform duration-1000 group-hover:scale-[1.03]"
          />

          {/* Overlay de indicação de clique (Sutil) */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Brilho que passa pelo banner no PC */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out hidden md:block"></div>
        </a>

        {/* Detalhe de acabamento inferior (Aparece em ambos, mas ajustado) */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-8 md:w-12 h-[1px] bg-stone-200"></span>
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-emerald-800 text-center">
              Padrão e Qualidade Chaudar
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-stone-200"></span>
          </div>
          {/* Linha indicadora Marrom */}
          <div className="w-[1px] h-6 md:h-10 bg-gradient-to-b from-[#5d4037] to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Banner;