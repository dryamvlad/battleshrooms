import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import AddWhitelisted from '../views/AddWhitelisted'
import AddBotHolders from '../views/AddBotHolders'
import Presale from '../views/Presale'
import WLcheck from '../views/WLcheck'
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
        path: '/addbh',
        name: 'Add Bot Holders',
        component: AddBotHolders
    },
    {
        path: '/presale',
        name: 'Presale',
        component: Presale
    },
    {
        path: '/wlcheck',
        name: 'Whitelist check',
        component: WLcheck
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