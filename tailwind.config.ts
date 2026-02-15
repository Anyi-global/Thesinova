import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1F3B',
        indigoBrand: '#4F46E5',
        gold: '#C8A74E',
        coolWhite: '#F8FAFC',
        slateBrand: '#64748B',
        cardDark: '#122947'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11,31,59,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
