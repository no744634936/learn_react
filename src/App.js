import React, { Component } from 'react';
import Navbar from "./Component/Navbar"

//npm install react-router-dom 并导入，
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Content from "./Component/Content"
import Post from "./Component/Post"


class App extends Component {


  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar></Navbar>
             {/* 由于网页无法分清/about 与 /:post_id 区别所以要将/:post_id 改为 /posts/:post_id */}
            
            <Route exact path="/" component={Home}></Route>  
            <Route path="/about" component={About}></Route>
            <Route path="/content" component={Content}></Route>
            <Route path="/posts/:post_id" component={Post}></Route> 

          </div>
      </BrowserRouter>

    );
  }
}

export default App;