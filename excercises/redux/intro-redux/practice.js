// npm install --save redux

var redux = require('redux')

const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

// Reducer
const reducer = (prevState = {}, arg2) => {
    switch(action.type){
        case "ADD_ONE":
            return {
                cont: prevState.count + 1
            }
        default: 
            return prevState
    }
}

const store =  redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

//Dispatch
