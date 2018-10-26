// tslint:disable:no-debugger no-console

import { autorun } from 'mobx';
import { mobxPlugin } from 'mobx-router5';
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';
import loggerPlugin from 'router5/plugins/logger'; 
import { AuthStore } from './authStore';
import { ExampleStore } from './example.store';
import { stores } from './stores';

function myPlugin(_router: any, _dependencies: any) {
  return {
      onTransitionSuccess: (toState: any, _fromState: any) => {
          console.log('Yippee, navigation to ' + toState.name + ' was successful!', performance.now());
      }
  };
}

// https://github.com/router5/router5/issues/48
// https://github.com/router5/router5/issues/184

const mware1 = (_router: any) => (toState: any, _fromState: any, _done: any) => {
  // debugger;
  if (toState.meta && toState.meta.options && toState.meta.options.skipMiddleware) {
    return Promise.resolve();
  }
  console.log('mware1 starts', performance.now())
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      console.log('mware1 ends', performance.now())
      resolve()
    }, 2000);
  });
};

const mware2 = (_router: any, { exampleStore }: {exampleStore: ExampleStore}) => (_toState: any, _fromState: any, _done: any) => {
  console.log('mware2', performance.now())
  exampleStore.input = Math.random().toString();  
  return Promise.resolve();
};
​
myPlugin.pluginName = 'MY_PLUGIN';

const routes = [
  { name: 'home',       path: '/home'},
  { name: 'login',      path: '/login'},
  { name: 'help',       path: '/help/:command'},
  { name: 'about',      path: '/about', canActivate: (_router: any, { authStore }: {authStore: AuthStore}) => (_toState: any, _fromState: any, done: any) => {
    // return Promise.reject({ redirect: { name: 'login' } });
    if (authStore.isAuthenticated) {
      done();
    } else {
      done({ redirect: { name: 'login' } });
    }
  }},
  { name: 'users',      path: '/users', canActivate: (_router: any) => (_toState: any, _fromState: any) => {
    console.log('canActivate');
    return true;
  }},
  { name: 'users.view', path: '/view'},
  { name: 'users.list', path: '/list', canActivate: (_router: any) => (_toState: any, _fromState: any) => {
    console.log('canActivate2');
    return true;
  }}
];

const routerStore = stores.routerStore;

export const router = createRouter(routes, { defaultRoute: 'home' }, { ...stores })
  .usePlugin(mobxPlugin(routerStore))
  .usePlugin(browserPlugin({ useHash: true }))
  .usePlugin(loggerPlugin)
  .usePlugin(myPlugin)
  .useMiddleware(mware1, mware2);

// setTimeout(() => router.navigate('about', {}, {}), 4000);
setTimeout(() => router.navigate('help', {command: 'alma'}, {}), 4000);
setTimeout(() => router.navigate('users.list', {}, { replace: true, skipMiddleware: true }), 8000);

router.subscribe(({route, previousRoute }) => {
  // debugger;
  console.log(previousRoute && previousRoute.name, '-->', route.name)
})

autorun(() => {
  console.log('mobx previousRoute: ', routerStore.previousRoute, performance.now());
})

autorun(() => {
  console.log('mobx route: ', routerStore.route, performance.now());
})

autorun(() => {
  console.log('mobx transitionRoute: ', routerStore.transitionRoute, performance.now());
})

autorun(() => {
  console.log('mobx intersectionNode: ', routerStore.intersectionNode, performance.now());
})

// autorun(() => {
//   console.log('mobx toActivate: ', routerStore.toActivate, performance.now());
// })

// autorun(() => {
//   console.log('mobx toDeactivate: ', routerStore.toDeactivate, performance.now());
// })

