module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand Core Colors - Dev2Production.Tech Official Palette
        brand: {
          orange: '#FF6A00',      // Electric Orange - Primary accent
          'orange-hover': '#FF7F2A', // Button hover
          'orange-light': '#FFB86B', // Highlight glow
          'orange-warm': '#FFB020',  // Warning/warm tone
          cyan: '#00E8FF',        // Neon Cyan - Glow accent (D2P)
          'cyan-dark': '#003344', // Cyan gradient end
          'cyan-success': '#00FFB0', // Success state
        },
        // Background System
        dark: {
          950: '#0A0A0A',  // Deep Black - Main background
          900: '#1A1A1A',  // Graphite Gray - Surface/secondary
          800: '#2C2C2C',  // Charcoal Gray - Logo text, titles
          700: '#3A3A3A',  // Muted Steel - Dividers
          600: '#4A4A4A',  // Medium gray
          500: '#5A5A5A',  // Mid-tone
          400: '#7A7A7A',  // Light-medium
          300: '#9A9A9A',  // Light gray
          200: '#CFCFCF',  // Body text
          100: '#EAEAEA',  // Neutral text - Headings
          50: '#F5F5F5',   // Near white
        },
        // Legacy support (mapped to new scheme)
        primary: {
          50: '#e6f7ff',
          100: '#ccf0ff',
          200: '#99e0ff',
          300: '#66d1ff',
          400: '#33c1ff',
          500: '#00E8FF',  // Neon Cyan
          600: '#00b9cc',
          700: '#008a99',
          800: '#005c66',
          900: '#002d33',
        },
        // Accent colors
        accent: {
          orange: '#FF6A00',
          cyan: '#00E8FF',
        },
        // Utility colors
        shadow: '#050505',  // Shadow depth for 3D effects
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(90deg, #FF6A00, #FFB020)',
        'gradient-glow': 'radial-gradient(circle, #00E8FF 0%, #003344 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A, #1A1A1A)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00E8FF, 0 0 10px #00E8FF' },
          '100%': { boxShadow: '0 0 10px #00E8FF, 0 0 20px #00E8FF, 0 0 30px #00E8FF' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 232, 255, 0.5)',
        'glow-orange': '0 0 20px rgba(255, 106, 0, 0.5)',
        'glow-cyan-lg': '0 0 30px rgba(0, 232, 255, 0.7)',
        'glow-orange-lg': '0 0 30px rgba(255, 106, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
