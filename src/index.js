import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import "./fonts/Gutcruncher.otf";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
Amplify.configure(awsExports);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#19578A",
    },
    secondary: {
      main: "#CB0000",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
