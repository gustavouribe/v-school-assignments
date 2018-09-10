import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
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
            <div className="container">
                <Header/>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
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