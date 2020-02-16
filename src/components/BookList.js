import React, { Component } from 'react'
import {ThemeContext} from "../contexts/ThemeContext"
export class BookList extends Component {
    static contextType = ThemeContext;

    render() {
        const {isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;    
        return (
            <div className="book-list" style={{background: theme.bg,color:theme.syntax}}>
                <ul>
                    <li style={{background:theme.ui}}>the king</li>
                    <li style={{background:theme.ui}}>good luck</li>
                    <li style={{background:theme.ui}}>gone with wind</li>
                    <li style={{background:theme.ui}}>your name</li>
                </ul>
            </div>
        )
    }
}

export default BookList
