// tailwind.config.js
module.exports = {
  // Ensure Tailwind scans files under src/ (your app lives in src/app)
  content: ['./src/**/*.{js,ts,jsx,tsx,html}', './public/**/*.html'],
  // Keep purge for compatibility with tools expecting it
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}', './public/**/*.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}