import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../index.css"

import {connect} from "react-redux"

export class Home extends Component {

    render() {
        // 记住这是this.props
        const {posts} = this.props;
        const postList=posts.length?(
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <img src="./Pictures/pokeball.png" alt=""/>
                        <div className="card-content">
                            <Link to={"/"+post.id}>
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
                <div className="container home">
                    <h4 className="center">Home</h4>
                    {postList}
                </div>
            </div>
        )
    }
}

const mapStoreStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

//connect 是一个function 它返回一个higher order component
export default connect(mapStoreStateToProps)(Home)
