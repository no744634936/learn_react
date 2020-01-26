import React from 'react'

const About=(props)=>{
    // console.log(props);

    //两秒钟后跳转到content
    setTimeout(()=>{
        props.history.push("/content")
    },2000);
    
    return(
        <div className="container">
            <h4 className="center">
                <p>
                    this is About page
                </p>
            </h4>
        </div>
    );
}

export default About
