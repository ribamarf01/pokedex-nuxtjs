export const state = () => {
    return {
        actual: {},
        next: {},
        previous: {},
        exists: true
    }
}

export const getters = {
    GET_ACTUAL: state => state.actual,
    GET_NEXT: state => state.next,
    GET_PREVIOUS: state => state.previous,
    EXISTS: state => state.exists
}

export const mutations = {
    SET_ACTUAL: (state, poke) =>  state.actual = poke,
    SET_NEXT: (state, poke) => state.next = poke,
    SET_PREVIOUS: (state, poke) => state.previous = poke,
    SET_EXISTS: (state, set) => state.exists = set
}

export const actions = {
    async fetchApi({ commit }, name) {
        try {
            const actual = await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${name}`).catch(error => error)
            commit("SET_ACTUAL", actual)

            const prev = actual.id === 1 ? await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/898`) : await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${actual.id - 1}`)
            const next = actual.id === 898 ? await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/1`) : await this.$axios.$get(`https://pokeapi.co/api/v2/pokemon/${actual.id + 1}`)

            commit("SET_NEXT", next)
            commit("SET_PREVIOUS", prev)
            commit("SET_EXISTS", true)
        } catch (error) {
            commit("SET_EXISTS", false)
        }
    }
}