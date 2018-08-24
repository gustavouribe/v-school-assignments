import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super()

        this.state={
            btnA: 'white',
            btnB: 'white',
            btnC: 'white',
            btnD: 'white',
        }
    }

    // makeSquaresBlack = () => {
    //     if(this.state.btnA === 'black' && this.state.btnB === 'black' && this.state.btnC === 'black' && this.state.btnD === 'black'  ){
    //         this.setState({btnA: 'white', btnB: 'white', btnC: 'white', btnD: 'white'})
    //     }else if (this.state.btnA === 'white' && this.state.btnB === 'white' && this.state.btnC === 'white' && this.state.btnD === 'white'){
    //         this.setState({btnA: 'black', btnB: 'black', btnC: 'black', btnD: 'black'})
    //     }
    // }

    makeSquaresBlack = () => {
        if(this.state.btnA === 'black' && this.state.btnB === 'black' && this.state.btnC === 'black' && this.state.btnD === 'black'  ){
            this.setState({btnA: 'white', btnB: 'white', btnC: 'white', btnD: 'white'})
        }else if (this.state.btnA === 'white' && this.state.btnB === 'white' && this.state.btnC === 'white' && this.state.btnD === 'white'){
            this.setState({btnA: 'black', btnB: 'black', btnC: 'black', btnD: 'black'})
        }
    }





    makeSquaresPurple = () => {
        if(this.state.btnA === 'white' && this.state.btnB === 'white'){
            this.setState({btnA: 'purple', btnB: 'purple'})
        } else if (this.state.btnA === 'purple' && this.state.btnB === 'purple'){
            this.setState({btnA: 'white', btnB: 'white'})
        }

        // this.setState(prevState => {
        //     return {
        //         btnA: 'purple',
        //         btnB: 'purple',
        //     }
        // })
    }

    makeSquaresBlueC = () => {
        if(this.state.btnC === 'white'){
            this.setState({btnC: 'blue'})
        } else if (this.state.btnC === 'blue'){
            this.setState({btnC: 'white'})
        }
        


        
        // this.setState(prevState => {
        //     return {
        //         btnC: 'blue',
        //     }
        // })
    }

    makeSquaresBlueD = () => {
        if(this.state.btnD === 'white'){
            this.setState({btnD: 'blue'})
        } else if (this.state.btnD === 'blue'){
            this.setState({btnD: 'white'})
        }




        // this.setState(prevState => {
        //     return {
        //         btnD: 'blue',
        //     }
        // })
    }

    

    render(){
        const styles = {
            btnA: {
                backgroundColor: this.state.btnA
            },
            btnB: {
                backgroundColor: this.state.btnB
            },
            btnC: {
                backgroundColor: this.state.btnC
            },
            btnD: {
                backgroundColor: this.state.btnD
            }
        }

        return (
            <div>
                <div className="header">
                    <h1>DJ ЯΞACT</h1>
                
                </div>
                <div className="buttonWrapper">
                    <button onClick={this.makeSquaresBlack} class="btn A" style={styles.btnA}>Black</button>
                    <button onClick={this.makeSquaresPurple} class="btn B" style={styles.btnB}>Purple</button>
                    <button onClick={this.makeSquaresBlueC} class="btn C" style={styles.btnC}>Blue</button>
                    <button onClick={this.makeSquaresBlueD} class="btn D" style={styles.btnD}>Blue</button>
                </div>

            </div>
        )
    }

}

export default App;