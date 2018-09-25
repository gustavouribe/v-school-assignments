import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initState = {
    results: [],
    filteredResults:[]
}

export const getFood = () => {
    return dispatch => {
        axios.get('/food').then(res => {
            dispatch({
                type: "GET_FOOD",
                results: res.data
            })
        })
    }
}

export const getWine = () => {
    return dispatch => {
        axios.get('/wine').then(res => {
            dispatch({
                type: "GET_WINE",
                results: res.data
            })
        })
    }
}

export const filterResults = (itemName) => {
    return {
        type: "FILTER_RESULTS", 
        itemName
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_FOOD":
            return {
                results: [...prevState.results, ...action.results],
                filteredResults: prevState.filteredResults
            }
        case "GET_WINE":
            return {
                results: [...prevState.results, ...action.results],
                filteredResults: prevState.filteredResults
            }
        case "FILTER_RESULTS":
        // console.log(prevState.results.filter(result => {
        //     return result.itemName.toLowerCase().includes(action.itemName)
        // }))
            return {
                results: prevState.results,
                filteredResults: prevState.results.filter(result => {
                    return result.itemName.toLowerCase().includes(action.itemName)
                })
            }
        default: 
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))