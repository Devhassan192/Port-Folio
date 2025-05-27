/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
        keyframes: {
            scroll: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
            },
        },
        animation: {
            scroll: 'scroll 10s linear infinite',
        },
        },
    },
    plugins: [],
    };