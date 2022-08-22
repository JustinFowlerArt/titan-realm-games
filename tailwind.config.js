// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'titan-light-blue': '#6DCFF6',
                'titan-dark-blue': '#006991',
            },
            // keyframes: {
            // 	'slide-in': {
            // 		'0%': { transform: 'translateY(-80px)' },
            // 		'100%': { transform: 'translateY(0px)' },
            // 	},
            // 	'slide-out': {
            // 		'0%': { transform: 'translateY(0px)' },
            // 		'100%': { transform: 'translateY(-80px)' },
            // 	},
            // },
            // animation: {
            // 	'slide-in': 'slide-in 0.5s ease-in',
            // 	'slide-out': 'slide-out 0.5s ease-out',
            // },
        },
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
};
