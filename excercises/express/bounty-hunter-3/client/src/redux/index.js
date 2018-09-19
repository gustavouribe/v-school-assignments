import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initState = {
    bounty: [],
}

export const getBounty = () => {
    return dispatch => {
        axios.get('/bounty').then(res => {
            console.log(res)
            dispatch({
                type: "GET_BOUNTY",
                bounty: res.data
            })
        })
    }
}

export const deleteBounty = (id) => {
    return dispatch => {
        axios.delete(`/bounty/${id}`).then(res =>{
            console.log(res)
            dispatch({
                type: "DELETE_BOUNTY",
                bounty: res.data
            })
        })
    }
}

export const postBounty = (newBounty) => {
    return dispatch => {
        axios.post('/bounty', newBounty).then(res =>{
            dispatch({
                type: "POST_BOUNTY",
                bounty: res.data
            })
        })
    }
}

export const editBounty = (id) => {
    return dispatch => {
        axios.put(`/bounty/${id}`).then(res => {
            dispatch({
                type: "PUT_BOUNTY",
                bounty: res.data
            })
        })
    }
}



const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_BOUNTY":
            return {
                bounty: action.bounty
            }
        case "DELETE_BOUNTY":
            return {
                bounty: action.bounty
            }
        case "POST_BOUNTY":
            return {
                bounty: action.bounty
            }
        case "PUT_BOUNTY":
            return {
                bounty: action.bounty
            }

        default: 
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))