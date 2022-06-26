import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
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
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        beforeEnter: [logged]
    },
    {
        path: '/about/:id',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
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