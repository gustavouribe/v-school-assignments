import React, { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Content from './components/Content'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Content/>
                <Skills/>
                <Education/>
                <Footer/>
            </div>
        );
    }
}

export default App;