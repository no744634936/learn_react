import React, { Component } from 'react';
import ShowTodo from "./components/ShowTodo";
state={
  todos:[
    {id:1,content:"buy some milk"},
    {id:2,content:"play game"}

  ]
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">ToDo list</h1>
        <ShowTodo todos={this.state.todos}></ShowTodo>
      </div>
    );
  }
}

export default App;