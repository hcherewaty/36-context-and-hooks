import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Counter from './counter';
import Incrementer from './incrementer';
import Decrementer from './decrementer';


class App extends React.Component {
  render() {
    return (
      <>
      <Counter />
      <Incrementer />
      <Decrementer />
      </>
    );
  }
}

export default App;
