import { observer } from 'mobx-react';
import * as React from 'react';
import { myInject } from 'src/utils/inject';
import { AuthStore } from '../services/authStore';

interface IProps { 
  title: string; 
}

@myInject('authStore')
@observer
export class Header extends React.Component<{authStore?: AuthStore} & IProps> {

  public static defaultProps = { 
    title: 'Próba' 
  };

  public render() {
    return (
      <header>
        <h1>Welcome to {this.props.title}</h1>
        <p>You are {this.props.authStore!.isAuthenticated ? 'logged in' : 'logged out'}</p>
        <button onClick={this.props.authStore!.authenticate}>Toggle login</button>
      </header>
    );
  }
}
