import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
