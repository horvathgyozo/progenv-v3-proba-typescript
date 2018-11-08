import { AuthStore } from '../services/authStore';

export const isAuthenticated = (_router: any, { authStore }: { authStore: AuthStore }) => (_toState: any, _fromState: any, done: any) => {
    if (authStore.isAuthenticated) {
        done();
    } else {
        done({ redirect: { name: 'login' } });
    }
};
