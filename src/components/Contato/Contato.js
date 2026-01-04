import React from 'react'
import ButtonCTA from '../Itens/ButtonCTA';

const Contato = () => {
  return (
    <section id='contato' className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Localização</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4 font-premium">Onde nos Encontrar</h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Map Column */}
          <div className="flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800" data-aos="fade-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9022417936626!2d-38.59224652412393!3d-3.8311479437053024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753f6f4ba77db%3A0x61b54788b5873429!2sL%C3%A1tica%20Store!5e0!3m2!1spt-BR!2sbr!4v1723039315381!5m2!1spt-BR!2sbr"
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barbearia Sr. Garotinho"
            ></iframe>
          </div>

          {/* Info Column */}
          <div className="flex-1 flex flex-col justify-between py-4" data-aos="fade-left">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-600/20 text-orange-500 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>
                  Endereço
                </h3>
                <div className="pl-13 text-slate-300 text-lg leading-relaxed">
                  <p>R. Miguel de Aragão, 112g</p>
                  <p>Quadra 02 Bloco J</p>
                  <p>Aracapé, Fortaleza - CE, 60765-065</p>
                </div>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-600/20 text-orange-500 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <i className="bi bi-chat-dots-fill"></i>
                  </span>
                  Conecte-se
                </h3>
                <div className="pl-13 flex gap-4">
                  <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/srgarotinho1/"
                    className="w-14 h-14 flex items-center justify-center bg-slate-800 text-white rounded-2xl hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 text-2xl shadow-lg shadow-black/20"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual"
                    className="w-14 h-14 flex items-center justify-center bg-slate-800 text-white rounded-2xl hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300 text-2xl shadow-lg shadow-black/20"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-orange-600/20 text-orange-500 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  Telefone
                </h3>
                <div className="pl-13">
                  <a
                    href="tel:085988708195"
                    className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    (85) 98870-8195
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <ButtonCTA href="https://wa.me/5585988708195?text=Ola,%20gostaria%20de%20renovar%20meu%20visual">
                Falar Conosco Agora
              </ButtonCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
