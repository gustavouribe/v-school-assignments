import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
// import Search from './components/Search'
const VSCHOOL_URL = "https://vschool-cors.herokuapp.com/?url="
const initState = {
    songsterr: [],
    songPage: ''
}

export const getQuery = (query) => {
    return function(dispatch){
        console.log('query')
        axios.get(`${VSCHOOL_URL}http://www.songsterr.com/a/ra/songs.json?pattern=${query}`).then(response => {
            console.log(response.data)
            dispatch({
                type: 'GET_QUERY',
                songsterr: response.data
            })
        })
    }
}

export const getSong = (id) => {
    console.log('yo')
    return function(dispatch){
        axios.get(`${VSCHOOL_URL}http://www.songsterr.com/a/wa/song?id=${id}`).then(response => {
          console.log(response)
            dispatch({
                type: 'GET_SONG',
                songsterr: response.data
            })
        })
    }
}



const reducer = (prevState=initState, action) => {
    switch(action.type){
        case "GET_QUERY":
            return {
                songsterr: action.songsterr,
                songPage: prevState.songPage
            }
        case "GET_SONG":
            return {
                songPage: action.songsterr,
                songsterr: prevState.songsterr
            }
        default: 
            return prevState
    }
}

export default createStore(
    reducer,
    applyMiddleware(thunk),
    // devtool info here
)