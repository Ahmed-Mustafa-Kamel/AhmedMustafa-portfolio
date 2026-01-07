/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar"

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Inter',
          'sans-serif',
        ]
      }
    },
  },
  plugins: [tailwindScrollbar],
}