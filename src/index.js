import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "./Store/Provider";
import Itens from "./Pages/Itens";
import Itens2 from "./Pages/Itens2";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Itens2 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
