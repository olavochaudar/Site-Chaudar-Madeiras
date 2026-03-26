import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { nome: 'Início', id: 'inicio' },
    { nome: 'Quem somos', id: 'quem-somos' },
    { nome: 'Produtos', id: 'produtos' },
    { nome: 'Contato', id: 'contato' },
  ];

  return (
    // Aumentei um pouco a altura do header de h-20 para h-24 para acomodar melhor a logo vertical
    <section className='fixed top-0 left-0 w-full h-24 bg-white/90 backdrop-blur-md z-[100] border-b border-stone-200'>
      <div className='max-w-7xl mx-auto h-full px-6 flex items-center justify-between'>

        {/* Logo - Ajustada para ser maior */}
        <div className='flex items-center h-full py-2'>
          <a href="#inicio" className="transition-transform hover:scale-105">
            <img
              src="vore.png"
              alt="Chaudar Madeiras Logo"
              // Aumentamos para h-20 (80px) no mobile e h-24 (96px) no desktop
              className="h-20 md:h-24 w-auto object-contain"
            />
          </a>
        </div>

        <div className='flex items-center'>
          {/* Menu de navegação */}
          <ul className={`
            fixed md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent
            flex flex-col md:flex-row items-center gap-8 p-10 md:p-0
            transition-all duration-300 ease-in-out shadow-xl md:shadow-none
            ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}
          `}>
            {menuItems.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className='text-stone-700 font-medium text-lg md:text-base hover:text-emerald-700 transition-colors duration-300 uppercase tracking-wider md:normal-case'
                >
                  {item.nome}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Botão hambúrguer */}
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