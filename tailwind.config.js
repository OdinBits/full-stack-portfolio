/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        fjalla: ['Fjalla One']
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        soft:'#f2f2f2'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'elegant': '0 7px 18px 0 rgba(2, 118, 179, 0.13)',
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        'xs': '320px',
        'sm': '480px',
        'md': '640px',
        'lg': '800px',
        'xl': '960px',
        '2xl': '1120px',
        '3xl': '1280px',
        '4xl': '1440px',
        'max-xs': { 'max': '319px' },
        'max-sm': { 'max': '479px' },
        'max-md': { 'max': '639px' },
        'max-lg': { 'max': '799px' },
        'max-xl': { 'max': '959px' },
        'max-2xl': { 'max': '1119px' },
        'max-3xl': { 'max': '1279px' },
        'max-4xl': { 'max': '1439px' },
        'wide': '1600px', // Updated the wide screen to 1600px for a logical increase
      },
      width: {
        '50': '12.5rem', // Custom width value
        // Add other custom widths here as needed
      },
    },
  },
  plugins: [],
};
