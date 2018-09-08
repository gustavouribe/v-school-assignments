import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'


const initState = {
    people: [],
    planets: [],
    films: [],
    species: [],
    vehicles: [],
    starships: [],
}


export const getPeople = () => {
    return dispatch => {
        axios.get(`https://swapi.co/api/people/`).then(response => {
            console.log(response)
            dispatch({
                type: "GET_PEOPLE",
                starPeople: response.data.results
            })
        })       
    }
}

export const getPlanets = () => {
    return dispatch => {
        axios.get(`https://swapi.co/api/planets/`).then(response => {
            console.log(response)
            dispatch({
                type: "GET_PLANETS",
                starPlanets: response.data.results
            })
        })       
    }
}

export const getFilms = () => {
    return dispatch => {
        axios.get(`https://swapi.co/api/films/`).then(response => {
            console.log(response)
            dispatch({
                type: "GET_FILMS",
                starFilms: response.data.results
            })
        })       
    }
}

export const getSpecies = () => {
    return dispatch => {
        axios.get(`https://swapi.co/api/species/`).then(response => {
            console.log(response)
            dispatch({
                type: "GET_SPECIES",
                starSpecies: response.data.results
            })
        })       
    }
}

export const getVehicles = () => {
    return dispatch => {
        axios.get(`https://swapi.co/api/vehicles/`).then(response => {
            console.log(response)
            dispatch({
                type: "GET_VEHICLES",
                starVehicles: response.data.results
            })
        })       
    }
}

export const getStarships = () => {
    return dispatch => {
        axios.get(`https://swapi.co/api/starships/`).then(response => {
            console.log(response)
            dispatch({
                type: "GET_STARSHIPS",
                starStarships: response.data.results
            })
        })       
    }
}


const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_PEOPLE":
            return {
                people: action.starPeople,

                planets: prevState.planets,
                films: prevState.films,
                species: prevState.species,
                vehicles: prevState.vehicles,
                starships: prevState.starships,
            }
        case "GET_PLANETS":
            return {
                planets: action.starPlanets,

                people: prevState.people,
                films: prevState.films,
                species: prevState.species,
                vehicles: prevState.vehicles,
                starships: prevState.starships,
            }
        case "GET_FILMS":
            return {
                films: action.starFilms,

                people: prevState.people,
                planets: prevState.planets,
                species: prevState.species,
                vehicles: prevState.vehicles,
                starships: prevState.starships,
            }
        case "GET_SPECIES":
            return {
                species: action.starSpecies,

                people: prevState.people,
                planets: prevState.planets,
                films: prevState.films,
                vehicles: prevState.vehicles,
                starships: prevState.starships,
            }
        case "GET_VEHICLES":
            return {
                vehicles: action.starVehicles,

                people: prevState.people,
                planets: prevState.planets,
                films: prevState.films,
                species: prevState.species,
                starships: prevState.starships,
            }
        case "GET_STARSHIPS":
            return {
                starships: action.starStarships,

                people: prevState.people,
                planets: prevState.planets,
                films: prevState.films,
                species: prevState.species,
                vehicles: prevState.vehicles,
            }

        default:
            return prevState
    }
}


export default createStore(reducer, applyMiddleware(thunk))
