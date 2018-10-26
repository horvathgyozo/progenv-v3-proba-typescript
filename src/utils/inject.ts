import { inject } from 'mobx-react';
import { IAllStores } from '../services/stores';

export const myInject = (storeName: keyof IAllStores) => {
  return inject((allStores: IAllStores) => {
    return ({ [storeName]: allStores[storeName] })
  })
};