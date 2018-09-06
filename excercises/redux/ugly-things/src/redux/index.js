import { createStore } from 'redux'

//INIT STATE
const initState = {
    minutes: 0,
    seconds: 0,
    milliSeconds: 0,

}


//ACTION
export const addItem = () => {
    return {
        type: "ADD_ITEM"
    }
}

export const editItem = () => {
    return {
        type: "EDIT_ITEM"
    }
}

export const deleteItem = () => {
    return {
        type: "DELETE_ITEM"
    }
}

// REDUCER

export default createStore(reducer)