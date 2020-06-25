import axios from 'axios';
import {LIST_CHARACTER} from "./Constant";

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const actions = {
    async listCharacters({ commit }, numPage) {
        const response = await axios.get(`${apiUrl}/?page=${numPage}`)
        commit(LIST_CHARACTER,response.data.results)
    }
}
