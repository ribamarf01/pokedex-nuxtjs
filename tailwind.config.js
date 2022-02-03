module.exports = {
  theme: {
    extend: {
      colors: {
        fire: '#d93106',
        grass: '#77c43a',
        electric: '#eca81b',
        water: '#328ce4',
        ground: '#ceac54',
        rock: '#b7a255',
        fairy: '#d79ed8',
        poison: '#5d2c5c',
        bug: '#8b990e',
        dragon: '#6f5bca',
        psychic: '#ed4480',
        flying: '#8da1ea',
        fighting: '#8da1ea',
        normal: '#c5c0b6',
        dark: '#513d2d',
        steel: '#b2b1c1',
        ice: '#79d8f5',
        ghost: '#5c5da8'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  }
}
