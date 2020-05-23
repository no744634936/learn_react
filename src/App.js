import React, { Component } from 'react';
import Navbar from "./Component/Navbar"

//npm install react-router-dom 并导入，
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Content from "./Component/Content"


class App extends Component {


  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar></Navbar>
            {/* exact path="/" 这样使用 http://localhost:3001/about 路由时候 只导入about component，而不要导入Home component*/}
            <Route exact path="/" component={Home}></Route>  
            <Route path="/about" component={About}></Route>
            <Route path="/content" component={Content}></Route>
         
          </div>
      </BrowserRouter>

    );
  }
}

export default App;
