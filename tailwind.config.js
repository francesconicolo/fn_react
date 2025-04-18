/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Lantiquewhite: "#FEEEDFff",
        Dantiflashwhite: "#EEEEEEff",
        Lhunyadiyellow: "#FAC166ff",
        Dyaleblue: "#1D387Bff",
        Lfalured: "#741C1Cff",
        Dpennblue: "#141552ff",
      },
      fontFamily: {
        updock: ['var(--font-updock)', 'cursive'],
        peralta: ['var(--font-peralta)'],
      },
    },
  },
  plugins: [],
};
