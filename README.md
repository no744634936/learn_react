
将子component 的state数据传到父component 的state里面去

component里面建立一个方法来给state添加元素。
component再将这个方法当作props传到子component。
子component就能将自己的state作为参数传递给这个方法。

看App.js 与 AddNinja.js 


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

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

ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

给state赋值时，一定要用 this.setState()方法

    let ninjas_list =[...this.state.ninjas,ninja];
    
    this.setState({
    
      ninjas:ninjas_list,
      
    });
    
  ----------------------------------------
  这种写法是不对的，this.ninjas.push(ninja) 
  
  是在直接修改state，没有用 this.setState() 方法就将state给修改了
  
  这样是不行的，不能直接修改state，必须像上面那样写。
    
    this.setState({
    
      ninjas:this.ninjas.push(ninja)
      
    });
----------------------------------------------------------------------
  直接修改state，react不会重新render。这个就不用多说了。
  另外一点是，setState的更新是异步的，而且，react会将要修改的状态放到一个更新队列，并考虑到render次数，会将多个值一起改变并一次render。
  其实react官方还是推荐immutable的state，
  也就是说，我们在改变state的时候，需要重新生成一个对象去代替原来的state，而不是直接改原来的。
