import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mapeamento dos nomes para os IDs (sem acento e com hífen)
  const menuItems = [
    { nome: 'Início', id: 'inicio' },
    { nome: 'Quem Somos', id: 'quem-somos' },
    { nome: 'Produtos', id: 'produtos' },
    { nome: 'Contato', id: 'contato' },
  ];

  return (
    <section className='fixed top-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md z-[100] border-b border-stone-200'>
      <div className='max-w-7xl mx-auto h-full px-6 flex items-center justify-between'>

        {/* Logo */}
        <h1 className='text-2xl md:text-3xl font-bold tracking-tighter text-stone-800 cursor-pointer hover:text-emerald-800 transition-colors'>
          <a href="#inicio">Chaudar<span className='text-emerald-700'>Madeiras</span></a>
        </h1>

        <div className='flex items-center'>
          {/* Menu de Navegação */}
          <ul className={`
            fixed md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent
            flex flex-col md:flex-row items-center gap-8 p-10 md:p-0
            transition-all duration-300 ease-in-out shadow-xl md:shadow-none
            ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}
          `}>
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)} // Fecha o menu mobile ao clicar
                  className='text-stone-700 font-medium text-lg md:text-base hover:text-emerald-700 transition-colors duration-300 uppercase tracking-wider md:normal-case'
                >
                  {item.nome}
                </a>
                {/* Linha animada no Hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Botão Hamburger */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='grid h-10 w-10 cursor-pointer justify-items-center items-center md:hidden ml-4 group'
          >
            <div className='flex flex-col gap-1.5'>
              <div className={`h-0.5 w-6 bg-stone-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`h-0.5 w-6 bg-stone-800 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`h-0.5 w-6 bg-stone-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;