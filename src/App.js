import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import Excercise from "./components/Excercise";

const theme = createMuiTheme({
  palette: {
    primary: purple
  },
  typography: {
    useNextVariants: true
  }
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Excercise />
      </MuiThemeProvider>
    );
  }
}

export default App;
