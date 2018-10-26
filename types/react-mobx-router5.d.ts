export class BaseLink {
    static defaultProps: {
        routeOptions: {};
        routeParams: {};
    };
    static displayName: string;
    constructor(props: any);
    buildUrl(routeName: any, routeParams: any): any;
    clickHandler(evt: any): void;
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace BaseLink {
    namespace propTypes {
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function dangerouslySetInnerHTML(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace dangerouslySetInnerHTML {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function isActive(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace isActive {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onClick {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function route(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace route {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeOptions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeOptions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeParams(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeParams {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function router(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace router {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routerStore(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routerStore {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class Link {
    static computeClassName(className: any, activeClassName: any, isActive: any): any;
    static contextTypes: any;
    static defaultProps: {
        activeClassName: string;
        activeStrict: boolean;
        className: string;
        routeParams: {};
    };
    static displayName: string;
    static isMobXReactObserver: boolean;
    static isMobxInjector: boolean;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace Link {
    namespace propTypes {
        function activeClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace activeClassName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function activeStrict(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace activeStrict {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeParams(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeParams {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    class wrappedComponent {
        static computeClassName(className: any, activeClassName: any, isActive: any): any;
        static isMobXReactObserver: boolean;
        constructor(props: any);
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        isActive(routeName: any, routeParams: any, activeStrict: any): any;
        render(): any;
        setState(partialState: any, callback: any): void;
        shouldComponentUpdate(nextProps: any, nextState: any): any;
    }
    namespace wrappedComponent {
        namespace propTypes {
            function routerStore(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class NavLink {
    static computeClassName(className: any, activeClassName: any, isActive: any): any;
    static contextTypes: any;
    static defaultProps: {
        activeClassName: string;
        activeStrict: boolean;
        className: string;
        routeParams: {};
    };
    static displayName: string;
    static isMobXReactObserver: boolean;
    static isMobxInjector: boolean;
    constructor(...args: any[]);
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace NavLink {
    namespace propTypes {
        function activeClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace activeClassName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function activeStrict(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace activeStrict {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace children {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace className {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function routeParams(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace routeParams {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    class wrappedComponent {
        static computeClassName(className: any, activeClassName: any, isActive: any): any;
        static isMobXReactObserver: boolean;
        constructor(props: any);
        componentDidMount(): void;
        componentDidUpdate(): void;
        componentWillUnmount(): void;
        forceUpdate(callback: any): void;
        isActive(routeName: any, routeParams: any, activeStrict: any): any;
        render(): any;
        setState(partialState: any, callback: any): void;
        shouldComponentUpdate(nextProps: any, nextState: any): any;
    }
    namespace wrappedComponent {
        namespace propTypes {
            function routerStore(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
export class RouteView {
    static defaultProps: {
        errorMessage: string;
        errorStyle: {
            color: string;
        };
    };
    constructor(props: any);
    componentDidCatch(error: any, info: any): void;
    componentWillReceiveProps(nextProps: any): void;
    forceUpdate(callback: any): void;
    render(): any;
    setState(partialState: any, callback: any): void;
}
export namespace RouteView {
    namespace propTypes {
        function errorMessage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace errorMessage {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function errorStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace errorStyle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function route(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function routeNodeName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function routes(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
}
export function getComponent(route: any, routeNodeName: any, routesConfig: any): any;
export function routeNode(nodeName: any, ...args: any[]): any;
export function withLink(LinkWrapper: any, ...args: any[]): any;
export function withRoute(BaseComponent: any, ...args: any[]): any;