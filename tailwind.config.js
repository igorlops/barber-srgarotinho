/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#f97316', // Orange 500
                    DEFAULT: '#ea580c', // Orange 600
                    dark: '#c2410c', // Orange 700
                },
                secondary: '#1f2937', // Gray 800
                accent: '#fbbf24', // Amber 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                premium: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'glow': 'glow 2s infinite alternate',
                'slow-zoom': 'slowZoom 20s infinite alternate',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(234, 88, 12, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(234, 88, 12, 0.6)' },
                },
                slowZoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                }
            }
        },
    },
    plugins: [],
}
