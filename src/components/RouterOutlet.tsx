// tslint:disable:no-debugger no-console

import { observer } from 'mobx-react';
import { RouterStore } from 'mobx-router5';
import * as React from 'react';
// import {shouldUpdateNode} from 'router5-transition-path';
import { myInject } from '../utils/inject';
// interface IProps {
//   title: string;
// }

@myInject('routerStore')
@observer
export class RouterOutlet extends React.Component<{routerStore: RouterStore;}> {
  public static defaultProps = {
    routerStore: null
  };

  public render() {
    const {route} = this.props.routerStore;
    // debugger;
    const routeName = route ? route.name : '';
    if (route) {
      // console.log(router.buildUrl((route as State).name, (route as State).params))
      // console.log(router.buildPath((route as State).name, (route as State).params))
      // console.log(router.matchPath('/help/:command', (route as State).path))
      // console.log(shouldUpdateNode('help')(route as State, previousRoute as State));
    }
    return <div>{routeName}</div>;
  }
}
