import { BrowserRouter } from "react-router-dom";
import { Router } from "../../router/Router";
import { Provider } from "react-redux";
import { persistor, store } from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
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

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
