import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      animation: {
        popup: "popup",
      },
      keyframes: {
        popup: {
          "0%": {
            // transform: "-translate-y-6",
            transform: "translateY(200%)",
          },
          "10%": {
            // transform: "translate-y-6",
            transform: "translateY(-100%)",
          },
          "90%": {
            // transform: "translate-y-6",
            transform: "translateY(-100%)",
          },
          "100%": {
            // transform: "translate-y-6",
            transform: "translateY(200%)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") },
      );
    }),
  ],
};
