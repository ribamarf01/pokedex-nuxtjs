export const state = () => {
    return {
        actual: {},
        next: {},
        previous: {}
    }
}

export const getters = {
    GET_ACTUAL: state => state.actual,
    GET_NEXT: state => state.next,
    GET_PREVIOUS: state => state.previous
}

export const mutations = {
    SET_ACTUAL: (state, poke) => state.actual = poke,
    SET_NEXT: (state, poke) => state.next = poke,
    SET_PREVIOUS: (state, poke) => state.previous = poke
}

export const actions = {
    async fetchApi({ commit }, name) {
        const actual = await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        commit("SET_ACTUAL", actual)

        const prev = actual.id === 1 ? await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/898`) : await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${actual.id - 1}`)
        const next = actual.id === 898 ? await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/1`) : await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${actual.id + 1}`)

        commit("SET_NEXT", next)
        commit("SET_PREVIOUS", prev)

    }
}