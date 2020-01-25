import React, { Component } from 'react';
import ShowTodo from "./components/ShowTodo";
import AddForm from "./components/AddForm";

class App extends Component {
  state={
    todos:[
      {id:1,content:"buy some milk"},
      {id:2,content:"play game"}
  
    ]
  }

  //App.js this is where the function to delete something because it 
  //has to interact with the state right here.
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    //todos:todos 两个相同时可以简写写成 todos
    this.setState({
      todos:todos,
    });
  }

  addTodo=(todo)=>{
    todo.id=Math.random();
    console.log(todo.id);
    
    let todos=[...this.state.todos,todo];
    this.setState({
      todos:todos,
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">ToDo list</h1>
        <ShowTodo deleteTodo={this.deleteTodo} todos={this.state.todos}></ShowTodo>
        <AddForm addTodo={this.addTodo}></AddForm>
      </div>
    );
  }
}

export default App;