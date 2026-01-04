import React, { useContext, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../../theme/Theme';
import ButtonCTA from '../Itens/ButtonCTA';

const Header = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const { theme } = useContext(ThemeContext);

  return (
    <header id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center pt-20">
      {/* Background with parallax effect or just high-quality image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10"></div>
        <img
          src="imgs/header-barbearia.jpg"
          alt="Barbearia Sr. Garotinho"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl">
          <div
            data-aos="fade-up"
            className="inline-block px-4 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-semibold text-sm tracking-wider uppercase backdrop-blur-sm"
          >
            A melhor experiência da região
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 font-premium"
          >
            Barbearia <br />
            <span className="text-gradient">O Sr. Garotinho</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          >
            Elevando o conceito de barbearia clássica com um toque moderno.
            Ambiente exclusivo, profissionais de elite e o cuidado que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="600">
            <ButtonCTA href="https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual">
              Agendar Horário
            </ButtonCTA>

            <a
              href="#servicos"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              Ver Nossos Serviços
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8" data-aos="fade-up" data-aos-delay="800">
            <div className="flex flex-col text-center">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Anos de Exp.</span>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="flex flex-col text-center">
              <span className="text-3xl font-bold text-white">5k+</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Clientes</span>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="flex flex-col text-center">
              <span className="text-3xl font-bold text-white">4.9/5</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Avaliação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}

export default Header
