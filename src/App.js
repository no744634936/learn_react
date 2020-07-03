import React, { Component } from 'react';
import Navbar from "./Component/Navbar"

//npm install react-router-dom 并导入，
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Content from "./Component/Content"


class App extends Component {
    constructor(){
        super();
        this.state={
            name:"zhang"
        }
    }

  render() {
    return (
      <BrowserRouter>
          <div className="App">
              
            <Navbar name={this.state.name}></Navbar>

            <Route exact path="/" component={Home}></Route>  
            <Route path="/about" component={About}></Route>
            <Route path="/content" component={Content}></Route>
         
          </div>
      </BrowserRouter>

    );
  }
}

export default App;