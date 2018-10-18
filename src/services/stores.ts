import {AuthStore} from './authStore';
import { ExampleStore } from './example.store';

const authStore = new AuthStore();
const exampleStore = new ExampleStore();

export const stores = {
  authStore,
  exampleStore
};
export type IAllStores = typeof stores;

