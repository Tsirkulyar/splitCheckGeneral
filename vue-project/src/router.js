import {createRouter, createWebHashHistory} from 'vue-router'
import HelloCard from './components/pages/HelloCard.vue'
import GeneralForm from './components/pages/GeneralForm.vue'
import AddProducts from './components/pages/AddProducts.vue'
import CheckPage from './components/pages/CheckPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            name:'HelloCard',
            component: HelloCard},
        {
            path: '/users',
            name:'GeneralForm',
            component: GeneralForm},
        {
            path: '/products',
            name:'AddProducts',
            component: AddProducts
        },
        {
            path: '/check',
            name:'CheckPage',
            component: CheckPage
        }
    ]
})

