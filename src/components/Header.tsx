import { inject, observer } from "mobx-react";
import * as React from 'react';
import { IAuthStore } from "../services/authStore";

interface IHeaderProps { 
  title: string; 
}

// https://medium.com/@prashaantt/strongly-typing-injected-react-props-635a6828acaf
// interface IAllStores {
//   authStore: IAuthStore;
// }

// @inject((allStores: IAllStores) => ({
//   authStore: allStores.authStore as IAuthStore
// }))
@inject('authStore')
@observer
class Header extends React.Component<{authStore?: IAuthStore} & IHeaderProps> {
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

export default Header;
