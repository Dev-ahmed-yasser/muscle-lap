/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: [
          '"impact","Anton", sans-serif;',
          {
            "font-weight": 400,
            "font-style": "normal",
          },
        ],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
