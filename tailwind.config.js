/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",

      "3xl": "1700px",

      "-3xl": { max: "1699px" },

      "-2xl": { max: "1399px" },

      "-xl": { max: "1199px" },

      "-lg": { max: "991px" },

      "-md": { max: "767px" },

      "-sm": { max: "575px" },
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          200: "#C44F56",
          400: "#C44F56",
          700: "#C44F56",
        },
        secondary: {
          200: "#fc4c52",
          400: "#EE1C24",
          700: "#c21118",
        },
        dark: {
          400: "#000D0F",
          700: "#000000",
        },
        light: "#f5f5f5",
        borderColor: "#dddddd",
        text: "#444444",
        success: "#0a7d29",
        danger: "#ad0707",
      },
    },
  },
  plugins: [],
};
