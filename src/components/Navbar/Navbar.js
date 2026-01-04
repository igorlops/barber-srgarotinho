import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { ThemeContext } from '../../theme/Theme'

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 hidden md:block ${isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="relative overflow-hidden rounded-full border-2 border-orange-600/50 group-hover:border-orange-500 transition-colors duration-300">
            <img
              src="imgs/logo-sr-garotinho.jpg"
              alt="Logomarca Senhor Garotinho"
              className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="text-white font-premium font-bold tracking-tighter text-xl group-hover:text-orange-500 transition-colors duration-300">
            SR. GAROTINHO
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {['home', 'servicos', 'depoimentos', 'contato'].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-slate-300 hover:text-orange-500 font-semibold text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 relative group"
                  activeClass="text-orange-500"
                  spy={true}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-8 border-l border-white/10">
            <button
              onClick={handleThemeChange}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg"
              title="Alternar Tema"
            >
              {theme === 'dark' ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
            </button>

            <a
              href="https://wa.me/5585988708195"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-900/20 active:scale-95"
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
