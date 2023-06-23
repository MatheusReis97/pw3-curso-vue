import Vue from "vue";  
import Router from "vue-router";

import HomePage from './components/HomePage';
import UserIndex from './components/UserIndex';
import UserDetails from './components/UserDetails';

Vue.use(Router);

export default new Router ({
    mode: 'history', //metodo de navegação padrao da web (bate no server)
    routes: [{
        path: '/',
        name: 'inicio',
        component: HomePage 
    },{
    path: '/usuario',
    name: 'usuario',
    component: UserIndex,
    children: [
        {
            path: ':id',
            component: UserDetails, 
            props: true
        }
    ]
        
    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path: '*',
        redirect: '/404'

    },{
        path: '/404',
        component: HomePage
    }]
});
