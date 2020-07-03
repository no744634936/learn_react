

页面跳转功能

查看App.js 文件

1，没有被Router 包裹的component 比如，<Navbar name={this.state.name}></Navbar>

   就可以接收 this.state.name

   但是 但是props 里面没有history， location， match 属性

   为了让props 也拥有history， location， match 这样的Router属性

   可以在 Navbar.js 这个component中 使用 withRouter() 

   像这样使用: export default  withRouter(Navbar)

   Navbar.js  就变成了 higher order component 就可以获得超能力了

   Navbar.js 这个component 就即可以使用 props.history.push() 方法来跳转页面

    setTimeout(()=>{
        props.history.push("/content")
    },2000);

   也可以使用 props.name 来取出。name的值了


2 ，所有被Router 包裹的component都不可以接收 this.state.name

    <Route exact path="/" component={Home}></Route>  

    <Route path="/about" component={About}></Route>

    <Route path="/content" component={Content}></Route>

    但是仍然可以接收一个 props 参数，

    这个props 包含Router 的 history， location， match 属性

    查看 About.js component 就知道了

    About.js component 里面可以使用 props.history.push() 方法来跳转页面

    setTimeout(()=>{
        props.history.push("/content")
    },2000);

3,其实 App.js 里面一般不会给，Router包裹着的component传 state的数据。

 所以<Navbar name={this.state.name}></Navbar>

 种写法在App.js 文件中没有用




