
将子component 的state数据传到父component 的state里面去

component里面建立一个方法来给state添加元素。
component再将这个方法当作props传到子component。
子component就能将自己的state作为参数传递给这个方法。

看App.js 与 AddNinja.js 
