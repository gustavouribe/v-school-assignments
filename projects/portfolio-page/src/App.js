import React, { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Skills/>
                <Education/>
                <Footer/>
            </div>
        );
    }
}

export default App;