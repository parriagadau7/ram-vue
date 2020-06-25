import {createLocalVue, mount} from '@vue/test-utils'
import App from './App'
import {BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)
const router = new VueRouter()

describe('App', () => {
    const wrapper = mount(App, {
        localVue, router
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<footer class="page-footer font-small blue">')
    })
})
