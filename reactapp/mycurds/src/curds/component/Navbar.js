import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <a className="navbar-brand" href="/">User Information App</a>
                    
                    <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact to="/">Home </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">about</NavLink>
                            </li>

                           
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
