import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Conteúdo do rodapé, como links, copyright, etc. */}
          <div className="col-md-4">
            <h4>Sobre Nós</h4>
            <p>Breve descrição da sua empresa.</p>
          </div>
          <div className="col-md-4">
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociais</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
