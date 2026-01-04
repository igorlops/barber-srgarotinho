import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";
import ImageGallery from "./ImageGallery"
import ButtonCTA from "./ButtonCTA";

export const GalleryImages = () => {
    const galeriaServicos = [
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho.jpeg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_social.jpeg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_rauan.jpeg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_kaio.jpeg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_junior.jpeg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_degrade.jpeg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_antes_depois.jpg" },
        { "image_cliente": "imgs/cliente_barbearia_sr_garotinho_angelica.jpeg" },
        { "image_cliente": "imgs/clien.jpg" },
    ];

    const { theme } = useContext(ThemeContext);

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Portfólio</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4 font-premium">Nossos Clientes</h2>
                <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galeriaServicos.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-800 border-4 border-slate-800 hover:border-orange-500 transition-all duration-500 shadow-xl"
                    >
                        <ImageGallery img={item.image_cliente} alt={`Trabalho da Barbearia ${index + 1}`} />

                        {/* Overlay with info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-orange-500 font-bold">#BarbaEEstilo</span>
                                <p className="text-white text-sm">Transformação realizada no Sr. Garotinho</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-16" data-aos="fade-up">
                <ButtonCTA href="https://www.instagram.com/srgarotinho1/">
                    Siga-nos no Instagram
                </ButtonCTA>
            </div>
        </div>
    )
}
