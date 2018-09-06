import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Switch, Route} from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" component={ Home }/>
                <Route path="/" component={ About }/>
                <Route path="/" component={ Contact }/>
                <Route path="/" component={ Home }/>
            </Switch>

        </div>
    )
}

export default Home;