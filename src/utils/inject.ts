import { inject } from 'mobx-react';
import { IAllStores } from 'src/services/stores';

export const myInject = (storeName: keyof IAllStores) => {
  return inject((allStores: IAllStores) => {
    return ({ [storeName]: allStores[storeName] })
  })
};