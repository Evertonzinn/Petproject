import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Cadastro from './pages/cadastro';

ReactDOM.render(
  <React.StrictMode>
  
    <Cadastro/>
  </React.StrictMode>,
  document.getElementById('root')
);
