// const redux = require('redux')
import { createStore } from 'redux'

// Init state
const initState = {
    minutes: 0,
    seconds: 0,
    milliSeconds: 0,

}


// Action 
export const startTimer = () => {
    return {
        type: "START_TIMER"
    }
}

export const stopTimer = () => {
    return {
        type: "STOP_TIMER"
    }
}

export const resetTimer = () => {
    return {
        type: "RESET_TIMER"
    }
}

// Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){

        case "START_TIMER":
            if(prevState.seconds === 59 && prevState.milliSeconds === 99){
                return {
                    minutes: prevState.minutes + 1,
                    seconds: 0,
                    milliSeconds: 0
                }
            }else if(prevState.milliSeconds === 99){
                return {
                    minutes: prevState.minutes,
                    seconds: prevState.seconds + 1,
                    milliSeconds: 0
                }
            }else{
                return {
                    minutes: prevState.minutes,
                    seconds: prevState.seconds,
                    milliSeconds: prevState.milliSeconds + 1
                }
            }
            
        case "STOP_TIMER":
            return {
                // count: 0

            }
        case "RESET_TIMER":
            return {
                minutes: 0,
                seconds: 0,
                milliSeconds: 0
            }
        default:
            return prevState
    }
}


export default createStore(reducer)