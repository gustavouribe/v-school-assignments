import React from 'react';
import Search from './components/Search'
import Header from './components/Header'
import Results from './components/Result'


// import InfoCard from './components/InfoCard'

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Search/>
            {/* <InfoCard/> */}
        </div>
    );
};

export default App