// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px", // custom breakpoint for iPhone 12 Pro
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
