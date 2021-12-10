module.exports = {
  // mode: "jit",
  purge: ["./src/*.jsx", "./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dosis: "Dosis ,sans-serif",
        abel: "Abel, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
