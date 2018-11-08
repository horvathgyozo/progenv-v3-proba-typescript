import { Route } from 'router5';
import { isAuthenticated } from './isAuthenticated';

export const routes: Route[] = [
    { name: 'home', path: '/' },
    { name: 'repls', path: '/repls', canActivate: isAuthenticated },
    { name: 'task-search', path: '/task-search' },
    { name: 'login', path: '/login' },
    { name: 'editor', path: '/editor' },
    { name: 'user', path: '/user' },
];