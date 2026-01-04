import React, { useContext, useState } from 'react'
import { Link } from 'react-scroll';
import { ThemeContext } from '../../theme/Theme';

const NavbarMobile = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div id='navbar-mobile' className="md:hidden">
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/90 backdrop-blur-lg border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="home" smooth={true} duration={500} className="flex items-center gap-2">
            <img width={40} src="imgs/logo-sr-garotinho.jpg" alt="Logomarca Senhor Garotinho" className="rounded-full border border-orange-500/50" />
            <span className="text-white font-bold tracking-tighter">SR. GAROTINHO</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 top-[65px] bg-slate-950 z-[90] transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-8 space-y-6 h-full">
            {['home', 'servicos', 'depoimentos', 'contato'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="text-3xl font-black text-white uppercase tracking-tighter hover:text-orange-500 transition-colors"
              >
                {item}
              </Link>
            ))}

            <div className="pt-8 border-t border-white/10 flex items-center gap-4">
              <button
                onClick={handleThemeChange}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-800 text-white text-xl shadow-lg"
              >
                {theme === 'dark' ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
              </button>

              <a
                href="https://wa.me/5585988708195"
                className="flex-1 py-4 bg-orange-600 text-white text-center font-bold rounded-2xl shadow-lg shadow-orange-900/20"
              >
                Agende Agora
              </a>
            </div>

            <div className="mt-auto pb-10">
              <p className="text-slate-500 text-sm">© 2024 Barbearia Sr. Garotinho</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarMobile
