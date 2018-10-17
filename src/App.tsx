import * as React from 'react';
import './App.css';
import { ExamplePanel } from './components/ExamplePanel';
import { Header } from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header title="Győző" />
        <p>
          Some more text
        </p>
        <ExamplePanel title="Próba" />
      </div>
    );
  }
}

export default App;
