// import { createTheme } from "@material-ui/core";
// import { createTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import palette from "./palette";
import overrides from "./overrides";
import typography from "./typography";

const theme = createTheme({
  palette,
  overrides,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
