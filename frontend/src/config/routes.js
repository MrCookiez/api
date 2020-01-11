// import ProfileUser from './pages/ProfileUser';
// import ProfileOwner from './pages/ProfileOwner';
// import ProfileAdmin from './pages/ProfileAdmin';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default [
    {
        "name": "home",
        "path": "/",
        "component": Home
    },
    {
        "name": "login",
        "path": "/login",
        "component": Login
    },
    {
        "name": "register",
        "path": "/register",
        "component": Register
    }
];
