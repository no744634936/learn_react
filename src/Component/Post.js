import React, { Component } from 'react'
import {connect} from "react-redux"

export class Post extends Component {

    //class component 里面的函数不能用const 
    handleClick=()=>{
        //点击之后就会触发这个(id)=>{dispatch({type:"DELETE_POST",id:id})}
        //这个就相当于 store.dispatch({......})
        this.props.deletePost(this.props.post.id)
        //删除之后跳到 home page
        this.props.history.push("/")
    }

    render() {
        console.log(this.props);
        
        const post=this.props.post?(
            <div>
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        delete post
                    </button>
                </div>
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

const mapStoreStateToProps=(state,ownProps)=>{
    let id=parseInt(ownProps.match.params.post_id);
    let post= state.posts.find(post=>post.id===id)
    return ({
        post: post,
    })
}


// 当我呼叫deletePost的时候就会触发。函数(id)=>{dispatch({type:"DELETE_POST",id:id})}
//deletePost 可以赋值给props
const mapDispatchToProps=(dispatch)=>{
    return{
        deletePost:(id)=>{dispatch({type:"DELETE_POST",id:id})}
    }
}

//这样 Post component就能用this.props.post 接触到 mapStoreStateToProps 方法return的内容了
//这样就可以在 Post.j页面通过render方法里的console.log(this.props);看到Props里面包含了deletePost属性
export default connect(mapStoreStateToProps,mapDispatchToProps)(Post)
