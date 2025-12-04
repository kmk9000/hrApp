import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    bodyJustified: {
      fontSize: "1rem",
      lineHeight: 1.5,
      textAlign: "justify",
      textAlignLast: "left",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      marginTop: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        },
        main: {
          display: "flex",
          justifyContent: "center",
          aligntItems: "center",
          flexWrap: "wrap",
          flexGrow: 1,
          padding: "2rem 0",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "0.25rem 0.5rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "0 4px 8px slategrey" },
      },
    },
  },
});

export default theme;
