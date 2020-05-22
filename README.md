子component 删除父component里的数据。

就是将父component 里面的delete 方法传给子component

查看这两个文件就知道了
src/app.js 文件里的 deleteNinja=(id) 方法
src/components/Ninjas.js

----------------------------------------------------

删除通过filter 和id 来删除

let ninjas = this.state.ninjas.filter(ninja=>{

    return ninja.id !==id

})

使用的方法如果带有参数就一定要用匿名函数

onClick={()=>{deleteNinja(ninja.id)}}