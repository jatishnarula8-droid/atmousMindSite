/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8251A",
        "bg-dark": "#1A0A0A",
        "bg-light": "#FAF7F5",
        "text-light": "#F0EBE8",
        "text-dark": "#1A0A0A"
      },
      fontFamily: {
        heading: ['"Baloo 2"', "sans-serif"],
        body: ['"Noto Sans"', "sans-serif"],
      }
    },
  },
  plugins: [],
}
