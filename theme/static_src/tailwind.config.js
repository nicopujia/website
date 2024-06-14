/** @type {import('tailwindcss').Config} */
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
                'svg-path': 'svg-path 5s linear both',
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
                'svg-path': {
                    '100%': {
                        'stroke-dashoffset': 0,
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
