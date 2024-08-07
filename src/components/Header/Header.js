import React, { useContext, useEffect } from 'react'
import './Header.css'
import Aos from 'aos';
import { ThemeContext } from '../../theme/Theme';
import ButtonCTA from '../Itens/ButtonCTA';

const Header = () => {
  useEffect(()=>{
    Aos.init()
  },[]);

  const {theme } = useContext(ThemeContext);
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
          <ButtonCTA href="https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual">Entrar em contato</ButtonCTA>
        </div>
      </div>
    </header>
  )
}

export default Header