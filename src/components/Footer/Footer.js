import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/Theme';

function Footer() {

  const { theme } = useContext(ThemeContext)
  return (
    <footer className={`footer text-center border-top ${theme === 'dark' ? 'bg-dark' : 'bg-light-subtle'} py-3`}>
      <div className="container">
        <p className="small">Copyright © {new Date().getFullYear()} Sr. Garotinho</p>
        <p className="small">Todos os direitos reservados</p>
      </div>
    </footer>

  );
}

export default Footer;
