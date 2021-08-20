import React from "react";
import Routes from "./Routes/index";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#452380",
    },
    secondary: {
      main: "#9C0000",
    },
  },
});

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
