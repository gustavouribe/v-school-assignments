import {createStore} from 'redux'


const state = {
    data: []
}

export const submit = (post) => {
    console.log('herethee')
    return {
        type: "SUBMIT",
        obj: post
    }
}

// export const deleteBtn = () => {
    
//     return {
//         type: "DELETE",
//     }
// }

const reducer = (prevState = state, action) => {
    switch(action.type){
        case "SUBMIT":
        console.log('here')
            return {
                data: [action.obj,...prevState.data]
            }
        case "DELETE":
        console.log('delete fire')
            return {
            
            }
        default: 
            return prevState
    }
}

export default createStore(reducer)