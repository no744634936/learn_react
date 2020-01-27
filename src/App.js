import React, { Component } from 'react';
import Navbar from "./Component/Navbar"

//npm install react-router-dom 并导入，
import {BrowserRouter,Route,Switch} from "react-router-dom"
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
             
             {/* switch tag 只让URL从上到下找。如果一致就不再往下找了。所以也就不用把/:post_id写成/post//:post_id */}
            <Switch>
              <Route exact path="/" component={Home}></Route>  
              <Route path="/about" component={About}></Route>
              <Route path="/content" component={Content}></Route>
              <Route path="/:post_id" component={Post}></Route> 
            </Switch>
          </div>
      </BrowserRouter>

    );
  }
}

export default App;