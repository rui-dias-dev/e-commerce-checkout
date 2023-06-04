/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                purple: "var(--product-purple)",
                "purple-dark": "var(--product-purple-dark)",
                "purple-light": "var(--product-purple-light)",
                yellow: "var(--product-yellow)",
                "yellow-dark": "var(--product-yellow-dark)",
                "yellow-light": "var(--product-yellow-light)",
                "base-title": "var(--base-title)",
                "base-subtitle": "var(--base-subtitle)",
                "base-text": "var(--base-text)",
                "base-label": "var(--base-label)",
                "base-hover": "var(--base-hover)",
                "base-button": "var(--base-button)",
                "base-input": "var(--base-input)",
                "base-card": "var(--base-card)",
                "base-background": "var(--base-background)",
                "base-white": "var(--base-white)",
            },
            fontSize: {
                xxs: [
                    "0.625rem",
                    {
                        lineHeight: "0.8125rem",
                    },
                ],
            },
            borderRadius: {
                "4xl": "36px",
            },
            gridTemplateColumns: {
                catalog: "repeat( auto-fit, minmax(256px, 1fr) )",
            },
        },
    },
    plugins: [],
};
