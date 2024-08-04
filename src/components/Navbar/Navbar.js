import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div id='navbar-desktop'>
        <nav className='navbar navbar-expand fixed-top bg-light'>
          <div className="container">
            <Link className="navbar-brand" to="header" smooth={true} duration={500}>
              <img src="imgs/logo-sr-garotinho.jpg" 
                alt="Logomarca Senhor Garotinho" 
                width={'70'}/>  
            </Link>    
            <ul className='navbar-nav'>
                <li className='nav-item'><Link className='nav-link' to="header" smooth={true} duration={500}>Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to="servicos" smooth={true} duration={500}>Serviços</Link></li>
                <li className='nav-item'><Link className='nav-link' to="depoimentos" smooth={true} duration={500}>Depoimentos</Link></li>
                <li className='nav-item'><Link className='nav-link' to="contato" smooth={true} duration={500}>Contato</Link></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar