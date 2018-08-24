import React, {Component} from 'react';
import "./index.css"
import HeroesCom from './HeroesCom.js'
import superHeroes from './superHeroes.json'





class App extends Component {


    render(){
        const heroes = superHeroes.heroes
        const displayHeroesCom = heroes.map((hero, i) => {
            return <HeroesCom key={hero.name+i}
                            name={hero.name}
                            image={hero.image}
                            catchPhrase={hero.catchPhrase}
                    />
        })
    
        return (
            <div className="container">
                {displayHeroesCom}
            </div>
        )    
    }
}









export default App;