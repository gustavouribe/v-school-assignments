import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tab from './components/Tab'
import Lyrics from './components/Lyrics'
import { Switch, Route, withRouter } from 'react-router-dom'
import Search from './components/Search'




const App = props => {
    return (
        <div className="container">
            <header>
                <h1>Song SLut</h1>
                
            
            </header>

            <Navbar />
            <Search/>
            <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/tab" component={ Tab }/>
                    <Route path="/lyrics" component={ Lyrics }/>
            </Switch>

            





        </div>
    )
}

export default withRouter(App);