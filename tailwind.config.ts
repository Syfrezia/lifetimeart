import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1960px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
        screens: {
          sm: "100%", // Full width with padding below lg
          md: "100%", // Full width with padding below lg
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
          "3xl": "1960px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
