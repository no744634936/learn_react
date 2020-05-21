//将数组传给子component


src/app.js 

将数组传递给

src/components/Ninjas.js 

文件

------------------------------------------------------

container component （也叫 class component）有state 数据是一个class   (例如: src/app.js )

Ui component （也叫functional component ） 没有state 数据 是一个function    (例如: src/components/Ninjas.js )


-------------------------------------------------------

将 src/components/Ninjas.js  这个functional component 写成 class component的话要这样写
---------------------------------------------------------------------------


import React, { Component } from 'react'

class Ninjas extends Component{

  render(){
  
    const { ninjas } = this.props;
    
    const ninjaList = ninjas.map(ninja => {
    
      return (
      
        <div className="ninja" key={ninja.id}>
        
          <div>Name: { ninja.name }</div>
          
          <div>Age: { ninja.age }</div>
          
          <div>Belt: { ninja.belt }</div>
          
        </div>
        
      )
      
    });
    
    return (
    
      <div className="ninja-list">
      
        { ninjaList }
        
      </div>
      
    )
    
  }
  
}
export default Ninjas
