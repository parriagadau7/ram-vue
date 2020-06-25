import Vue from 'vue';
import Vuex from 'vuex';
import {actions} from "../action/CharacterAction";
import  {mutations} from "../mutations/CharacterMutation";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: []
    },
    actions,
    mutations
});

export default store;
