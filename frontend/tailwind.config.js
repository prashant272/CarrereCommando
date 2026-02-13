/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Fixed Color Palette
        primary: {
          DEFAULT: '#F4B400', // Golden Yellow (consistent)
          dark: '#D39E00',    // Darker yellow for hover
        },
        dark: {
          DEFAULT: '#0F172A', // Slate dark for backgrounds
          light: '#1E293B',   // Lighter slate
        },
        success: '#16A34A',   // Green for trust/success
        'bg-light': '#F8FAFC', // Light background
        muted: '#64748B',      // Muted text
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/hero-bg.jpg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(184, 134, 11, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(184, 134, 11, 0.6)' },
        }
      }
    },
  },

  plugins: [],
}
