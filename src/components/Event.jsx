import React, { Component } from 'react';

class Event extends Component {
  state = {
    name: '',
    onFocusDecession: false,
    programmingLanguage: []
  };

  arr = [];

  buttonHandeler = e => {
    console.log(e.target.value);
  };

  changeHandler = e => {
    this.setState({ name: e.target.value });
  };

  handelFocus = () => {
    this.setState({ onFocusDecession: true });
  };

  handleBlur = () => {
    this.setState({ onFocusDecession: false });
  };

  doubleClickHandler = () => {
    console.log('i am double clicked');
  };

  mouseEnterHandler = e => {
    console.log(e);
  };

  selectHandler = e => {
    this.arr.push(e.target.value);
    console.log(this.arr);
    this.setState({
      programmingLanguage: this.arr
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.buttonHandeler}
          onMouseEnter={this.mouseEnterHandler}
          onDoubleClick={this.doubleClickHandler}
          className='btn btn-info'
        >
          Fuck me
        </button>
        <input
          className='form-control my-2'
          type='text'
          onChange={this.changeHandler}
          onFocus={this.handelFocus}
          onBlur={this.handleBlur}
          value={this.state.name}
        />
        {this.state.name && this.state.onFocusDecession && (
          <h1>my name is {this.state.name}</h1>
        )}
        {this.state.name && !this.state.onFocusDecession && (
          <h3>my world is {this.state.name}</h3>
        )}

        <label htmlFor='cars'>Choose a car:</label>

        <select id='cars' onChange={this.selectHandler}>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select>
        {this.state.programmingLanguage.length > 0 &&
          this.state.programmingLanguage.map(pl => <p key='1'>{pl}</p>)}
      </div>
    );
  }
}

export default Event;
