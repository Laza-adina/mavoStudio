/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'yellow': {
            400: '#F9C623',
            500: '#E5B520',
          },
        },
      },
    },
    plugins: [],
  }