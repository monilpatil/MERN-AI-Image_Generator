/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '1px 2px 40px 8px rgba(0, 0, 0, 0.6)',
        customHover: '1px 2px 40px 8px rgba(0, 0, 0, 0.8)',
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [],
};
