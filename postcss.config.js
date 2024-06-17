module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      autoprefixer: { flexbox: 'no-2009' },
      features: { 'custom-properties': false },
      stage: 3
    },
  },
}
