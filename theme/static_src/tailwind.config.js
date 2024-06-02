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
                'right-to-left': 'right-to-left 2s',
            },
            keyframes: {
                'right-to-left': {
                    '0%': {
                        right: '-300px',
                        opacity: '0',
                    },
                    '100%': {
                        right: '0px',
                        opacity: '100',
                    },
                },
            },
        },
        fontFamily: {
            'sans': [
                '"Josefin Sans"',
                'sans-serif',
            ],
        },
        colors: {
            primary: '#4070FF',
            light: '#d4d4d8',
            lighter: '#fafafa',
            dark: '#52525b',
            darker: '#18181b',
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
