import React from 'react'
import {  NavLink } from 'react-router-dom'
import { FaEye} from 'react-icons/fa'
export default function Navbar() {

  
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <h6 style={{marginLeft:"0px"}}  className="navbar-brand" href="/"><FaEye></FaEye>   Fashion Factory</h6>
                    
                    <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact to="/">Home </NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/About">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/Products">Products</NavLink>
                            </li>
                            
                           
                           
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{color:"red" ,marginLeft:"320px"}} exact to="/SignUpForm">Signup</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link"  style={{color:"red"}}  to="/LoginForm">login</NavLink>
                            </li>
                           
                           
                           
                          
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
