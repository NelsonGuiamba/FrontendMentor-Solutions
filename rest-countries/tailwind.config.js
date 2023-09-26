/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "blue-600": "hsl(209, 23%, 22%)",
                "blue-700": "hsl(200, 15%, 8%)",
                "blue-800": "hsl(207, 26%, 17%)",
                "gray-600": "hsl(0, 0%, 52%))",
                "gray-800": "hsl(0, 0%, 98%)",
            },
            boxShadow: {
                "md": 'rgba(0, 0, 0, 0.35) 0px 5px 5px;'
            }
        }
    },
    plugins: [],
};
