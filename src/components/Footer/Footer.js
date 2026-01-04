import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6">
          <img
            width={60}
            src="imgs/logo-sr-garotinho.jpg"
            alt="Logomarca Senhor Garotinho"
            className="rounded-full border border-orange-500/30"
          />
          <div className="space-y-2">
            <p className="text-slate-400 text-sm">
              Copyright © {new Date().getFullYear()} <span className="text-white font-bold">Barbearia Sr. Garotinho</span>
            </p>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
              Todos os direitos reservados
            </p>
          </div>

          <div className="flex gap-4 text-slate-400">
            <a
              href="https://www.instagram.com/srgarotinho1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-2xl"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://wa.me/5585988708195"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-2xl"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
