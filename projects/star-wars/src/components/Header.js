import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            
                <header>
                    {/* <h1 className="title">STAR WHorES</h1> */}
                    
                    <h1 className="title">STAR</h1> 
                    <h1 className="title2">STAR WHorES</h1> 
                    <Link to='/'>
                        <h3 className="subTitle">THE ULTIMATE STARWARS DATABASE</h3> 
                        <h3 className="subTitle2">THE ULTIMATE</h3> 
                        <h3 className="subTitle2">STARWARS DATABASE</h3> 
                    
                    </Link>
                    
                    
                    <h1 className="title">WHorES</h1>


                </header>
           
        );
    }
}

export default Header;