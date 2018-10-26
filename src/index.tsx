// import registerServiceWorker from './registerServiceWorker';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { router } from './routing/router';
import { stores } from './services/stores';

configure({
  enforceActions: 'observed'
});

// tslint:disable-next-line:no-console
console.log(process.env.REACT_APP_MOCK);

router.start(() => {
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
});

// registerServiceWorker();
