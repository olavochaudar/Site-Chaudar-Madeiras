import React from 'react'

const NavBar = () => {
  const cards = [
    {
      titulo: "Frete rápido",
      descricao: "Logística ágil e eficiente, com os melhores preços para a sua região.",
      // Ícone de caminhão (frete)
      icone: (
        <svg className="w-8 h-8 text-[#5d4037]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1v-3h7" />
        </svg>
      )
    },
    {
      titulo: "Atendimento",
      descricao: "Suporte especializado para entender as necessidades do seu projeto.",
      // Ícone de usuário/suporte
      icone: (
        <svg className="w-8 h-8 text-[#5d4037]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      titulo: "Procedência",
      descricao: "Madeira de reflorestamento com garantia de origem sustentável.",
      // Ícone de árvore/folha
      icone: (
        <svg className="w-8 h-8 text-[#5d4037]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      titulo: "Qualidade",
      descricao: "Cortes precisos em pinus e eucalipto, com rigor industrial.",
      // Ícone de selo/qualidade
      icone: (
        <svg className="w-8 h-8 text-[#5d4037]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      {/* Grid: 1 coluna no mobile, 2 em tablets e 4 no desktop */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="group p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center"
          >
            {/* Ícone com fundo arredondado discreto */}
            <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-50 transition-colors">
              {card.icone}
            </div>

            {/* Título: mesma fonte serifada da apresentação */}
            <h3 className="text-2xl font-serif text-black mb-4">
              {card.titulo}
            </h3>

            {/* Descrição: simples e organizada */}
            <p className="text-stone-500 text-sm leading-relaxed font-medium">
              {card.descricao}
            </p>

            {/* Detalhe marrom no final do card */}
            <div className="mt-8 w-8 h-1 bg-[#5d4037] opacity-20 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"></div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default NavBar;