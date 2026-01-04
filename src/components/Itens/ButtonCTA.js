import { useContext } from "react";
import { ThemeContext } from "../../theme/Theme";

export default function ButtonCTA({ href, children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="600"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 active:scale-95 shadow-lg shadow-orange-900/20 overflow-hidden"
        >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-orange-400 to-orange-600 group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-2">
                {children}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </span>
        </a>
    );
}
