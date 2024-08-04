import {useEffect} from 'react'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Card from 'react-bootstrap/Card'
const Services = () => {

  useEffect(()=>{
    AOS.init()
  },[])
  let listServicos = [
    {
      "title":"Corte social",
      "image":"./imgs/corteadulto.jpg",
      "detalhes":"",
      "preco":"20,00"
    },
    {
      "title":"Corte degradê",
      "image":"./imgs/degrade.jpg",
      "detalhes":"",
      "preco":"12,00"
    },
    {
      "title":"Barba Simples",
      "image":"./imgs/barba.jpg",
      "detalhes":"",
      "preco":"15,00"
    },
    {
      "title":"Barba Desenhada",
      "image":"./imgs/barba.jpg",
      "detalhes":"",
      "preco":"20,00"
    },
    {
      "title":"Sobrancelhas",
      "image":"./imgs/barba.jpg",
      "detalhes":"",
      "preco":"5,00"
    }
  ]
  
  let servicos_individuais = document.querySelectorAll('.servico-individual')
  let data_set_delay = 500
  servicos_individuais.forEach(element => {
    element.setAttribute('data-aos-delay',data_set_delay+=100)
  })

  return (
    <div id='services'>
      <div data-aos="fade-up" className='py-5'>
        <h1 className='text-center'>
          Serviços
        </h1>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {listServicos.map(servico => (
              <div className="servico-individual">

                <Card style={{ width: '18rem' }} className='mb-5'>
                  <div className="overlay-servicos" 
                    style={{
                      display:"none",
                      position:"absolute",
                      top:"0",
                      left:"0",
                      width:"100%",
                      height:"100%",
                      backgroundColor:"rgba(0,0,0,0.5)"
                    }}>  
                  </div>
                  <Card.Img variant="top" style={{objectFit:"cover"}} height="200px" src={servico.image} />
                  <Card.Body>
                    <Card.Title className='text-center'>{servico.title}</Card.Title>
                    <Card.Text >
                      {servico.detalhes}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
        ))}
      </div>
    </div>
  )
}

export default Services