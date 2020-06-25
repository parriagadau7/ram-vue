import {createLocalVue, mount} from '@vue/test-utils'
import Character from './Character'
import {BootstrapVue} from 'bootstrap-vue'
import {characters} from "../action/charactersJson";

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('Character', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = mount(Character, {
                localVue,
                propsData: {
                    characters: characters.results
                }
            }
        )
    });

    it('se genera sin errores', ()=> {
        expect(wrapper).toBeDefined();
    });

    it('props empty list characters', ()=> {
        wrapper = mount(Character, {
                localVue,
                propsData: {
                    characters: []
                }
            }
        )
        expect(wrapper.findAll('img').length).toBe(0);
    });

    it('se comprueba redenderizado de elementos', ()=> {
        expect(wrapper.findAll('img').length).toBe(20);
        expect(wrapper.props().characters[0].image).toEqual(
            'https://rickandmortyapi.com/api/character/avatar/21.jpeg');
    });
});

