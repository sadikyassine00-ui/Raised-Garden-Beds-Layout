import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFBFA',
        surface: '#FFFFFF',
        'surface-muted': '#F5F4F0',
        'surface-warm': '#FAF7F2',
        botanical: {
          DEFAULT: '#1B4D3E',
          dark: '#143A2F',
          deep: '#112B23',
          light: '#E8F3EE',
          wash: 'rgba(27, 77, 62, 0.06)',
          border: 'rgba(27, 77, 62, 0.18)',
        },
        cedar: {
          DEFAULT: '#C88A58',
          dark: '#A86D3F',
          light: '#F8D8BE',
          wash: 'rgba(200, 138, 88, 0.10)',
          border: 'rgba(200, 138, 88, 0.28)',
        },
        ink: {
          primary: '#1A1A1A',
          secondary: '#4A4E4A',
          muted: '#717571',
        },
        hairline: {
          DEFAULT: 'rgba(26, 26, 26, 0.08)',
          strong: 'rgba(26, 26, 26, 0.15)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
