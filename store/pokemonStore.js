export const state = () => {
    return {
        pokemonList: [],
        index: 1,
        endpoint: 20,
        loaded: false
    }
}

export const mutations = {
    SET_LIST: (state, list) => {
        state.pokemonList = [...state.pokemonList, ...list]
    },
    SET_INDEX_ENDPOINT_VALUES: state => {
        state.index = state.endpoint + 1
        state.endpoint = state.endpoint+20
    },
    CHANGE_LOADED_STATE: (state, value) => state.loaded = value
}

export const actions = {
    fetchList({ commit, state }) {
        const pokemonPromises = []

        commit("CHANGE_LOADED_STATE", false)
        for(let i = state.index; i <= state.endpoint; i++) {
            pokemonPromises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => response.json()))
        }

        Promise.all(pokemonPromises)
            .then(pokemons => {
                commit("SET_LIST", pokemons)
            })

        commit("SET_INDEX_ENDPOINT_VALUES")
        commit("CHANGE_LOADED_STATE", true)
    }
}

export const getters = {
    GET_LIST: state => state.pokemonList,
    GET_INDEX: state => state.index,
    GET_ENDPOINT: state => state.endpoint,
    GET_LOADED_STATE: state => state.loaded
}