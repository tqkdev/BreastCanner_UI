/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                1200: '1200px',
            },
            colors: {
                main: '#25c9da',
                bgr: '#f8f8f8',
            },
            lineHeight: {
                64: '50px',
            },
            flex: {
                1: '1',
            },

            keyframes: {
                moveFromLeft: {
                    from: {
                        transform: 'translateX(-100%)',
                    },
                    to: {
                        transform: 'translateX(0%)',
                    },
                },

                moveFromRight: {
                    from: {
                        transform: 'translateX(50%)',
                    },

                    to: {
                        transform: 'translateX(0%)',
                    },
                },

                moveFromBottom: {
                    from: {
                        transform: 'translateY(100%)',
                    },

                    to: {
                        transform: 'translateY(0%)',
                    },
                },

                moveToast: {
                    from: {
                        right: '-250px',
                        opacity: 0,
                    },
                    to: {
                        right: '0',
                        opacity: 1,
                    },
                },
            },

            animation: {
                moveFromLeft: 'moveFromLeft 400ms ease',
                moveFromRight: 'moveFromRight 400ms ease',
                moveFromBottom: 'moveFromBottom 400ms ease',
                moveToast: 'moveToast 400ms ease',
            },
            boxShadow: {
                '3xl': '0px 0px 10px 0px #25c9da',
                '4xl': '0px 0px 10px 0px #9999',
            },
        },
    },
    plugins: [],
};
