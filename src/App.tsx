import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppContainer from './App.style';
import Theme from './Theme';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ResetPage from './components/ResetPage';
import MainPage from './components/MainPage';

const App = () => (
  <Theme>
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset" element={<ResetPage />} />
            <Route path="/home" element={<MainPage />} />
            <Route path="*" />
          </Routes>
        </Router>
      </AppContainer>
    </Provider>
  </Theme>
);

export default App;
