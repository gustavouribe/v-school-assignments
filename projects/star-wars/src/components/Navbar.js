import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navBar">

            <Link to='/about'>About</Link>
            <Link to='/people'>People</Link>
            <Link to='/planets'>Planets</Link>
            <Link to='/films'>Films</Link>
            <Link to='/species'>Species</Link>
            <Link to='/vehicles'>Vehicles</Link>
            <Link to='/starships'>Starships</Link>
        </div>
    )
}

export default Navbar;