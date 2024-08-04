import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
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
          <h1>Barbearia <br /><span>O Sr. Garotinho</span></h1>
          <p>Venha renovar seu visual. Trabalhamos com excelência e agilidade</p>
          <button type="button" class="btn btn-warning">Entrar em contato</button>
        </div>
      </div>
    </header>
  )
}

export default Header