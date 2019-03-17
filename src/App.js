import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';

library.add(fas);

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ToastContainer />
    <Routes />
  </Provider>
);

export default App;
