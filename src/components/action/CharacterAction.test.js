import moxios from "moxios";
import {characters} from "./charactersJson.js";
import {actions} from "./CharacterAction";

describe('CharacterAction', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() =>
        moxios.uninstall()
    );

    it('call listCharacters', () => {

        moxios.stubRequest("https://rickandmortyapi.com/api/character/?page=2", {
            status: 200,
            response: characters,
        });

        let data

        let mockCommit = (state, payload) => {
            data = payload
        }

        return actions.listCharacters({ commit: mockCommit }, 2)
            .then(() => {
                expect(data.length).toBe(20)
            });
    });

});
