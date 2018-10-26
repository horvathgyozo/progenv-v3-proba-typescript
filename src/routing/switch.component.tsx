import * as React from 'react';
import { withRoute } from 'react-mobx-router5';

interface IChildProp {
    routeName: string
}

@withRoute
export class Switch extends React.Component {

    public static defaultProps = {
        routerStore: null
    }

    public shouldComponentUpdate(nextProps: any) {
        const { routerStore: { toActivate, toDeactivate }, children } = nextProps;
        let result = false;
        React.Children.forEach(children, (child: React.ReactChild) => {
            if (!result && React.isValidElement(child)) {
                const routeName = (child.props as IChildProp).routeName;
                result = toActivate.includes(routeName) || toDeactivate.includes(routeName);
            }
        });
        return result;
    }

    public render() {
        const { routerStore: { toActivate }, children}: any = this.props;

        let element: any;
        let match = false;

        React.Children.forEach(children, child => {
            if (!match && React.isValidElement(child)) {
                element = child;

                const routeName = (child.props as IChildProp).routeName;
                match = !routeName || toActivate.includes(routeName);
            }
        });

        return match
            ? React.cloneElement(element, {})
            : null;
    }
}  
