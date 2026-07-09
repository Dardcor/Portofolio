/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#02000a',
                    900: '#0a0017',
                    800: '#0f0524',
                    700: '#1a0b33',
                },
                purple: {
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#7c3aed',
                },
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                },
                amber: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                },
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
                body: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-reverse': 'spin 10s linear infinite reverse',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'float-slow': 'float 8s ease-in-out 1s infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
                'gradient-shift': 'gradient-shift 4s ease infinite',
                'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
                'shimmer-fast': 'shimmer 2s linear infinite',
                'levitate': 'levitate 7s ease-in-out infinite',
                'morph': 'morph 8s ease-in-out infinite',
                'breath': 'breath 4s ease-in-out infinite',
                'aurora': 'aurora 15s ease infinite',
                'wave': 'wave 6s ease-in-out infinite',
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                'scroll-reveal': 'scroll-reveal 1s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(168,85,247,0.2), 0 0 40px rgba(168,85,247,0.1)' },
                    '100%': { boxShadow: '0 0 40px rgba(168,85,247,0.4), 0 0 80px rgba(168,85,247,0.2)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                levitate: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '33%': { transform: 'translateY(-15px) rotate(2deg)' },
                    '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
                },
                morph: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
                breath: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.5' },
                },
                aurora: {
                    '0%, 100%': { backgroundPosition: '0% 50%', transform: 'rotate(0deg) scale(1)' },
                    '25%': { backgroundPosition: '50% 100%', transform: 'rotate(90deg) scale(1.1)' },
                    '50%': { backgroundPosition: '100% 50%', transform: 'rotate(180deg) scale(1)' },
                    '75%': { backgroundPosition: '50% 0%', transform: 'rotate(270deg) scale(1.1)' },
                },
                wave: {
                    '0%, 100%': { transform: 'translateY(0px) skewX(0deg)' },
                    '25%': { transform: 'translateY(-5px) skewX(1deg)' },
                    '75%': { transform: 'translateY(5px) skewX(-1deg)' },
                },
                'scroll-reveal': {
                    '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)', filter: 'blur(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
