import React, { Component } from 'react';

class Input extends Component {
  state = {
    name: '',
    password: '',
    country: '',
    bio: '',
    birthDate: '',
    summitted: false,
    error: false,
    gender: '',
    agree: false,
    skills: [],
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkBoxHandler = (e) => {
    this.setState({ agree: e.target.checked });
  };

  submitHandler = (e) => {
    if (this.state.name !== '' && this.state.password !== '') {
      this.setState({ summitted: true });
    } else this.setState({ error: true });
  };

  handleSkillsChange = (e) => {
    if (e.target.checked) {
      this.setState({ skills: [...this.state.skills, e.target.value] });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== e.target.value
      );
      this.setState({ skills: skills });
    }
  };

  render() {
    return (
      <div className='row mt-4'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <input
            onChange={this.changeHandler}
            type='text'
            placeholder='Enter Name'
            name='name'
            className='form-control'
            value={this.state.name}
          />
          <input
            onChange={this.changeHandler}
            type='password'
            name='password'
            placeholder='Enter Password'
            className='form-control mt-2'
            value={this.state.password}
          />
          <select
            name='country'
            className='custom-select custom-select-sm mt-2'
            onChange={this.changeHandler}
            value={this.state.country}
          >
            <option>Select Your Country</option>
            <option value='bd'>Bangladesh</option>
            <option value='ind'>India</option>
            <option value='ch'>China</option>
            <option value='itl'>Italy</option>
            <option value='ger'>Germany</option>
          </select>
          <textarea
            onChange={this.changeHandler}
            name='bio'
            className='form-control mt-2'
            placeholder='Write SomeThing About You !'
            rows='2'
            value={this.state.bio}
          ></textarea>
          <input
            type='date'
            name='birthDate'
            className='form-control mt-2'
            onChange={this.changeHandler}
            value={this.state.birthDate}
          />
          <div className='mt-2'>
            <input
              type='radio'
              name='gender'
              value='male'
              onChange={this.changeHandler}
            />
            Male
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={this.changeHandler}
            />
            Female
            <input
              type='radio'
              name='gender'
              value='other'
              onChange={this.changeHandler}
            />
            Other
          </div>
          <div className='custom-control custom-checkbox mt-2'>
            <input
              type='checkbox'
              name='agree'
              checked={this.state.agree}
              onChange={this.checkBoxHandler}
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Check this custom checkbox
            </label>
          </div>
          <div className='mt-2 p-3' style={{ border: '1px solid green' }}>
            <div className='custom-control custom-checkbox mt-2'>
              <input
                type='checkbox'
                name='skills'
                value='java'
                checked={this.state.skills.includes('java')}
                onChange={this.handleSkillsChange}
                className='custom-control-input'
                id='customCheck2'
              />
              <label className='custom-control-label' htmlFor='customCheck2'>
                Java
              </label>
            </div>
            <div className='custom-control custom-checkbox mt-2'>
              <input
                type='checkbox'
                name='skills'
                value='javascript'
                checked={this.state.skills.includes('javascript')}
                onChange={this.handleSkillsChange}
                className='custom-control-input'
                id='customCheck3'
              />
              <label className='custom-control-label' htmlFor='customCheck3'>
                JavaScript
              </label>
            </div>
            <div className='custom-control custom-checkbox mt-2'>
              <input
                type='checkbox'
                name='skills'
                value='python'
                checked={this.state.skills.includes('python')}
                onChange={this.handleSkillsChange}
                className='custom-control-input'
                id='customCheck4'
              />
              <label className='custom-control-label' htmlFor='customCheck4'>
                Python
              </label>
            </div>
          </div>
          <button
            onClick={this.submitHandler}
            type='submit'
            className='btn btn-primary mt-2'
          >
            Fuck Off
          </button>
        </div>
        <div className='col-sm-4'></div>
        {this.state.summitted && (
          <div className='container'>
            <div className='row mt-3'>
              <div className='col-sm-4'></div>
              <div className='col-sm-4'>
                <p> name : {this.state.name}</p>
                <p> Password : {this.state.password}</p>
                <p> Bio : {this.state.bio}</p>
                <p> Country : {this.state.country}</p>
                <p> BirthDate : {this.state.birthDate}</p>
                <p> Gender : {this.state.gender}</p>
                <p>
                  {' '}
                  checked :{' '}
                  {this.state.agree && (
                    <span className='text-success'>Checked</span>
                  )}
                </p>
                {this.state.skills.map((skill) => (
                  <h1>{skill}</h1>
                ))}
              </div>
              <div className='col-sm-4'></div>
            </div>
          </div>
        )}
        {this.state.error && (
          <div className='mt-3'>
            <p className='text-danger'>Fill the Form Correctly !</p>
          </div>
        )}
      </div>
    );
  }
}

export default Input;
