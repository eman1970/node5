const homeView = '/'
const signInView = '/signin'
const accessoriesView = '/accessories'
const brandsView = '/brands'
const expertisView = '/expertis'
const newsView = '/news'
const shopView = '/shop'


const settingsView = '/authentication/settings'

const pokemonDetailView = (name?: string) => { return name ? '/pokemon/$(name}' : '/pokemon/:name' }

export default {

    homeView,

    signInView,
    accessoriesView,
    brandsView,
    expertisView,
    newsView,
    shopView,
    settingsView,
    pokemonDetailView





}