import { ExampleMockApi } from 'src/apis/example-mock.api';
import { AuthStore } from './authStore';
import { ExampleStore } from './example.store';

const authStore = new AuthStore();
const exampleStore = new ExampleStore(new ExampleMockApi());

export const stores = {
  authStore,
  exampleStore,
};
export type IAllStores = typeof stores;
