import React from 'react';

//make a new context
export const MyContext = React.createContext();

//create a provider component
class CounterProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'This is the context you are looking for...',
            count: 0,
            increment: this.increment,
            decrement: this.decrement
          }
    }

    increment = (count) => {
        this.setState({count})
    }

    decrement = (count) => {
        this.setState({count})
    }
    
    render(){
      return (
        <MyContext.Provider value={this.state}>
          {this.props.children}
        </MyContext.Provider>
      )
    }
  }

  export default CounterProvider;