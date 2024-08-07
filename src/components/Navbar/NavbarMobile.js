import React, { useContext } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { ThemeContext } from '../../theme/Theme'; // Assuming your theme folder is named 'theme'

const NavbarMobile = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div id='navbar-mobile'>
        <nav class={`navbar ${theme === 'dark' ? "navbar-dark bg-dark border-bottom " : "bg-light-subtle border-bottom "} fixed-top border-body`}>
          <div class="container-fluid">
            <a className="navbar-brand">
              <img width={50} src="imgs/logo-sr-garotinho.jpg" alt="Logomarca Senhor Garotinho" />  
            </a>   
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`offcanvas offcanvas-end text-${theme === 'dark' ? "bg-dark" : "bg-light"}`} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Barbearia Sr. Garotinho</h5>
                <button type="button" class={`btn-close ${theme === 'dark' ? 'btn-close-white' : 'btn-close-black'}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className='nav-link'><Link className={`nav-link ${theme === 'dark' ? 'text-white' : 'text-dark'}`} data-bs-dismiss="offcanvas" to="header" smooth={true} duration={500}>Home</Link></li>
                    <li className='nav-link'><Link className={`nav-link ${theme === 'dark' ? 'text-white' : 'text-dark'}`} data-bs-dismiss="offcanvas" to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                    <li className='nav-link'><Link className={`nav-link ${theme === 'dark' ? 'text-white' : 'text-dark'}`} data-bs-dismiss="offcanvas" to="depoimentos" smooth={true} duration={500}>Depoimentos</Link></li>
                    <li className='nav-link'><Link className={`nav-link ${theme === 'dark' ? 'text-white' : 'text-dark'}`} data-bs-dismiss="offcanvas" to="contato" smooth={true} duration={500}>Contato</Link></li>
                    <li>
                      <button data-bs-dismiss="offcanvas" className="btn btn-secondary" onClick={handleThemeChange}>
                        {theme === 'dark' ? <i class="bi bi-sun"></i> : <i class="bi bi-moon"></i>}
                      </button>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavbarMobile