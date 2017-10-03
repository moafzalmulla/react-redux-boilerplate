import React, {Component} from 'react';

// Component Class (Use when using state, lifecycle methods, etc)
class App extends Component{
  render(){
    return (
      <div>
        <h1>My App</h1>
      </div>
    )
  }
}

// ES6 Function - Just props and render
// const App = () => (
//   <div>
//    <h1>My App</h1>
//   </div>
// )

// ES5 Function
// const App = function(){
//   return(
//     <div>
//     <h1>My App</h1>
//     </div>
//   )
// }

export default App