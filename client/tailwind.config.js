/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors:{
      mainGreen:"#42f5b6",
      theme: {
        extend: {},
      },
      // darkNavy:"rgba(var(--navy))",
    },
  },
},
  plugins: [],
}

