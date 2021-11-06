import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./router/Router";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22254c",
    },
    secondary: {
      main: "#CECECE",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
