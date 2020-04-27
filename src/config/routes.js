import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Shops from '../pages/Shops';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
  {
    name: 'deals',
    path: '/deals',
    component: Home,
  },
  {
    name: 'shops',
    path: '/shops',
    component: Shops,
  },
  {
    name: 'food-map',
    path: '/food-map',
    component: Home,
  },
  {
    name: 'blog',
    path: '/blog',
    component: PostsPage,
  },
  {
    name: 'post',
    path: '/blog/post/:id',
    component: PostPage,
  },
  {
    name: 'contact',
    path: '/contact',
    component: Home,
  },
  {
    name: 'jobs',
    path: '/jobs',
    component: Home,
  },
  {
    name: 'about-us',
    path: '/about-us',
    component: Home,
  },
];
