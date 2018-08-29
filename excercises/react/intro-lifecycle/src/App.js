import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()

        this.state={
            backgroundColor: 'cyan'
        }
    }
    
    componentWillMount(){
        window.addEventListener('keydown', e =>{
            if(e.code === 'KeyB' && this.state.backgroundColor !== 'blue' ){
                this.setState({
                    backgroundColor: 'blue'
                })
            } else if (e.code === 'KeyB' && this.state.backgroundColor === 'blue' ){
                this.setState({
                    backgroundColor: 'cyan'
                }) 
            }
        })
    }

    componentWillUnmount(){
        window.addEventListener('keydown', null)
    }


    render(){
        const styles={
            container: {
                backgroundColor: this.state.backgroundColor
            }
        }

    return (
        <div style={styles.container}>
            Hey Werld 
        </div>
    )
    }




}

export default App;