import * as React from 'react';
import './App.css';
import { ExamplePanel } from './components/ExamplePanel';
import { Header } from './components/Header';
import { RouterOutlet } from './components/RouterOutlet';

class App extends React.Component {
  public render() {
    return (
      <div>
        <RouterOutlet />
        <Header title="Győző" />
        <p>
          Some more text
        </p>
        <ExamplePanel  />
      </div>
    );
  }
}

export default App;
