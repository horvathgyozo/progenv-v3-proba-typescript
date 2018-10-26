import * as React from 'react';
import { withRoute } from 'react-mobx-router5';

interface IProps {
    routeName: string
    component: any
}

@withRoute
export class Route extends React.Component<IProps> {

    public static defaultProps = {
        routerStore: null
    }
        
    public shouldComponentUpdate(nextProps: any) {
        const { routerStore: { toActivate, toDeactivate }, routeName } = nextProps;
        return toActivate.includes(routeName) || toDeactivate.includes(routeName);
    }

    public render() {
        const { component, routerStore: { toActivate }, routeName }: any = this.props;
        // console.log('Route renders:', routeName);

        if (toActivate.includes(routeName)) {
            return React.createElement(component, this.props)
        }

        // if (toDeactivate.includes(routeName)) {
        return null;
        // }
    }
}
