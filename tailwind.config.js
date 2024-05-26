/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d0d",
        light: "#ffffff",
        first: "#0d0d0d",
        second: "#30004a",
        content: "#546aff",
        firstlight: "#001287",
        darkgradient: "#010839",
        yamur: "#8a98fe",
        firstdark: '#0e0933',
        reddo: "#840b0b",
        darkblue: "#0f0825",
      },
    },
  },
  plugins: [],
};
