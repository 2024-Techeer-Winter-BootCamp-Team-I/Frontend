import { colors } from './src/config/colors';
import tailwindScrollbar from 'tailwind-scrollbar'; // 플러그인 가져오기
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'; // 플러그인 가져오기

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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }), // 플러그인 활성화
    tailwindScrollbarHide, // tailwind-scrollbar-hide 플러그인 추가
  ],
};
