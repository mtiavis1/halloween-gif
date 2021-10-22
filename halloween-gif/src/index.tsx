import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./app.css";
import {store} from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <div id="background">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

