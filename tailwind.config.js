/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url('/src/assets/slide01.jpg')",
        "banner2": "url('/src/assets/img01.jpg')"
      },
      colors: {
        "gold": "#fcb800"
      }
    },
  },
  plugins: [],
}

