import React, { Component } from 'react';
import Ninjas from './components/Ninjas'
import AddNinja from './components/AddNinja'

class App extends Component {
  //将数组传给子component
  state={
    ninjas:[
      {name:"zhang",age:24,id:1},
      {name:"wang",age:15,id:2},
      {name:"liu",age:25,id:26}
    ]
  }
  addNinja=(ninja)=>{
    //每个哈希数组都有一个唯一的id，这里做一个简单的id
    ninja.id=Math.random();
    //... 是把state里面的ninjas展开。
    let ninjas_list =[...this.state.ninjas,ninja];
    this.setState({
      ninjas:ninjas_list,
    });

  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );
  }
}

export default App;