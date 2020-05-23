    componentDidMoun
    
    componentDidUpdate
  
    render
  
  这三个方法是最常用的.
  
  查看app.js 这一个文件就可以了
  
  componentDidMount=()=>{
  
    //一般在这个方法里面从数据库取出数据
    
    console.log("component Mounted");
    
    
  }
  
  componentDidUpdate=(preProps,preState)=>{
  
    //this fires when we get a change of states or props.
    
    //we can compare with the previrous state or previrous props with current state or props 
    
    //and then do something dependant on that
    
    //增删改这个component里的数据都会触发这个方法。
    
    console.log("component updated");
    
    //更新前的props 与 state
    
    console.log(preProps);
    
    console.log(preState)
    
  }
