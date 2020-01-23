import React from 'react'

//funcitonal component 不用导入{ Component }  没有state，没有render方法,没有this
const Ninjas=(props)=>{
    const { ninjas } = props;
    // const ninjaList=ninjas.map((ninja,index)=>{
    //     if(ninja.age>15){
    //         return (
    //             <div className="ninja" key={index}>
    //               <div>Name: { ninja.name }</div>
    //               <div>Age: { ninja.age }</div>
    //               <div>Belt: {ninja.belt }</div>
    //             </div>
    //         )  
    //     }
    // });
    const ninjaList=ninjas.map((ninja,index)=>{
        return ninja.age>15?
             (
                <div className="ninja" key={index}>
                  <div>Name: { ninja.name }</div>
                  <div>Age: { ninja.age }</div>
                  <div>Belt: {ninja.belt }</div>
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