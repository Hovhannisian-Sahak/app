/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        new4: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
    animation: {
      shimmer: "shimmer 1.5s infinite",
    },
  },
  plugins: [],
};
