import React, { Component } from 'react'

export class AddForm extends Component {
    state={
        content:"",
    }
    handleChange=(e)=>{
        this.setState({
            content: e.target.value,
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        //添加之后让输入框为空,input 里面value={this.state.content} 必须要写
        this.setState({
            content:"",
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new to do</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddForm
