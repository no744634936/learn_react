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
            {/* exact path="/" 这样是将 Home component 作为 http://localhost:3001/ 的默认页 */}
            <Route exact path="/" component={Home}></Route>  
            <Route path="/about" component={About}></Route>
            <Route path="/content" component={Content}></Route>
         
          </div>
      </BrowserRouter>

    );
  }
}

export default App;