import {createLocalVue, mount} from '@vue/test-utils'
import CharacterContainer from './CharacterContainer'
import {BootstrapVue} from 'bootstrap-vue'
import Vuex from 'vuex';
import {characters} from "../action/charactersJson";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('CharacterContainer', () => {

    let wrapper;
    let actions;

    beforeEach(() => {
        actions = {
           listCharacters: jest.fn(),
        }
        let store = new Vuex.Store({
            actions
        })
        wrapper = mount(CharacterContainer, {
                store,
                localVue
            }
        )
    });

    it('llamado a props listImages en mounted', () => {
        expect(actions.listCharacters).toHaveBeenCalled()
    });

    it('se genera sin errores', () => {
        expect(wrapper).toBeDefined();
    });
});


