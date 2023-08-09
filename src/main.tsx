import React from 'react';
import ReactDOM from 'react-dom/client';


//componenetes
// import HOME from './pages/HOME';
import ListaServicos from './pages/ListaServicos';

//estilização global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HOME /> */}
    <ListaServicos/>

  </React.StrictMode>,
)
