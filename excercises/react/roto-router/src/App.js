import React from 'react'
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";



function App () {
    return (
        <div className="container">
            <Navbar/>  {/*This is outside Switch, so it will always render*/}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/services" component={Services}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App