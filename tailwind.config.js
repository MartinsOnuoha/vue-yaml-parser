module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    colors: {
      primary: '#254261',
      secondary: '#81afb3',
      white: '#FFFFFF',
      gray: '#dadada',
      accent: '#a3c6c9',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
