import React from 'react'
import {Link,NavLink,withRouter} from "react-router-dom"

const Navbar=()=>{

    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">poke times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/content">Content</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar)
