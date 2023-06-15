/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
        },
        colors: {
            cyan: 'hsl(178, 100%, 50%)',
            'soft-blue': 'hsl(215, 51%, 70%)',
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            transparent: 'trasparent',
            'dark-blue': {
                main: 'hsl(217, 54%, 11%)',
                card: 'hsl(216, 50%, 16%)',
                line: 'hsl(215, 32%, 27%)',
            },
        },
        extend: {},
    },
    plugins: [],
}
