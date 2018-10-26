import { RouterStore } from 'mobx-router5';
import { ExampleMockApi } from 'src/apis/example-mock.api';
import { AuthStore } from './authStore';
import { ExampleStore } from './example.store';

const authStore = new AuthStore();
const exampleStore = new ExampleStore(new ExampleMockApi());
const routerStore = new RouterStore();

export const stores = {
  authStore,
  exampleStore,
  routerStore
};
export type IAllStores = typeof stores;
