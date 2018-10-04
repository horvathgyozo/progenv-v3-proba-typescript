// import registerServiceWorker from './registerServiceWorker';
import { Provider } from "mobx-react";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { authStore } from "./services/stores";

const stores = {
  authStore
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
