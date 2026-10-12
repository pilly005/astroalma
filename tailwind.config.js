/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg: "#150a2e",      // deep space purple (page background)
          deep: "#0d0620",    // darker variant
          card: "#221244",    // translucent card purple
          cardline: "#3d2a6b",// card border
          gold: "#e8c874",    // champagne gold (primary accent)
          golddeep: "#b98a2f",
          lavender: "#c9b8e8",// secondary text
          muted: "#8f7fb8",   // muted text
          cream: "#f7efdd",   // warm white text
        },
      },
      fontFamily: {
        display: ["Georgia", "'Times New Roman'", "serif"],
        body: ["-apple-system", "BlinkMacSystemFont", "'SF Pro Text'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
