import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Nav extends Component {
    
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to='/'>Logo</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/product'>Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>Contact</Link>
                    </li>
                  
                    </ul>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default Nav;