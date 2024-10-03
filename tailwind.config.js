/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato, system-ui",
      },
      backgroundImage: {
        dashboard:
          "linear-gradient(to top, rgba(229, 9, 20, .7) 0%, rgba(229, 9, 20, 0) 60%  ) , url('/background-1.jpg')",
        hero: "linear-gradient(to top, rgba(33, 33, 33, 1) 5%, rgba(33, 33, 33, 0)) , url('/hero.png')",
      },
    },
  },
  plugins: [],
};
