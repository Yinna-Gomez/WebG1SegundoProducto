import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to={"/"} className='item'>Home</Link>
                <Link to={"/filter/Male"} className='item'>Masculinos</Link>
                <Link to={"/filter/Female"} className='item'>Femeninos</Link>
                <Link to={"/acercade"} className='item'>Acerca de</Link>

            </ul>
        </nav>
    )
}

export default NavBar