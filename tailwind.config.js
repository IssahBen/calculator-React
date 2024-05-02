/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "540px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        very_dark_blue_main: "hsl(222, 26%, 31%)",
        very_dark_toggle_blue: "hsl(223, 31%, 20%)",
        grayish_red: "hsl(0, 5%, 81%)",
        red: "hsl(6, 63%, 50%)",
        dark_red: "hsl(6, 70%, 34%)",
        very_dark_bg_blue: "hsl(224, 36%, 15%)",
        dark_blue: "hsl(225, 21%, 49%)",
        dark_sblue: "hsl(224, 28%, 35%)",
        equal_1: "hsl(6, 63%, 50%)",
        equal_s1: "hsl(6, 70%, 34%)",
        light_grayish_orange: "hsl(30, 25%, 89%)",
        grayish_orange: "hsl(28, 16%, 65%)",
        very_dark_bluet: "hsl(198, 20%, 13%)",
        dark_grayish_yellow: "hsl(60, 10%, 19%)",
        light_gray: "hsl(0, 0%, 90%)",
        very_dark_grayish_yellow: "hsl(60, 10%, 19%)",
        very_light_gray: "hsl(0, 0%, 93%)",
        dark_moderate_cyan: "hsl(185, 42%, 37%)",
        very_dark_cyan: "hsl(185, 58%, 25%)",
        orange: "hsl(25, 98%, 40%)",
        dark_orange: "hsl(25, 99%, 27%)",
      },
      fontFamily: {
        sans: ["League Spartan", "sans serif"],
      },
    },
  },
  plugins: [],
};
