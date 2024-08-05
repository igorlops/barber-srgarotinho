import React from 'react'
import './Depoimentos.css'

const Depoimentos = () => {
  const avaliacoes_google = [
    {
      "autor":"Cláudio Igor",
      "comentario":"Ótimo profissional, atendimento com excelência!!",
      "imagem":"./imgs/depoimento_sr_garotinho_igor.png",
      "link":"https://g.co/kgs/HrGb6KC",
      "stars":5
    },
    {
      "autor":"Natanael Peres",
      "comentario":"Se garante demais, ótimo atendimento e rapidez e qualidade!",
      "imagem":"./imgs/depoimento_sr_garotinho_natan.png",
      "link":"https://g.co/kgs/Htd2Esm",
      "stars":5
    },
    {
      "autor":"DK Zera",
      "comentario":"Ótimo atendimento.recomendo👏👏",
      "imagem":"./imgs/depoimento_sr_garotinho_dk_zera.png",
      "link":"https://g.co/kgs/y6tfQg1",
      "stars":5
    },
    {
      "autor":"Camila de Morais",
      "comentario":"Top demais!",
      "imagem":"./imgs/depoimento_sr_garotinho_camila.png",
      "link":"https://g.co/kgs/3CxE1wj",
      "stars":5
    },
    {
      "autor":"Joaquim Oliveira",
      "comentario":"Excelente atendimento  !!!",
      "imagem":"./imgs/depoimento_sr_garotinho_joaquim.png",
      "link":"https://g.co/kgs/zizYYTz",
      "stars":5
    },
    {
      "autor":"Thamyres Silva",
      "comentario":"Ambiente ótimo",
      "imagem":"./imgs/depoimento_sr_garotinho_thamirys.png",
      "link":"https://g.co/kgs/vw8AfWo",
      "stars":5
    }
  ]

  return (
    <div id='depoimentos' className='py-5 text-center'>
      <h2 className='titulo-section'>O que falaram sobre nós</h2>

      <p>Segundo o Google Negócio, essas são as minhas avaliações:</p>
      <div className='avaliacoes-google'>
          <div className="container">
            <div className="d-flex justify-content-around flex-wrap">
            {avaliacoes_google.map(element => (
              <>
                <div className="avaliacaosingle card my-3 p-2 col-xs-12 col-sm-6 col-md-3">
                  <div className="img-perfil-depoimento d-flex justify-content-center d-flex">
                    <img src={element.imagem} alt="Não funcionou" />
                    <div className="titulo-avaliacao d-flex text-center flex-column">
                      <h6>{element.autor}</h6>
                      <div className="estrelas-depoimentos text-warning flex-row justify-content-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="comentario-depoimento">
                    <p>{element.comentario}</p>
                  </div>
                  <div className="stars">
                    <a href={element.link}>Ver mais</a>
                  </div>
                </div>
              </>
            ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Depoimentos