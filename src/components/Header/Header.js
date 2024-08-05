import React, { useEffect } from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
const Header = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <header id="home" className="header-container">
      <div className="image-wrapper">

        <div className="overlay"></div>
        <img
          src="imgs/header-barbearia.jpg"
          alt="Imagem Projeto de Arquitetura casa elegante"
          className="header-image"
        />
        <div className='header-titulo'>
          <h1 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000">Barbearia <br /><span>O Sr. Garotinho</span></h1>
          <p data-aos="fade-right" data-aos-delay="1000" data-aos-easing="ease-in-sine" data-aos-duration="1000">Venha renovar seu visual. Trabalhamos com excelência e agilidade</p>
          <button data-aos="fade-right" data-aos-delay="2000" data-aos-easing="ease-in-sine" data-aos-duration="1000" type="button" class="btn btn-warning">Entrar em contato</button>
        </div>
      </div>
    </header>
  )
}

export default Header