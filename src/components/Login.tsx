import { observer } from 'mobx-react';
import * as React from 'react';
import { AuthStore } from '../services/authStore';
import { myInject } from '../utils/inject';

interface IProps {
    name: string,
}

const login: React.SFC<{authStore: AuthStore} & IProps> = (props) => {
    return <h1>Login, {props.name}</h1>;
}
login.defaultProps = {
    name: 'Guest User',
}

export const login2 = myInject('authStore')(observer(login));