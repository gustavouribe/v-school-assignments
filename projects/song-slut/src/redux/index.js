import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
// import Search from './components/Search'
const VSCHOOL_URL = "https://vschool-cors.herokuapp.com/?url="
const initState = {
    songsterr: ""
}

export const getSong = (songTitle, artistName, query) => {
    return function(dispatch){
        console.log('here')
        axios.get(`${VSCHOOL_URL}http://www.songsterr.com/a/ra/songs.json?pattern=${query}`).then(response => {
            console.log(response)
            dispatch({
                type: 'GET_SONGSTERR',
                songsterr: response
            })
        })
    }
}

const reducer = (prevState=initState, action) => {
    switch(action.type){
        case "GET_SONGSTERR":
            return {
                songsterr: action.songsterr
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