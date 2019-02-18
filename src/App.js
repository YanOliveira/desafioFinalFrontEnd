import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ToastContainer autoClose={5000} />
    <Routes />
  </Provider>
);

export default App;
