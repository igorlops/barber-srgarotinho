import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <div id='contato' className='py-5 text-center'>
      <h2 className='titulo-section'>Entre em contato conosco</h2>
      <h6>Nos visite</h6>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9018733355592!2d-38.59466671513639!3d-3.831227133740984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7535844cf2041%3A0xc0dde312c2e4ed74!2sBarbearia%20Sr%20Garotinho!5e0!3m2!1spt-BR!2sbr!4v1707020392885!5m2!1spt-BR!2sbr" 
        width="400" 
        height="450" 
        style={{border:0}}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
          
      </iframe>
      <div className="endereco-barbearia">
        <h2>Endereço </h2>
        <p>Rua Miguel Aragão 112E - Aracapé</p>
      </div>
      <div className="redes-contatos">
        <p>Nosso Instagram: <a href="https://www.instagram.com/srgarotinho1/">Instagram</a></p>
        <p>Nosso email: <a href='mailto:'>email</a></p>
        <p>Nosso telefone: <a href="tel:988708195">(85) 98870-8195</a></p>
      </div>
    </div>
  )
}

export default Contato