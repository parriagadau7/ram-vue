import {createLocalVue, mount} from '@vue/test-utils'
import Layout from './Layout'
import {BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from "../Root";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)


describe('Layout', () => {
    const wrapper = mount(Layout, {
        localVue, router
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<h1 class="cover-heading">Rick and Morty.</h1>')
    })
})
