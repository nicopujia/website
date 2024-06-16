/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const drawSvgPathAnimDuration = '4s'
module.exports = {
    content: [
        // Templates within theme app (BASE_DIR/theme/templates), e.g. base.html.
        '../templates/**/*.html',

        // Main templates directory of the project (BASE_DIR/templates).
        '../../templates/**/*.html',

        // Templates in other django apps (BASE_DIR/<any_app_name>/templates).
        '../../**/templates/**/*.html',

        /* Ignore any JavaScript in node_modules folder. */
        '!../../**/node_modules',

        /* Process all JavaScript and Python files in the project. */
        '../../**/*.js',
        '../../**/*.py',
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
        },
        fontFamily: {
            sans: [
                '"Josefin Sans"',
                'sans-serif',
            ],
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
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
