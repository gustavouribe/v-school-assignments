import React, {Component} from 'react'
import { connect } from 'react-redux'
import { startTimer } from '../redux'
import { stopTimer } from '../redux'
import { resetTimer } from '../redux'

import maxFullScreen from '../icons/maxFullScreen.svg';
import minFullScreen from '../icons/minFullScreen.svg';

let timerId;
class Controls extends Component {
    constructor(){
        super()

        this.state = {
            status: true
        }
    }

    

    start = () => {
        if(!timerId){
            timerId = setInterval(this.props.startTimer, 10) // '123'
        }
        this.toggle()
    }

    stop = () => {
        clearInterval(timerId)
        timerId = false
        this.toggle()
    }

    reset = () => {

        this.props.resetTimer()

    }

    toggle = () => {
        this.setState(prevState => {
            return {
                status: !prevState.status 
            }
        })
    }
    
    render () {


    
        return (
            <div className="controls">
                <div className="controlWrapper">
                    
                    {/* <button className="startBtn" onClick={ start }>START</button>
                    <button className="startBtn" onClick={ stop }>STOP</button>
                    <button className="resetBtn" onClick={ this.props.resetTimer }>RESET</button>  */}
                    {this.state.status ? 
                    <button className="startBtn" onClick={ this.start }>START</button>
                    :
                    <button className="startBtn" onClick={ this.stop }>STOP</button>
                    }
                    <button className="resetBtn" onClick={ this.props.resetTimer }>RESET</button> 
                    <div>
                        <img class="icons" src={maxFullScreen} alt="max screen"/>
                        <img class="icons" src={minFullScreen} alt="max screen"/>
                    </div>
                   
                </div>

            </div>
        )
        }
    
}

export default connect(null, { startTimer, stopTimer, resetTimer })(Controls)