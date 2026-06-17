/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'space-deep': '#0a1628',
        'space-dark': '#0f1f3d',
        'space-mid': '#1a2a4a',
        'nebula-purple': '#1a1a3e',
        'aurora-cyan': '#2dd4bf',
        'aurora-teal': '#14b8a6',
        'meteor-orange': '#f59e0b',
        'nebula-pink': '#ec4899',
        'moonlight': '#f8fafc',
        'starlight': '#e2e8f0',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        'bounce-arrow': 'bounce-arrow 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 212, 191, 0.4), 0 0 40px rgba(45, 212, 191, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(45, 212, 191, 0.7), 0 0 60px rgba(45, 212, 191, 0.4)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(45, 212, 191, 0.3)',
        'glow-orange': '0 0 20px rgba(245, 158, 11, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
