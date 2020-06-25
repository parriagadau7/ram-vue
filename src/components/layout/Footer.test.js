import {createLocalVue, mount} from '@vue/test-utils'
import Footer from './Footer'
import {BootstrapVue} from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Footer', () => {
    const wrapper = mount(Footer, {
        localVue
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<footer class="page-footer font-small blue">')
    })
})
