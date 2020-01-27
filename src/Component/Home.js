import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"


//由于需要获取数据，所以要用class component 并且用
export class Home extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                console.log(response);
                this.setState({
                    posts:response.data.slice(0,10)
                })
            })
    }
    render() {
                
        const {posts} = this.state;
        // console.log(posts);

        const postList=posts.length?(
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={"/posts/"+post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No post yet</div>
        )
        return (
            <div>
                <div className="container">
                    <h4 className="center">Home</h4>
                    {/* <p>{postList}</p>   不能这样写，这样就是用p标签包裹住了div*/}
                    {postList}
                </div>
            </div>
        )
    }
}

export default Home
