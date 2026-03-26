import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-6 border-t-8 border-[#5d4037]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">

          {/* Coluna 1: Logo e Identidade */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
              Chaudar <span className="text-emerald-500 italic">Madeiras</span>
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Excelência e tradição no mercado de madeiras brutas e beneficiadas. Qualidade que vem da terra para o seu projeto.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos (Navegação) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-serif text-xl italic mb-6">Navegação</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.2em]">
              <li><a href="#inicio" className="hover:text-emerald-500 transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-emerald-700 transition-colors">Quem Somos</a></li>
              <li><a href="#produtos" className="hover:text-emerald-500 transition-colors">Produtos</a></li>
              <li><a href="#trabalho" className="hover:text-emerald-500 transition-colors">Nosso Trabalho</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-serif text-xl italic mb-6">Fale Conosco</h3>
            <ul className="space-y-4 text-sm font-medium text-stone-400">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                +55 (15) 99612-5662
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                contato@chaudarmadeiras.com.br
              </li>
            </ul>,

          </div>

          {/* Coluna 4: Redes Sociais */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-serif text-xl italic mb-6">Redes Sociais</h3>
            <div className="flex gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/chauddarmadeiras2022"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center md:items-start"
              >
                <span className="text-xs font-black uppercase tracking-widest group-hover:text-emerald-500 transition-colors">Instagram</span>
                <span className="text-[10px] text-stone-600">@chaudarmadeiras2022</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5515996125662"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center md:items-start"
              >
                <span className="text-xs font-black uppercase tracking-widest group-hover:text-emerald-500 transition-colors">WhatsApp</span>
                <span className="text-[10px] text-stone-600">Falar agora</span>
              </a>
            </div>

            {/* Detalhe Marrom Inferior */}
            <div className="mt-8 w-12 h-1 bg-[#5d4037]"></div>
          </div>
        </div>

        {/* Barra de Copyright Final */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">
          <p>© 2024 Chaudar Madeiras - Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="text-emerald-900">Pinus</span>
            <span className="text-[#5d4037]">•</span>
            <span className="text-emerald-900">Eucalipto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;