// tslint:disable:no-debugger no-console

import { autorun } from 'mobx';
import { mobxPlugin, RouterStore } from 'mobx-router5';
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';
import loggerPlugin from 'router5/plugins/logger'; 

const routerStore = new RouterStore();

function myPlugin(_router: any, _dependencies: any) {
  return {
      onTransitionSuccess: (toState: any, _fromState: any) => {
          console.log('Yippee, navigation to ' + toState.name + ' was successful!', performance.now());
      }
  };
}

const mware1 = (_router: any) => (_toState: any, _fromState: any, done: any) => {
  console.log('mware1 starts', performance.now())
  setTimeout(() => {
    console.log('mware1 ends', performance.now())
    done()
  }, 2000);
};
​
myPlugin.pluginName = 'MY_PLUGIN';

const routes = [
  { name: 'home',       path: '/home'},
  { name: 'users',      path: '/users'},
  { name: 'users.view', path: '/view'},
  { name: 'users.list', path: '/list'}
];

export const router = createRouter(routes)
  .usePlugin(mobxPlugin(routerStore))
  .usePlugin(browserPlugin({ useHash: true }))
  .usePlugin(loggerPlugin)
  .usePlugin(myPlugin)
  .useMiddleware(mware1);

// setTimeout(() => router.navigate('users', {}, { replace: true }), 2000);
// setTimeout(() => router.navigate('users', {}, { skipTransition: true, force: true, reload: true }), 8000);
setTimeout(() => router.replaceHistoryState('users'), 6000);

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

autorun(() => {
  console.log('mobx toActivate: ', routerStore.toActivate, performance.now());
})

autorun(() => {
  console.log('mobx toDeactivate: ', routerStore.toDeactivate, performance.now());
})

