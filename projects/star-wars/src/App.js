import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'
import Films from './components/Films'
import Species from './components/Species'
import Vehicles from './components/Vehicles'
import Starships from './components/Starships'
import Footer from './components/Footer'
import { Switch, Route, withRouter } from 'react-router-dom'


const App = () => {

        return (
            <div>
                <header>
                    {/* <h1 className="title">STAR WHorES</h1> */}
                    <h1 className="title">STAR</h1> 
                    <h1 className="title2">STAR WHorES</h1> 
                    <h3 className="subTitle">THE ULTIMATE STARWARS FANPAGE</h3> 
                    <h3 className="subTitle2">THE ULTIMATE</h3> 
                    <h3 className="subTitle2">STARWARS FANPAGE</h3> 
                    <h1 className="title">WHorES</h1>


                </header>

                <Navbar/>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/people' component={ People }/>
                    <Route path='/planets' component={ Planets }/>
                    <Route path='/films' component={ Films }/>
                    <Route path='/species' component={ Species }/>
                    <Route path='/vehicles' component={ Vehicles }/>
                    <Route path='/starships' component={ Starships }/>  
                    
                </Switch>
                <Footer/>
            </div>
        )
    
}



export default withRouter(App)