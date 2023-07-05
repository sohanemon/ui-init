module.exports.globalsCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --swiper-pagination-color: black
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;

    --muted: 210 40% 96.1%; /* pre */
    --muted-foreground: 0 0% 56%;

    --primary: 88 38% 15%;
    --primary-foreground: 37 83% 84%;

    --secondary: 0 0% 100%;
    --secondary-foreground: 0 0% 0%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 0%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply overflow-x-hidden bg-background text-foreground;
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }
}
`;

module.exports.tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {},
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
`;