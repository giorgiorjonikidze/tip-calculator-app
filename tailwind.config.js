/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#C5E4E7",
        "medium-green": "#26C2AE",
        "dark-green": "#00474B",
        "font-color": "#547878",
        'alert': "#E17052",
        'active': '#9FE8DF',
        'focus': '#26C2AE'
      },
      fontFamily: {
        'spaceMono': "Space Mono",
      },
      screen: {
        'xl': "1400px",
      },
    },
  },
  plugins: [],
};
