// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // Añade esta línea para incluir todos los archivos dentro de app
    './src/pages/**/*.{js,ts,jsx,tsx}',    // Rutas a los archivos de las páginas
    './src/components/**/*.{js,ts,jsx,tsx,css}', // Rutas a los archivos de componentes
  ],
  theme: {
    extend: {
      colors: {
        'semi-black': 'rgba(0, 0, 0, 0.8)', // Ejemplo de color personalizado
      },
    },
  },
  plugins: [],
}
