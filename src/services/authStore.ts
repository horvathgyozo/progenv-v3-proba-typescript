import { action, computed, observable } from "mobx";

export interface IAuthStore {
  readonly isAuthenticated: boolean;
  authenticate(): void;
  signout(): void;
};

export default class AuthStore implements IAuthStore {
  @observable private authenticated: boolean = false;

  @computed get isAuthenticated(): boolean {
    return this.authenticated ? true : false
  }

  @action.bound
  public authenticate() {
    setTimeout(() => this.authenticated = !this.authenticated, 100) // fake async
  }
  @action.bound
  public signout() {
    this.authenticated = false
  }
}