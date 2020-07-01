//I need to store locally what users types in each inputfield.

import React, { Component } from 'react'

class AddNinja extends Component {
    state={
        name:null,
        age:null,
        id:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>

                    <label htmlFor="age">age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>

                    <label htmlFor="id">id:</label>
                    <input type="text" id="id" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja
