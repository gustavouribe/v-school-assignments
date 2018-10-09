import React from 'react'
import Controls from './components/Controls'

import Display from './components/Display'
import './styles.css'

const App = () => {
    return (
        <div className="container">
            <div className="header">
                <span className="title blue">G</span><span className="title red">h</span><span className="title yellow">e</span ><span className="title blue">t</span><span className="title green">t</span><span className="title red">o</span>
            
            
            <span>Stopwatch</span></div>
            <Display />
            <Controls/>
        </div>
    )
}

export default App