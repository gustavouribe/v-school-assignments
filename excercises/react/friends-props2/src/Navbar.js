import React from 'react'

const Navbar = () => {
    const pages = ['Home', 'About', 'Contact']

    const displayPages = pages.map((page, i) =>{
        return <li key={page+i}></li>
    })
    return (
        <nav>
            <ul>
                {displayPages}
            </ul>
        </nav>
    )
}

export default Navbar;