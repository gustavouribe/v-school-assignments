import {createStore} from 'redux'

const state = {
    count: 0
}

export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

export const subOne = () => {
    return {
        type: "SUB_ONE"
    }
}

export const mult = val => {
    return {
        type: "MULT",
        val
    }
}

export const divide = val => {
    return {
        type: "DIVIDE",
        val
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "ADD_ONE": 
            return {
                count: prevState.count + 1
            }

        case "SUB_ONE":
            return {
                count: prevState.count - 1
            }

        case "MULT": 
            return {
                count: prevState.count * action.val
            }

        case "DIVIDE": 
            return {
                count: prevState.count / action.val
            }
        default:
         return prevState
    }
}

export default createStore(reducer)