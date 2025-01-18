import { colors } from './src/config/colors';
import tailwindScrollbar from 'tailwind-scrollbar'; // 플러그인 가져오기

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './.storybook/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['SF Pro', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }), // 플러그인 활성화
  ],
};
