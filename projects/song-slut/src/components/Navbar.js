import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/tab">Tab</Link>
            <Link to="/contact">Lyrics</Link>
            
        </div>
    )
}

export default Navbar;