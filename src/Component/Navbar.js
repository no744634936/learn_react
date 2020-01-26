import React from 'react'
import {Link,NavLink} from "react-router-dom"

const Navbar=()=>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">poke times</a>
                <ul className="right">
                {/* <a href="/">Home</a>这样写，点击的时候就会reload网页，也就是向服务器请求 */}
                {/* 为了不用每次都向服务器请求，就要用Link */}
                {/* Link 跟NavLink是一样的功能，只是NavLink会在About , Content的网页html里面添加，class="active" */}
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/content">Content</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar
