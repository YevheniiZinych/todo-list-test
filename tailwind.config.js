/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#481dbf",
        yellow: "#CFC547",
      },
      fontSize: {
        l: "40px",
      },
      letterSpacing: {
        s: "5px",
      },
      textShadow: {
        default: " 0px 11px 10px rgba(81,67,21,0.8)",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    },
  ],
};
