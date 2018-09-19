import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initState = {
    bounty: [],
}

export const getBounty = () => {
    return dispatch => {
        axios.get('/bounty').then(res => {
            dispatch({
                type: "GET_BOUNTY",
                bounty: res.data
            })
        })
    }
}

export const deleteBounty = (_id) => {
    return dispatch => {
        axios.delete(`/bounty/${_id}`).then(res =>{
            dispatch({
                type: "DELETE_BOUNTY",
                _id: _id
            })
        })
    }
}

export const postBounty = (newBounty) => {
    return dispatch => {
        axios.post('/bounty', newBounty).then(res =>{
            dispatch({
                type: "POST_BOUNTY",
                bounty: res.data.newSavedBounty
            })
        })
    }
}

export const editBounty = (_id, obj) => {
    return dispatch => {
        axios.put(`/bounty/${_id}`, obj).then(res => {
            console.log(res.data)
          
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
                bounty: prevState.bounty.filter(bounty => bounty._id !== action._id)
            }
        case "POST_BOUNTY":
            return {
                bounty: [...prevState.bounty, action.bounty]
            }
        case "PUT_BOUNTY":
            return {
                bounty: prevState.bounty.map(bounty => bounty._id === action.bounty._id ? action.bounty : bounty)
                
            }

        default: 
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))