import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div> hello world from es6</div>
    )
  }
}


console.log('hello0')


ReactDOM.render(<App/>, document.getElementById('index'))

