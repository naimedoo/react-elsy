import React from 'react';
import Counter from './Components/Counter';


class App extends React.Component {
  constructor()  {
    super() ;
    this.state = {
      count : 0
    }
  }
  
decrementCount = () => {
  console.log("test")
  const updateCount = this.state.count - 1;
  this.setState({
    count : updateCount
  })
}

incrementCount = () => {
  const increment = this.state.count + 1;
  this.setState({
    count : increment
  })
}
  render() {
       return ( 
        <div>
        <h1>Counter</h1> 
        <Counter count={this.state.count} addFunction= {this.incrementCount} removeFunction={this.decrementCount} />
       </div>
      )
  }
}

export default App;

