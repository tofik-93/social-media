module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.cjs' // Also ensure your Tailwind config uses .cjs
    },
    autoprefixer: {},
  }
}