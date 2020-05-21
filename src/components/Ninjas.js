import React from 'react'

//ui component(也叫 funcitonal component )不用 import{ Component }  没有state，没有render方法,没有this
//就只是一个方法。all
const Ninjas=(props)=>{
    // console.log(this.props); functional component里面不能用 this.props  。class component里面才能用 this.props
    
    const { ninjas } = props;import
    const ninjaList=ninjas.map((ninja,index)=>{component
      return (
        <div className="ninja" key={index}>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: {ninja.belt }</div>
        </div>
      )
    });

    return(
      <div className="ninja-list">
        {ninjaList}
      </div>
    )
}

export default Ninjas
