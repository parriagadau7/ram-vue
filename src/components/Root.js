import Home from "./home/Home.vue";
import CharacterContainer from "./character/CharacterContainer.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/character', component: CharacterContainer }
]

const router = new VueRouter({
    routes
})

export default router;
