import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/Event';
import Input from './components/Input';

export class App extends Component {
  state = {
    counter: 0
  };

  interValId = null;

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  startTimer = () => {
    if (this.state.counter > 0 && !this.interValId) {
      this.interValId = setInterval(() => {
        this.setState({ counter: this.state.counter - 1 }, () => {
          if (this.state.counter === 0) {
            alert('Timer Stopped');
            clearInterval(this.interValId);
            this.interValId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.interValId) {
      clearInterval(this.interValId);
      this.interValId = null;
    }
  };

  resetTimer = () => {
    this.setState({ counter: 0 });
    clearInterval(this.interValId);
    this.interValId = null;
  };

  render() {
    return (
      <div className='container'>
        <h1 className='text-center text-success'>Simple Timer</h1>
        <hr />
        <Event />
        <div className='row mt-5'>
          <div className='col-sm-5'></div>
          <div className='col-sm-4'>
            <button className='btn btn-danger' onClick={this.decrement}>
              Decreement
            </button>
            <span className='font-weight-bold text-success mx-3'>
              {this.state.counter}
            </span>
            <button className='btn btn-primary' onClick={this.increment}>
              Increment
            </button>
          </div>
          <div className='col-sm-3'></div>
        </div>
        <div className='row mt-4'>
          <div className='col-sm-3'></div>
          <div className='col-sm-2 text-right'>
            <button onClick={this.startTimer} className='btn btn-secondary'>
              Start
            </button>
          </div>
          <div className='col-sm-2 text-center'>
            <button onClick={this.stopTimer} className='btn btn-warning'>
              Stop
            </button>
          </div>
          <div className='col-sm-2 text-left'>
            <button onClick={this.resetTimer} className='btn btn-success'>
              Reset
            </button>
          </div>
        </div>
        <div className='col-sm-3'></div>
        <Input />
      </div>
    );
  }
}

export default App;
