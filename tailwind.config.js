/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
    "./node_modules/primevue/**/*.{js,vue}", // مهم مع PrimeVue
  ],
  theme: { extend: {} },
  plugins: [],
};
