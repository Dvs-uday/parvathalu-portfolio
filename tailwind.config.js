/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#123B66',
          50: '#F0F6FC',
          100: '#E1EDF9',
          200: '#C2DCF3',
          700: '#1A4D84',
          800: '#123B66',
          900: '#0B2542',
        },
        corporate: {
          DEFAULT: '#2563EB',
          light: '#EAF3FF',
          hover: '#1D4ED8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F5F8FC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        body: {
          primary: '#1F2937',
          secondary: '#64748B',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(18, 59, 102, 0.06), 0 1px 4px -1px rgba(18, 59, 102, 0.04)',
        'soft-md': '0 10px 25px -5px rgba(18, 59, 102, 0.08), 0 8px 10px -6px rgba(18, 59, 102, 0.04)',
        'soft-lg': '0 20px 35px -10px rgba(18, 59, 102, 0.12), 0 10px 15px -5px rgba(18, 59, 102, 0.05)',
        'soft-xl': '0 25px 50px -12px rgba(18, 59, 102, 0.18)',
        'glow': '0 0 25px rgba(37, 99, 235, 0.25)',
      },
    },
  },
  plugins: [],
}
