import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";


export default function ButtonCTA({href,children}){
    const {theme} = useContext(ThemeContext);
    return (
        <a 
            href={href}
            target="_blank"
            data-aos="fade-right" 
            data-aos-delay="2000" 
            data-aos-easing="ease-in-sine" 
            data-aos-duration="1000" 
            type="button" 
            className={`btn ${theme === 'dark' ? 'btn-warning-dark' : 'btn-warning-light'}`}>
            {children}
        </a>
    );
}