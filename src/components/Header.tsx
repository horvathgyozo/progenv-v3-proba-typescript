import { inject, observer } from "mobx-react";
import * as React from 'react';
import { AuthStore } from "../services/authStore";

interface IHeaderProps { 
  title: string; 
}

// https://medium.com/@prashaantt/strongly-typing-injected-react-props-635a6828acaf
interface IAllStores {
  authStore: AuthStore;
}

const myInject = (storeName: keyof IAllStores) => {
  return inject((allStores: IAllStores) => {
    return ({ [storeName]: allStores[storeName] })
  })
};
// @inject((allStores: IAllStores) => ({
//   authStore: allStores.authStore as IAuthStore
// }))
@myInject('authStore')
@observer
class Header extends React.Component<{authStore?: AuthStore} & IHeaderProps> {
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
