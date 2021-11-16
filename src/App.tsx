import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import MainPage from "./components/MainPage/MainPage";
import AppContainer from "./App.style";
import Theme from "./Theme";

const App = () => (
  <Theme>
    <Provider store={store}>
      <AppContainer>
        <MainPage />
      </AppContainer>
    </Provider>
  </Theme>
);

export default App;
