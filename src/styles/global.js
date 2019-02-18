import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Helvetica', sans-serif;
  }
  ul{
    list-style: none;
    display: flex;
  }
  a{
    text-decoration: none;
  }
  button{
    border: 0;
  }
  input{
    border:0;
    outline: none;
  }
`;

export default GlobalStyle;
