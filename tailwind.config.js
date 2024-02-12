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
      width: {
        500: "500px",
        350: "350px",
      },
      backgroundImage: {
        "main-back": "url('./src/img/back.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities, matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      addUtilities({
        ".custom-background": {
          background: "rgba(255, 255, 255, 0.2)",
          "border-radius": "16px",
          "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": " blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
      });
    },
  ],
};
