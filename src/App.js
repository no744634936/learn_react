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

  //id 就是每个 object元素的id
  deleteNinja=(id)=>{
    //记住一定不能直接修改state,一定使用非破坏性方法(non destructive method)
    //这种写法就等于把ninja.id相同的都删除了。 参数id等于object元素id的值
    //ninja.id !==id 时就将，object元素返回到 ninjas 数组里
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id !==id
    })
    this.setState({
      ninjas:ninjas,
    });
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
