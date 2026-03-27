import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carrossel = () => {
  // Array de objetos com imagem e nome correspondente
  const produtos = [
    {
      img: "/TabuadoPinusConstruçãoCivil.jpeg", // Lembre-se de verificar a extensão .jpeg
      nome: "Tabuado Pinus Construção Civil"
    },
    {
      img: "/TabuadoPinus.jpeg",
      nome: "Tabuado de Pinus"
    },
    {
      img: "/TabuadoPinu.jpeg",
      nome: "Tabuado Pinus"
    },
    {
      img: "/tabuaDePinus.jpeg",
      nome: "Tábua de Pinus"
    },
    {
      img: "/PinusSecoEmEstufa.jpeg",
      nome: "Pinus Seco em Estufa"
    },
    {
      img: "/PinusSecoAoTempo.jpeg",
      nome: "Pinus Seco ao Tempo"
    },
    {
      img: "/Pinus.jpeg",
      nome: "Pinus de Alta Qualidade"
    }
  ];

  return (
    <section id="produtos" className="bg-white py-24 px-6 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Título da seção */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#5d4037] mx-auto mb-6"></div>
          <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">
            Nossos <span className="text-emerald-700 italic">Produtos</span>
          </h2>
          <p className="mt-4 text-stone-400 text-[10px] font-black uppercase tracking-[0.4em]">
            Padrão e Qualidade Chaudar
          </p>
        </div>

        {/* Carrossel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1.2}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-20 product-slider"
        >
          {produtos.map((produto, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-stone-50 rounded-[2.5rem] overflow-hidden border border-stone-100 transition-all duration-500 hover:shadow-2xl">

                {/* Imagem do produto */}
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src={produto.img}
                    alt={produto.nome}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Legenda Correspondente */}
                <div className="p-8 text-center bg-white min-h-[140px] flex flex-col justify-center items-center">
                  <h3 className="text-xl md:text-2xl font-serif leading-tight text-stone-900 transition-colors group-hover:text-emerald-700">
                    {produto.nome}
                  </h3>

                  {/* Detalhe marrom que expande no hover */}
                  <div className="w-8 h-1 bg-[#5d4037] mx-auto mt-4 transition-all duration-500 group-hover:w-16"></div>

                  <span className="text-[9px] font-black text-stone-300 uppercase tracking-widest mt-4">
                    Serraria Chaudar
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Customização de cores das setas e pontos */}
      <style jsx global>{`
        .product-slider .swiper-button-next,
        .product-slider .swiper-button-prev {
          color: white !important;
          background: #1c1917;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          transform: scale(0.7);
          transition: all 0.3s;
        }
        .product-slider .swiper-button-next:hover,
        .product-slider .swiper-button-prev:hover {
          background: #047857;
        }
        .product-slider .swiper-pagination-bullet-active {
          background: #047857 !important;
          width: 20px;
          border-radius: 10px;
        }
        @media (max-width: 768px) {
          .product-slider .swiper-button-next,
          .product-slider .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Carrossel;