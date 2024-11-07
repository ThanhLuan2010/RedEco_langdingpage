import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    padding: {
      main: "6rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenPrimary: "#00A859",
        blueAccent: "#00366A",
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(140.7deg, #007BB0 -15.73%, #00366A 87.74%)',
      },
    },
  },
  plugins: [],
};
export default config;
