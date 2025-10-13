/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0d7ff2",
        secondary: "#8b5cf6",
        accent: "#06b6d4",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "foreground-light": "#1e293b",
        "foreground-dark": "#f1f5f9",
        "foreground-muted-light": "#64748b",
        "foreground-muted-dark": "#94a3b8",
        "border-light": "#e2e8f0",
        "border-dark": "#334155"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}