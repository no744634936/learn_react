

重点看app.js 文件怎么使用路由

Navbar.js 文件使用link tag来让网页不reload


1, 将materialze的链接放入 public/index.html里面。这样就不多过多在乎css

"<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">"



2,npm install react-router-dom


3,App.js 里面导入 import {BrowserRouter,Route} from "react-router-dom"
