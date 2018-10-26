import * as React from 'react';
import './App.css';
import { ExamplePanel } from './components/ExamplePanel';
import { Header } from './components/Header';
import { Route } from './routing/route.component';
import { Switch } from './routing/switch.component';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route routeName="home" component={Header} />
          <Route routeName="repls" component={ExamplePanel} />
          <p>
            Public
          </p>
        </Switch>
      </div>
    );
  }
}

export default App;
