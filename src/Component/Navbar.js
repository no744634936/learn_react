import React from 'react'
import {Link,NavLink,withRouter} from "react-router-dom"

//使用 higher order component 就可以获得超能力了，记得要修改export default
const Navbar=(props)=>{
    console.log(props);
    console.log(props.name);
    
    setTimeout(()=>{
        props.history.push("/about")
    },10000);
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

                    <button onClick={()=>props.history.push("/about")}>redirect</button>
                {/* 我不用 Link 或者 NavLink 用onClick={()=>props.history.push("/about")也可以实现页面跳转，更灵活 */}
                </ul>
            </div>
        </nav>
    );
}

export default  withRouter(Navbar)
