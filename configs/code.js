module.exports.globalsCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 215 33% 26%;

    --muted: var(--background);
    --muted-foreground: 215 33% 26%;

    --primary: 205 100% 32%;
    --primary-foreground: var(--foreground);

    --secondary: 205 100% 44%;
    --secondary-foreground: var(--foreground);

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --border: var(--primary);
  }
}

@layer base {
  * {
    @apply border-border ring-border;
  }
  body {
    @apply overflow-x-hidden bg-background text-foreground debug-screens;
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
      fontFamily: {
        poppins: 'var(--poppins)'
      },
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
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-debug-screens'),
  ],
};
`;

module.exports.utils = `
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

module.exports.page = `
export default function Home() {
  return (
    <main className='text-4xl mt-20 text-center'>
      <a href='https://github.com/sohanemon' target='_blank'>sohanemon</a>
    </main>
  );
}
`;

module.exports.layout = `
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--poppins',
});

export const metadata = {
  title: 'Next | SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={\`\${poppins.className} \${poppins.variable}\`}>
        {children}
      </body>
    </html>
  );
}
`;
