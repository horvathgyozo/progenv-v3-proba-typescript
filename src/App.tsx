import * as React from 'react';
import { BaseLink } from 'react-mobx-router5';
import './App.css';
import { ExamplePanel } from './components/ExamplePanel';
import { Header } from './components/Header';
import { login2 } from './components/Login';
import { Route } from './routing/route.component';
import { Switch } from './routing/switch.component';
import { stores } from './services/stores';

class App extends React.Component {
  public render() {
    const { routerStore } = stores;
    return (
      <div>
        <nav>
          <ul>
            <li key="1">
              <BaseLink routerStore={routerStore} routeName="home">
                Home
              </BaseLink>
            </li>
            <li key="2">
              <BaseLink routerStore={routerStore} routeName="repls">
                REPLs
              </BaseLink>
            </li>
            <li key="3">
              <BaseLink routerStore={routerStore} routeName="editor">
                Something else (e.g. login)
              </BaseLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route routeName="home" component={Header} />
          <Route routeName="repls" component={ExamplePanel} />
          <Route routeName="login" component={login2} />
          <p>
            Public (default branch of switch)
          </p>
        </Switch>
      </div>
    );
  }
}

export default App;
