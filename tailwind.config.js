/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
        'th-text-lighter': 'var(--text-lighter)',
        'th-text-light': 'var(--text-light)',
        'th-text-medium': 'var(--text-medium)',
        'th-text-dark': 'var(--text-dark)',
        'th-container-surface': 'var(--container-surface)',
        'th-container-on-surface': 'var(--container-on-surface)',
        'th-container-on-background': 'var(--container-on-background)',
        'th-textbox-fill': 'var(--textbox-fill)',
        'th-button-primary': 'var(--button-primary)',
        'th-button-primary-hover': 'var(--button-primary-hover)',
        'th-footer-gray': '#121212',
      },
      height: {
        1400: '1200px',
        1300: '1200px',
        1200: '1200px',
        1100: '1100px',
        1000: '1000px',
        900: '900px',
        850: '850px',
        800: '800px',
        750: '750px',
        700: '700px',
        650: '650px',
        600: '600px',
        550: '550px',
        500: '500px',
        450: '450px',
        400: '400px',
        350: '350px',
        300: '300px',
        250: '250px',
        200: '200px',
        150: '150px',
        100: '100px',

      },
      width: {
        900: '900px',
        850: '850px',
        800: '800px',
        750: '750px',
        700: '700px',
        650: '650px',
        600: '600px',
        550: '550px',
        500: '500px',
        450: '450px',
        400: '400px',
        350: '350px',
        300: '300px',
        250: '250px',
        200: '200px',
        150: '150px',
        100: '100px',
      },
    },
  },
  plugins: [
    //require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    //require('tailwind-scrollbar-hide'),
  ],
}
