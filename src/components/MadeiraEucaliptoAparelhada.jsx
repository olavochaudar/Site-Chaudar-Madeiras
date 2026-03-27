import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MadeiraEucaliptoAparelhada = () => {
  const imagens = ["/MadeiraDeEucalipto1.jpeg", "/MadeiraDeEucalipto2.jpeg"];

  return (
    <section id="eucalipto" className="bg-white py-16 md:py-24 px-6 scroll-mt-24 border-t border-stone-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* 1. Título do Componente - Centralizado no Topo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-10 h-1 bg-[#5d4037] mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight uppercase tracking-tighter">
            Eucalipto <br />
            <span className="text-emerald-700 italic">Aparelhado Industrial</span>
          </h2>
        </div>

        {/* 2. Carrossel em Escala Reduzida */}
        <div className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-stone-100 mb-10 mx-auto max-w-3xl">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect="fade"
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={true}
            pagination={{ clickable: true }}
            className="h-[250px] md:h-[400px] w-full"
          >
            {imagens.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt="Eucalipto Industrial Chaudar"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Overlay sutil para o selo */}
                <div className="absolute top-4 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-[8px] text-white font-black uppercase tracking-widest">Padrão Chaudar</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. Texto Técnico em Escala Pequena */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-[10px] md:text-xs text-stone-500 leading-relaxed uppercase tracking-[0.15em] text-center font-medium opacity-80 text-justify md:text-center">
            A madeira de eucalipto beneficiada, especialmente na forma de eucalipto aparelhado industrial, destaca-se pela sua alta densidade e excelente desempenho estrutural. Passando por um processo de usinagem e acabamento preciso, esse material apresenta dimensões padronizadas e superfície uniforme, facilitando a aplicação em diferentes tipos de projetos.
          </p>
        </div>

        {/* 4. Botão de Ação com Link do WhatsApp */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/5515996125662"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5d4037] text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all duration-500 shadow-lg hover:-translate-y-1 active:scale-95 text-center"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Detalhe Final Discreto */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-stone-200"></div>
          <span className="text-[8px] font-bold uppercase tracking-[0.6em] text-stone-300">Resistência Industrial</span>
          <div className="h-px w-8 bg-stone-200"></div>
        </div>

      </div>

      {/* Ajuste de escala das setas e bullets */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          transform: scale(0.4);
          opacity: 0.3;
          transition: all 0.3s;
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev {
          opacity: 0.8;
        }
        .swiper-pagination-bullet {
          background: white !important;
          width: 6px;
          height: 6px;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #047857 !important;
          width: 18px;
          border-radius: 4px;
          opacity: 1;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev { display: none; }
        }
      `}</style>
    </section>
  );
};

export default MadeiraEucaliptoAparelhada;