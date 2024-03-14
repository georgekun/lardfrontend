import { createMemoryHistory, createRouter } from 'vue-router'



const routes = [
    {
        path: '/',
        component:()=> import('@/pages/HomeView.vue')
    },
]

export default  createRouter({
    history: createMemoryHistory(),
    routes,
})