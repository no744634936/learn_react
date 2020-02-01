import React, { Component } from 'react'
import {connect} from "react-redux"

export class Post extends Component {
    render() {
        console.log(this.props);
        
        const post=this.props.post?(
            <div>
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ):(
            <div className="center">no data</div>
        )
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

//ownProps 是这个component本身自带的props
const mapStoreStateToProps=(state,ownProps)=>{

    
    //注意match.params.post_id 取出的id 是字符型。而state.posts里面的是数字。
    let id=parseInt(ownProps.match.params.post_id);

    let post= state.posts.find(post=>post.id===id)
    return ({
        post: post,
    })
}

//这样 Post component就能用this.props.post 接触到 mapStoreStateToProps 方法return的内容了
export default connect(mapStoreStateToProps)(Post)
