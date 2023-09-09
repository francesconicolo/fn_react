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
        press: ["var(--font-pressStart2p)"],
        rye: ["var(--font-rye)"],
        homemade: ["var(--font-homemadeApple)"],
        peralta: ["var(--font-peralta)"],
        carattere: ["var(--font-carattere)"],
        Updock: ["var(--font-updock)"],
      },
    },
  },
  plugins: [],
};
