import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);   
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id='navbar-desktop'>
        <nav className={`navbar navbar-expand fixed-top ${isScrolled ? 'bg-dark' : 'bg-transparent'}`} style={{transition:".5s"}}>
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