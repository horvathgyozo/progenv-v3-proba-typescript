import * as React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header title="Győző" />
        <p>
          Some more text
        </p>
      </div>
    );
  }
}

export default App;
