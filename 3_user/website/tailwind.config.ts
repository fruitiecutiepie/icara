import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Bricolage Grotesque'],
        'sans': ['Work Sans'],
      }
    },
  },
  plugins: [],
};

export default config;
