import {Provider} from 'mobx-react';
import * as React from 'react';

const stub = () => true;

export const exampleStore = {
  authStore: {
    authenticate: stub,
    isAuthenticated: false,
  }
};

const wrapWithStore = (extendStore = {}, overrideStore?: any) => (story: any) => {

  const cleanStore = {};
  const finalStore = overrideStore ? overrideStore : {...cleanStore, ...exampleStore, ...extendStore};

  return (
    <Provider {...finalStore}>
      {story()}
    </Provider>
  )
}

export default wrapWithStore;