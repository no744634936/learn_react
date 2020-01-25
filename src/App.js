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

  //id 就是每个 哈希元素的key
  deleteNinja=(id)=>{
    //记住一定不能直接修改state,一定使用非破坏性方法(non destructive method)
    //这种写法就等于把ninja.id相同的都删除了。 id等于哈希元素的key的值
    
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id !==id
    })
    this.setState({
      ninjas:ninjas,
    });
  }

  
  componentDidMount=()=>{
    //一般在这个方法里面从数据库取出数据
    console.log("component Mounted");
    
  }
  componentDidUpdate=(preProps,preState)=>{
    //this fires when we get a change of states or props.
    //we can compare with the previrous state or previrous props with current state or props 
    //and then do something dependant on that
    console.log("component updated");
    
    
    
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );
  }
}

export default App;