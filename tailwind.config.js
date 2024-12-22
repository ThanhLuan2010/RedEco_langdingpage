module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    padding: {
      main: "20px",
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
      boxShadow: {
        'even': '0px 2px 10px 0px rgba(123, 122, 122, 0.06), 0px 4px 8px 0px rgba(123, 122, 122, 0.06)', // Bóng đều ở cả bốn phía
        'even-strong': '0 0 15px 7px rgba(0, 0, 0, 0.15)', // Bóng đều mạnh hơn
      },
    },
  },
  plugins: [],
};


