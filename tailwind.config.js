/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const drawSvgPathAnimDuration = '2s'
module.exports = {
    content: [
        'src/templates/**/*.html',
        'src/static/js/**/*.js',
        '!src/static/node_modules',
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            animation: {
                'draw-svg-path': `draw-svg-path ${drawSvgPathAnimDuration} ease-in-out`,
                'light-ray': 'light-ray 0.8s steps(2, jump-none) infinite alternate',
                'fade-in': 'fade-in 1s both',
                'fade-in-after-draw-svg-path': `fade-in 2s ${drawSvgPathAnimDuration} both`,
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '100',
                    },
                },
                'draw-svg-path': {
                    '0%': {
                        opacity: '0',
                    },
                    '25%': {
                        opacity: '100',
                    },
                    '100%': {
                        'stroke-dashoffset': 0,
                    },
                },
                'light-ray': {
                    '0%': {
                        stroke: '#fecf00',
                    },
                    '100%': {
                        stroke: '#00000000',
                    },
                },
            },
            fontFamily: {
                'josefin-sans': [
                    'JosefinSans',
                    'sans-serif',
                ],
            },
        },
        colors: {
            primary: '#4070FF',
            light: '#aaaaad',
            lighter: '#fdfdfd',
            dark: '#52525b',
            darker: '#18181b',
            transparent: '#00000000',
        },
        screens: {
            xs: '365px',
            ...defaultTheme.screens,
        },
    },
    variants: {
        extend: {
            animation: ['motion-safe'],
        },
    },
}
