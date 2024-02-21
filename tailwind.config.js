module.exports = {
  purge: ['./**/*.html', './**/*.ts', './**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '520px',
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system, Montserrat
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
