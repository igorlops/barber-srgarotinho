import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { ThemeContext } from '../../theme/Theme' 

const Navbar = () => {
  
  const {theme, setTheme} = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div id='navbar-desktop'>
        <nav className={`navbar navbar-expand fixed-top ${isScrolled ? (theme === 'dark' ? 'bg-dark border-bottom' : 'bg-light-subtle border-bottom') : 'bg-transparent'} border-body`} style={{transition:".5s"}}>
          <div className="container">
            <Link className="navbar-brand" to="header" smooth={true} duration={500}>
              <img src="imgs/logo-sr-garotinho.jpg" 
                alt="Logomarca Senhor Garotinho" 
                width={'70'}/>  
            </Link>    
            <ul className='navbar-nav'>
                <li className='nav-item'><Link className={`nav-link ${theme === 'dark' ? 'link-dark' : (isScrolled ? ('') : ('text-white'))}`} to="header" smooth={true} duration={500}>Home</Link></li>
                <li className='nav-item'><Link className={`nav-link ${theme === 'dark' ? 'link-dark' : (isScrolled ? ('') : ('text-white'))}`} to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                <li className='nav-item'><Link className={`nav-link ${theme === 'dark' ? 'link-dark' : (isScrolled ? ('') : ('text-white'))}`} to="depoimentos" smooth={true} duration={500}>Depoimentos</Link></li>
                <li className='nav-item'><Link className={`nav-link ${theme === 'dark' ? 'link-dark' : (isScrolled ? ('') : ('text-white'))}`} to="contato" smooth={true} duration={500}>Contato</Link></li>
                <li>
                  <button className="btn btn-primary" onClick={handleThemeChange}>
                    {theme === 'dark' ? <i class="bi bi-sun"></i> : <i class="bi bi-moon"></i>}
                  </button>
                </li>
            </ul>
            
          </div>
        </nav>
    </div>
  )
}

export default Navbar