import React from 'react'

//funcitonal component (也叫ui component)不用导入{ Component }  没有state，没有render方法,没有this
//就只是一个方法。
const Ninjas=(props)=>{
    // console.log(this.props);
    const { ninjas } = props;
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
