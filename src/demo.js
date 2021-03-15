import React from 'react'
import ReactDOM from 'react-dom'

// const div = (
//   React.createElement('div', null,
//     React.createElement('p', null,
//       React.createElement('span',null, 'hi')))
// )
const Header = (
  <header>
    header
  </header>
)
const Header2 = function(props){
  return(
    <header>
      header {props.name}
    </header>
  )  
}
const Button = (
  <button>
    button
  </button>
)
const div = (
  <div>
    {Header}
    {Header2({name:'frank'})}
    <Header2 name='jack'/>
    {/* React 看到你这样写就转化成上面的那种写法 */}
    <p>
      <span>hi</span>
    </p>
    {Button}
  </div>
)
console.log(div) // 虚拟的 element（对象）
ReactDOM.render(div, document.getElementById('root'))

// const div = (
//   <div>
//     <p>
//       <span>hi</span>
//     </p>  
//   <div>
// )

// document.body.appendChild(div)

// function t(tagName, children){
//   const element = document.createElement(tagName)
//   if(children){
//     if(typeof children === 'string'){
//       const childElement = document.createTextNode(children)
//       element.appendChild(childElement)
//     }else {
//       element.appendChild(children)
//     }
//   }
//   return element
// }