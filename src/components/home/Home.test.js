import {mount} from '@vue/test-utils'
import Home from './Home'


describe('home', () => {
    const wrapper = mount(Home)

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<h1 class="cover-heading">Rick and Morty.</h1>')
    })
})
