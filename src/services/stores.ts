import {AuthStore} from './authStore';
import { ExampleStore } from './example.store';

export const authStore = new AuthStore();
export const exampleStore = new ExampleStore();

const stores = {
  authStore,
  exampleStore
};
type Mapped<T> = {
  [P in keyof T]: T[P];
};
export type IAllStores = Mapped<typeof stores>;

// export interface IAllStores {
//   authStore: AuthStore;
//   exampleStore: ExampleStore
// }

