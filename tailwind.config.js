import { colors } from './src/config/colors';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['SF Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
