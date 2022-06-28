import { createRouter, createWebHistory } from 'vue-router';

import Personajes from '../components/Personajes.vue';
import About from '../components/About';
import Unauth from '../components/Unauth';
import Login from '../components/Login';
import Register from '../components/Register';
import Users from '../components/Users';

const logged = () => {
    const isLogged = localStorage.getItem("logged");
    console.log("islog  ??? ", isLogged);
    if (isLogged == 0 || !isLogged) {
        console.log("not logged");
        return { path: '/unauth', name: 'Unauth', component: Unauth }
    }
}

const routes = [
    {
        path: '/personajes',
        name: 'Personajes',
        component: Personajes,
        beforeEnter: [logged]
    },
    {
        path: '/',
        name: 'Home',
        component: Register
    },
    {
        path: '/about/:id',
        name: 'About',
        component: About
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        beforeEnter: [logged]
    },
    {
        path: '/unauth',
        name: 'Unauth',
        component: Unauth
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;