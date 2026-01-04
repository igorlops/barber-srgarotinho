import { useContext, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ThemeContext } from '../../theme/Theme';
import { GalleryImages } from '../Itens/GalleryImages';
import ButtonCTA from '../Itens/ButtonCTA';

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, [])

  const listServicos = [
    {
      "title": "Corte Social",
      "detalhes": "Corte clássico e elegante, ideal para diversas ocasiões e ambientes profissionais.",
      "icon": "✂️"
    },
    {
      "title": "Corte Degradê",
      "detalhes": "Corte moderno e versátil, com efeito de transição suave, volume e movimento.",
      "icon": "💈"
    },
    {
      "title": "Barba Simples",
      "detalhes": "Manutenção profissional da barba, com alinhamento e remoção de pelos excedentes.",
      "icon": "🪒"
    },
    {
      "title": "Barba Desenhada",
      "detalhes": "Design personalizado da barba, realçando os traços faciais com precisão.",
      "icon": "🧔"
    },
    {
      "title": "Sobrancelhas",
      "detalhes": "Design preciso das sobrancelhas, harmonizando o rosto e limpando o olhar.",
      "icon": "✨"
    },
    {
      "title": "Combo VIP",
      "detalhes": "Experiência completa: Cabelo, Barba e Sobrancelha com toalha quente.",
      "icon": "👑"
    }
  ]

  const { theme } = useContext(ThemeContext);

  return (
    <section id='servicos' className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">O que fazemos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4 font-premium">Nossos Serviços</h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {listServicos.map((servico, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Glow Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl group-hover:bg-orange-600/20 transition-all duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {servico.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{servico.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {servico.detalhes}
                </p>
                <div className="w-10 h-1 bg-orange-600/30 mx-auto group-hover:w-24 group-hover:bg-orange-600 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Section */}
      <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/70 z-10 backdrop-blur-[2px]"></div>
          <img
            src="/imgs/backattachment.png"
            alt="Background"
            className="w-full h-full object-cover fixed-background"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight font-premium">
              Transforme seu visual, <br />
              <span className="text-orange-500 uppercase italic">Eleve sua Autoestima</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 opacity-90">
              Faça parte do nosso time de homens que valorizam a excelência.
              Entre em contato agora e garanta sua vaga.
            </p>
            <ButtonCTA href={'https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual'}>
              Agendar Experiência
            </ButtonCTA>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-24">
        <GalleryImages />
      </div>
    </section>
  )
}

export default Services
