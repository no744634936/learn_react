查看app.js

state 是一个对象

  state={
    ninjas:[
      {name:"zhang",age:24,id:1},
      {name:"wang",age:15,id:2},
      {name:"liu",age:25,id:26}
    ]
  }

我可以通过props 将state里的值传递给子component

然后子component用map 将值取出来后放进div里面，然后将div放进数组。

最后return 数组。
