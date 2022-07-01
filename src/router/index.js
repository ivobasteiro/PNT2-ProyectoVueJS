import { createRouter, createWebHistory } from 'vue-router';

import Personajes from '../components/Personajes.vue';
import Unauth from '../components/Unauth';
import Login from '../components/Login';
import Register from '../components/Register';
import Users from '../components/Users';
import Champions from '../components/Champions';
import AddChampion from '../components/AddChampion';

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
        path: '/',
        name: 'Home',
        component: Register
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
        path: '/personajes',
        name: 'Personajes',
        component: Personajes,
        beforeEnter: [logged]
    },
    {
        path: '/champions',
        name: 'Champions',
        component: Champions,
        beforeEnter: [logged]
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
    },
    {
        path: '/addchampion',
        name: 'AddChampion',
        component: AddChampion
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;