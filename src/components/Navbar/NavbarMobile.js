import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const NavbarMobile = () => {

  return (
    <div id='navbar-mobile'>
        <nav class="navbar navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <a className="navbar-brand">
              <img width={50} src="imgs/logo-sr-garotinho.jpg" alt="Logomarca Senhor Garotinho" />  
            </a>   
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className='nav-link'><Link data-bs-dismiss="offcanvas" to="header" smooth={true} duration={500}>Home</Link></li>
                    <li className='nav-link'><Link data-bs-dismiss="offcanvas" to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                    <li className='nav-link'><Link data-bs-dismiss="offcanvas" to="depoimentos" smooth={true} duration={500}>Depoimentos</Link></li>
                    <li className='nav-link'><Link data-bs-dismiss="offcanvas" to="contato" smooth={true} duration={500}>Contato</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavbarMobile