this.setState() 这个方法每被使用一次，render方法就会触发一次更新一次dom

------------------------------------------------------------------------

src/app.js 里的class component 里面既有普通的函数，也有箭头函数，
这是是为什么呢？

一般来说，在class里面普通函数里如果用了this，会出现错误。
在箭头函数里使用this才不会出错。
但是为什么 render 方法跟 componentDidMount 方法可以用this呢？
因为这两个方法是App 从 Component里面继承的（App extends Component）
所以可以使用this。我也可以将render 方法跟 componentDidMount 方法 写成箭头函数
构造器 constructor 不能写成箭头函数，只能写成普通函数

我自己建立的函数的话，就一定要写箭头函数。例如  onSearchChange 就是箭头函数




-----------------------------------------------------------------------
顺着 App.js 文件看就可以了.一共有四个component

App.js component

search-box component 

card-list component 

cart component 