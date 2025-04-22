/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,tx,tsx}",
    "./components/**/*.{js,jsx,tx,tsx}",
    "./app/**/*.{js,jsx,tx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
