import React from 'react'


const ShowTodo=({todos})=>{
    const todoList= todos.length?(
        todos.map(todo=>{
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ):(
        <p className="center">You have no todo is left</p>
    );

    return (
        <div className="todos collection">
            {todoList}
        </div>
    );
}

export default ShowTodo

