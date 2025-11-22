/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#F9F7F1',
                sage: '#8FBC8F',
                terracotta: '#E2725B',
                primary: '#2C3E50', // Dark blue-grey for high contrast
                charcoal: '#1a252f', // Darkened text for readability (renamed from 'text' to avoid conflict)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
