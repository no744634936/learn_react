import React from 'react'

//funcitonal component 不用导入{ Component }  没有state，没有render方法,没有this
const Ninjas=(props)=>{
    const { ninjas,deleteNinja } = props;

    const ninjaList=ninjas.map((ninja,index)=>{
        return ninja.age>15?
            (
                <div className="ninja" key={index}>
                  <div>Name: { ninja.name }</div>
                  <div>Age: { ninja.age }</div>
                  <div>id: {ninja.id }</div>
                  {/* 因为deleteNinja方法带有id参数，有参数就得带括号，有括号就是立即被执行的 */}
                  {/* 而不是点击之后才执行，这个时候可以使用匿名函数 */}
                  {/* 所以这种方法不行 <button onClick={deleteNinja(ninja.id)}>Delete ninja</button> */}
                  <button onClick={()=>{deleteNinja(ninja.id)}}>Delete ninja</button>
                </div>
            ):null;
    });

    return(
      <div className="ninja-list">
        {ninjaList}
      </div>
    )
}

export default Ninjas