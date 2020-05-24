import React from 'react'
//higher order component is a functional component 
//higher order component 就是将一个component当做参数传给，higher order component ，
//然后被当作参数传递的component就获得了某种超能力。
//WrappedComponent 的首字母一定要大写
const Rainbow = (WrappedComponent) => {
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';
    //这里的这个props 就是父component 传给 wrappedComponent 的props
    return(props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Rainbow
