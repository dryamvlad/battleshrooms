import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import AddEarlySupporters from '../views/AddEarlySupporters'
import EarlyMint from '../views/EarlyMint'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/addes',
        name: 'Add Early Supporters',
        component: AddEarlySupporters
    },
    {
        path: '/early_mint',
        name: 'Mint for Early Supporters',
        component: EarlyMint
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router