import React from 'react'

const Depoimentos = () => {
  const avaliacoes_google = [
    {
      "autor": "Cláudio Igor",
      "comentario": "Ótimo profissional, atendimento com excelência!!",
      "imagem": "./imgs/depoimento_sr_garotinho_igor.png",
      "link": "https://g.co/kgs/HrGb6KC",
      "stars": 5
    },
    {
      "autor": "Natanael Peres",
      "comentario": "Se garante demais, ótimo atendimento e rapidez e qualidade!",
      "imagem": "./imgs/depoimento_sr_garotinho_natan.png",
      "link": "https://g.co/kgs/Htd2Esm",
      "stars": 5
    },
    {
      "autor": "DK Zera",
      "comentario": "Ótimo atendimento. recomendo 👏👏",
      "imagem": "./imgs/depoimento_sr_garotinho_dk_zera.png",
      "link": "https://g.co/kgs/y6tfQg1",
      "stars": 5
    },
    {
      "autor": "Camila de Morais",
      "comentario": "Top demais!",
      "imagem": "./imgs/depoimento_sr_garotinho_camila.png",
      "link": "https://g.co/kgs/3CxE1wj",
      "stars": 5
    },
    {
      "autor": "Joaquim Oliveira",
      "comentario": "Excelente atendimento !!!",
      "imagem": "./imgs/depoimento_sr_garotinho_joaquim.png",
      "link": "https://g.co/kgs/zizYYTz",
      "stars": 5
    },
    {
      "autor": "Thamyres Silva",
      "comentario": "Ambiente ótimo",
      "imagem": "./imgs/depoimento_sr_garotinho_thamirys.png",
      "link": "https://g.co/kgs/vw8AfWo",
      "stars": 5
    }
  ]

  return (
    <section id='depoimentos' className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4 font-premium">O Que Nossos Clientes Dizem</h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">Avaliado como um dos melhores no Google Business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avaliacoes_google.map((element, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/30 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={element.imagem}
                  className="w-16 h-16 rounded-full border-2 border-orange-600/50 p-0.5 object-cover"
                  alt={element.autor}
                />
                <div>
                  <h6 className="text-white font-bold text-lg">{element.autor}</h6>
                  <div className="flex text-orange-500 text-sm">
                    {[...Array(element.stars)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-orange-500/10 font-serif">"</span>
                <p className="text-slate-300 italic mb-6 relative z-10">
                  {element.comentario}
                </p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-800">
                <span className="text-xs text-slate-500 uppercase tracking-widest">Via Google Reviews</span>
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  Ver Original <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
