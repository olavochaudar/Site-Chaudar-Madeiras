import React from 'react';

const Apresentação = () => {
  return (
    <section id="inicio" className="bg-white pt-28 pb-16 md:pt-44 md:pb-24 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">

        {/* Detalhe Marrom - Tamanho adaptável */}
        <div className="w-10 md:w-14 h-1 bg-[#5d4037] mx-auto mb-6 md:mb-10"></div>

        {/* Título - Fonte Serifada com escala responsiva */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-black leading-[1.1] mb-8 md:mb-12">
          Quem Nós <br />
          <span className="text-emerald-700 italic">Somos</span>
        </h2>

        {/* Texto - Otimizado para leitura */}
        <div className="text-stone-600 text-base md:text-xl leading-relaxed space-y-6 md:space-y-8 max-w-2xl mx-auto mb-10 md:mb-16 text-center">
          <p>
            Nossa empresa atua há mais de <strong className="text-black font-bold border-b-2 border-[#5d4037]/30">26 anos</strong> no mercado de compra e venda de madeiras e representações, construindo uma trajetória sólida baseada em confiança e qualidade.
          </p>
          <p className="hidden sm:block">
            Na <span className="text-emerald-800 font-bold uppercase text-sm tracking-widest">Chaudar Madeiras</span>, conquistamos a fidelidade de clientes e fornecedores, garantindo excelência e preços competitivos.
            Trabalhamos com tabuado de pinus e eucalipto, madeira para construção civil, embalagens e indústrias moveleiras, além de madeira bruta e beneficiada e madeira pré-cortada.
          </p>
          <p>
            Prezamos pela transparência e compromisso em cada negociação, assegurando processos realizados com seriedade. Nosso objetivo é oferecer as melhores soluções em Pinus e Eucalipto.
          </p>
        </div>

        {/* Botão com Link do WhatsApp - Largura total no mobile */}
        <div className="flex justify-center w-full px-4 md:px-0">
          <a
            href="https://wa.me/5515996125662"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#5d4037] text-white px-10 md:px-16 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-lg active:scale-95 transition-all hover:bg-emerald-800 text-center inline-block"
          >
            Entre em contato
          </a>
        </div>

        {/* Detalhe Final */}
        <div className="mt-16 md:mt-24 opacity-30">
          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-stone-400">
            Serraria Chaudar <span className="mx-2 text-[#5d4037]">|</span> Desde 200  0
          </p>
        </div>

      </div>
    </section>
  );
};

export default Apresentação;