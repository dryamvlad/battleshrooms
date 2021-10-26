import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import AddWhitelisted from '../views/AddWhitelisted'
import Presale from '../views/Presale'
import Giveaway from '../views/Giveaway'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addwl',
        name: 'Add Whitelisted',
        component: AddWhitelisted
    },
    {
        path: '/presale',
        name: 'Presale',
        component: Presale
    },
    {
        path: '/giveaway',
        name: 'Giveaway',
        component: Giveaway
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router