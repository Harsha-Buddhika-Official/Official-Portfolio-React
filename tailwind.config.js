module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line if missing
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '5000': '5000ms',
      },
    },
  },
}
