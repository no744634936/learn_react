import React, { Component } from 'react';
import Ninjas from './components/Ninjas'

class App extends Component {
  //将数组传给子component
  state={
    ninjas:[
      {name:"zhang",age:24,id:1},
      {name:"wang",age:15,id:2},
      {name:"liu",age:25,id:26}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;