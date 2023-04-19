/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'size-headline': ['62px', '81px'],
        'size-subheadline': ['32px', '42px'],
        'size-body': ['18px', '24px'],
        'size-label': ['16px', '21px'],
        'size-code': ['14px', '20px'],
      },
      colors: {
        'color-primary': {
          50: '#01080E',
          100: '#011627',
          200: '#011221',
        },
        'color-secondary': {
          50: '#607B96',
          100: '#3C9D93',
          200: '#4D5BCE',
          300: '#FFFFFF',
        },
        'color-accent': {
          50: '#FEA55F',
          100: '#43D9AD',
          200: '#E99287',
          300: '#C98BDF',
        },
        'color-line': {
          50: '#1E2D3D',
        },
        'color-gradient': {
          50: '#4D5BCE',
          100: '#43D9AD',
        },
      },
    },
  },
  plugins: [],
}
