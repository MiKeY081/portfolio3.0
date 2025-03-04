module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
          DEFAULT: '#22d3ee', // Main cyber cyan color
          glow: 'rgba(34, 211, 238, 0.4)'
        },
      },
      animation: {
        'scanline': 'scanline 6s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { backgroundPosition: '0 100%' },
          '100%': { backgroundPosition: '0 0' },
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.1',
            transform: 'translateY(0)',
          },
          '50%': { 
            opacity: '0.3',
            transform: 'translateY(-20px)',
          },
        }
      },
      boxShadow: {
        'neon': '0 0 8px rgba(34, 211, 238, 0.3)',
        'neon-md': '0 0 15px rgba(34, 211, 238, 0.3)',
        'hologram': '0 0 32px rgba(34, 211, 238, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
        md: '4px',
      },
      textShadow: {
        'cyber': '0 0 8px rgba(34, 211, 238, 0.7)',
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }
    },
    fontFamily: {
      'mono': ['"Space Mono"', 'monospace'], // Terminal-style font
      'sans': ['Inter', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities }) {
      addUtilities({
        '.blinking-cursor': {
          'animation': 'blink 1s step-end infinite',
        },
        '.gradient-border': {
          'border-image': 'linear-gradient(to right, #22d3ee, #1e40af)',
          'border-image-slice': '1',
        },
        '.gradient-border-thick': {
          'border-image': 'linear-gradient(to right, #22d3ee, #1e40af)',
          'border-image-slice': '1',
          'border-width': '2px',
        },
        '.cyber-text': {
          'text-shadow': '0 0 8px rgba(34, 211, 238, 0.7)',
        },
      })
    },
  ],
}