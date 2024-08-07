import React, { useContext } from 'react'
import './Contato.css'
import { ThemeContext } from '../../theme/Theme'
import ButtonCTA from '../Itens/ButtonCTA';

const Contato = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id='contato' className='py-5 text-center'>
      <h2 className={theme === 'dark' ? 'titulo-section-dark' : 'titulo-section-light'}>Entre em contato conosco</h2>
      <div className="container">
        <div className="d-flex justify-content-around flex-row flex-wrap">
          <div className="d-flex justify-content-center align-items-center flex-column col-xs-12 col-md-6 my-5">
            <h2 className='text-center my-3'>Faça-nos uma visita</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9022417936626!2d-38.59224652412393!3d-3.8311479437053024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753f6f4ba77db%3A0x61b54788b5873429!2sL%C3%A1tica%20Store!5e0!3m2!1spt-BR!2sbr!4v1723039315381!5m2!1spt-BR!2sbr" 
              allowfullscreen="" 
              style={{border:0}} 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
          <div className="d-flex justify-content-center flex-column col-xs-12 col-md-6 my-5">
            <div className="endereco-barbearia">
              <h2>Endereço </h2>
              <p>R. Miguel de Aragão, 112g </p><p>Quadra 02 Bloco J</p><p>Aracapé, Fortaleza - CE, 60765-065</p>
            </div>
            <div className="redes-contatos pt-2">
              <h2>Nossas redes sociais</h2>
              <p>Visite nosso Instagram <a target='_blank' href="https://www.instagram.com/srgarotinho1/" className={`btn btn-instagram`}><i class="bi bi-instagram"></i></a></p>
              <p>Chama no WhatsApp <a target='_blank' href="https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual" className={`btn btn-whatsapp`}><i class="bi bi-whatsapp"></i></a></p>
              <p>Nosso telefone <a target='_blank' style={{textDecoration:"none"}} href="tel:085988708195">(85) 98870-8195</a></p>
            </div>
            <div className="col-12 d-flex justify-content-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato