import { action, computed, observable } from 'mobx';

export class AuthStore {
  @observable private authenticated: boolean = false;

  @computed get isAuthenticated(): boolean {
    return this.authenticated ? true : false
  }

  @action.bound
  public authenticate() {
    setTimeout(action(() => this.authenticated = !this.authenticated), 100) // fake async
  }
  @action.bound
  public signout() {
    this.authenticated = false
  }
}