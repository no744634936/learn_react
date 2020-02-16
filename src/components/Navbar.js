import React, { Component } from 'react'
import {ThemeContext} from "../contexts/ThemeContext"
export class Navbar extends Component {

    //记住是import themeContext；
    static contextType=ThemeContext;

    render() {
        console.log(this.context);
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        
        return (
            <nav className="nav-bar" style={{background: theme.ui,color:theme.syntax}}>
                <h1>context api</h1>
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
