import React, { Component } from 'react'
import { connect } from "react-redux";
import {increment} from '../redux/index'
import {decrement} from '../redux/index'
import {incrementAmount} from '../redux/index'
import {iniciar} from '../redux/index'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <button onClick={() => this.props.incrementAmount(10)}>Increment 10</button>
        <button onClick={() => this.props.iniciar()}>Iniciar</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementAmount,
  iniciar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

