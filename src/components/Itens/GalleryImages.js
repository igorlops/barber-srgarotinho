import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";
import ImageGallery from "./ImageGallery"
import ButtonCTA from "./ButtonCTA";

export const GalleryImages = () => {
      
    let galeriaServicos = [
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho.jpeg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_social.jpeg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_rauan.jpeg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_kaio.jpeg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_junior.jpeg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_degrade.jpeg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_antes_depois.jpg"
        },
        {
        "image_cliente":"imgs/cliente_barbearia_sr_garotinho_angelica.jpeg"
        },
        {
        "image_cliente":"imgs/clien.jpg"
        },
    ];
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container">
            <div className="my-5">
                <h2 className={theme === 'dark' ? 'titulo-section-dark' : 'titulo-section-light'}>Galeria de serviços</h2>
            </div>
            <div className="d-flex justify-content-around flex-wrap align-items-center">
            {galeriaServicos.map((image_galery,index) => (
                <div
                    data-aos="fade-up" 
                    data-aos-delay={index*300} 
                    data-aos-duration="1000"
                    key={image_galery.image_cliente}
                    style={{
                        width: "250px",
                        height: "250px",
                        overflow: "hidden", 
                        margin:"15px 0"
                    }}
                >
                    <ImageGallery img={image_galery.image_cliente} alt="Imagem da Barbearia" />
                </div>
            ))}
            </div>
            <div className="d-flex justify-content-center my-5">
                <ButtonCTA href="https://www.instagram.com/srgarotinho1/">Ver mais</ButtonCTA>
            </div>
        </div>
    )
}