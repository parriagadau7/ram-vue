import {createLocalVue, mount} from '@vue/test-utils'
import Header from './Header'
import {BootstrapVue} from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Header', () => {
    const wrapper = mount(Header, {
        localVue
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<ul class="navbar-nav">')
    })
})
