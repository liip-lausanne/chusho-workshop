const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './chusho.config.js',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#fff',
      },
      current: {
        DEFAULT: 'currentColor',
      },
      green: {
        100: '#D0DD2C',
        200: '#C1D430',
        300: '#B3CC35',
        400: '#A4C339',
        500: '#92B93D',
        600: '#80B040',
        700: '#6EA644',
      },
      'warm-grey': {
        50: '#F7F7F5',
        100: '#EBEBE6',
        200: '#DDDDD8',
        300: '#CECFCA',
        400: '#C0C1BC',
        500: '#A5A59F',
        600: '#898A81',
        700: '#6E6E64',
        800: '#5F5F58',
        900: '#50504D',
        1000: '#414141',
      },
      cranberry: {
        100: '#F26380',
        200: '#E85876',
        300: '#DD4E6B',
        400: '#D34361',
        500: '#C23E59',
        600: '#B23852',
        700: '#A1334A',
      },
      red: {
        100: '#ff8a65',
        200: '#ff6e40',
        300: '#fa5521',
        400: '#f5460f',
        500: '#ea3800',
        600: '#d33301',
        700: '#c02e00',
      },
      orange: {
        100: '#F8C026',
        200: '#F5B61F',
        300: '#F2AB17',
        400: '#EFA00F',
        500: '#EC9506',
        600: '#E98A00',
        700: '#E58000',
      },
      teal: {
        100: '#19B3A6',
        200: '#13A99C',
        300: '#0E9F93',
        400: '#089589',
        500: '#05837C',
        600: '#03736C',
        700: '#00615D',
      },
      blue: {
        100: '#6da4ff',
        200: '#448aff',
        300: '#3380ff',
        400: '#2979ff',
        500: '#206ae5',
        600: '#195ccd',
        700: '#0d4bb1',
      },
      purple: {
        100: '#9565ff',
        200: '#824aff',
        300: '#7334ff',
        400: '#6722ff',
        500: '#5314dd',
        600: '#470dc7',
        700: '#3a09a7',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Archivo, Arial, sans-serif',
      },
      container: ({ theme }) => ({
        center: true,
        padding: theme('spacing.4'),
      }),
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        body: {
          'background-color': theme('colors.warm-grey.50'),
          color: theme('colors.warm-grey.1000'),
        },
      });
    }),
  ],
};
