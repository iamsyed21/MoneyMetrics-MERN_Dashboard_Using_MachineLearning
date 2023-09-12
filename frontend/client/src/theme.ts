export const tokens = {
  grey: {
    100: "#dcdcdc",
    200: "#c6c6c6",
    300: "#b0b0b0",
    400: "#9a9a9a",
    500: "#848484",
    600: "#6e6e6e",
    700: "#585858",
    800: "#424242",
    900: "#2c2c2c",
  },
  secondary: {
    // light green
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#71f5de",
    400: "#41f2d3",
    500: "#12efc8",
    600: "#0ebfa0",
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  primary: {
    100: "#ffe2d1",
    200: "#ffcaaa",
    300: "#ffb283",
    400: "#ff9a5c",
    500: "#ff8235",
    600: "#cc691c",
    700: "#994f14",
    800: "#66350c",
    900: "#331a04",
  },
  tertiary: {
    500: "#8984d9",
  },
  background: {
    light: "#1b1b1f",
    main: "#111115",
  },
};

export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[100],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[200],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[300],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 9,
      color: tokens.grey[600],
    },
  },
};
