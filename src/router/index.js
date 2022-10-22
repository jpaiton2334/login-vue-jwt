// import { def } from "@vue/shared";
// import { Component } from "materialize-css";
import { createWebHistory, createRouter } from "vue-router";
import Estudiantes from '../views/Estudiantes.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
const routes = [
    
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Estudiantes',
        name: 'Estudiantes',
        component: Estudiantes
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;