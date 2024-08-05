import {useEffect} from 'react'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Card from 'react-bootstrap/Card'
import {ImageGallery} from '../Itens/ImageGallery'
import { GalleryImages } from '../Itens/GalleryImages';

const Services = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  let listServicos = [
    {
      "title":"Corte social",
      "detalhes":"Corte clássico e elegante, ideal para diversas ocasiões",
    },
    {
      "title":"Corte degradê",
      "detalhes":"Corte moderno e versátil, com efeito de volume e movimento.",
    },
    {
      "title":"Barba Simples",
      "detalhes":"Manutenção profissional da barba, com remoção de pelos excedentes.",
    },
    {
      "title":"Barba Desenhada",
      "detalhes":"Design personalizado da barba, realçando os traços faciais.",
    },
    {
      "title":"Sobrancelhas",
      "detalhes":"Design preciso das sobrancelhas, harmonizando o rosto.",
    }
  ]

  let servicos_individuais = document.querySelectorAll('.servico-individual')
  let data_set_delay = 500
  servicos_individuais.forEach(element => {
    element.setAttribute('data-aos-delay',data_set_delay+=100)
  })

  return (
    <div id='services'>
      <div data-aos="fade-up" data-aos-delay={500} data-aos-easing="ease-in-sine" data-aos-duration="1000" className='py-5'>
        <h2 className='text-center titulo-section'>
          Serviços
        </h2>
      </div>
      <div className="container my-5">
        <div className="d-flex flex-row flex-wrap justify-content-around">
          {listServicos.map((servico, index) => (
                <div className="servico-individual" data-aos="fade-up" data-aos-delay={(index+1)*500} data-aos-easing="ease-in-sine" data-aos-duration="1000">
                  <div style={{ width: '14rem' }} className='card bg-dark text-white'>
                    <div className='card-body'>
                      <div className='text-center card-title'>
                        <img src='imgs/poste-de-barbeiro.png' alt='ícone poste de barbeiro'/>
                        {servico.title}
                      </div>
                      <div className='card-text' >
                        {servico.detalhes}
                      </div>
                    </div>
                  </div>
                </div>
          ))}
        </div>
      </div>
      <div className='section-image-services' 
          style={{
              backgroundImage: `url('/imgs/backattachment.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              height: "500px",
              position: 'relative' /* Adicione position: relative ao elemento pai */
          }}>
        <div className="overlay-services" 
              style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems:'center'
              }}>
          <div className="container">
            <div className="d-flex justify-content-between flex-row w-100">
              <div className='col-6'></div>
              <div className="col-6 d-flex justify-content-center flex-column">
                <p className="overlay-text-services" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">Transforme seu visual, eleve sua autoestima.</p>
                <p className="overlay-text-services" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000">Faça parte do nosso time de homens de bom gosto.</p>
                <p className="overlay-text-services" data-aos="fade-right" data-aos-delay="2000" data-aos-duration="1000">Entre em contato e saiba mais sobre nossos serviços.</p>
                <button 
                  data-aos="fade-right" 
                  data-aos-delay="2500"
                  data-aos-duration="1000" 
                  type="button" 
                  class="btn btn-warning">
                    Entrar em contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GalleryImages/>
    </div>
  )
}

export default Services