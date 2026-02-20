/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom: "0 30px 50px 0px rgba(0, 0, 0, 0.2), 0 -3px 12px 0px rgba(0, 0, 0, 0.1)",
      },

      fontSize: {
        "xs+": "0.8125rem",
        "sm+": "0.9375rem",
        "base+": "1.0625rem",
        "xl+": "1.375rem",
        "2xl+": "1.5625rem",
        "3xl+": "2rem",
        "4xl+": "2.5rem",
        "5xl+": "3.1rem",
        "6xl+": "4rem",
        "7xl+": "5rem",
      },

      transitionDuration: {
        400: "400ms",
        600: "600ms",
        10000: "10000ms",
        1500: "1500ms",
      },

      colors: {
        primary: {
          light: "#ebf0e7",
          text: "#61bf05",
          DEFAULT: "#489100",
          dark: "#024720",
        },

        secondary: {
          DEFAULT: "#679734",
          light: "#F0FFF0",
        },

        text: {
          DEFAULT: "#4D5756",
        },

        line: {
          DEFAULT: "#FFFFFF33",
        },
      },

      backgroundImage: {
        "footer-bg": "url('/images/footer/footer-bg.jpg')",
        hero: "linear-gradient(90deg, rgba(9, 51, 27, 0.8) 0%, rgba(9, 51, 27, 0.60) 35.5%, rgba(9, 51, 27, 0.47) 49%, rgba(9, 51, 27, 0.39) 59%, rgba(9, 51, 27, 0.2) 72.5%, rgba(9, 51, 27, 0.2) 91.5%, rgba(9, 51, 27, 0.1) 100%);",
      },

      fontFamily: {
        raleway: ["var(--font-raleway)", "san-serif"],
        roboto: ["var(--font-roboto)", "san-serif"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        zoom: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        zoom: "zoom 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

