import React, { Component } from 'react';
import PropTypes from 'prop-types';

// I know that I'm going to have an input field
// therefor this needs to be stateful

export default class IdeaForm extends Component {

  // 'constructor' is a es6 nicety. This is common in programming.
  // in Ruby, it is 'initialize'
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title || '',
      body: this.props.body || '',
    }
  }

  // componentWillMount() {
  //   if(this.props.title) {
  //     this.setState({ title: this.props.title, body: this.props.body })
  //   }
  // }

  inputChange(e, field){
    // more on controlled components: https://facebook.github.io/react/docs/forms.html
    this.setState({[field]: e.target.value})
  }


  submitIdea(){
    this.props.handleSubmit(this.state)
    // is actually the addIdea function from App
    // but named handleSubmit when passed as props
    // clear input fields
    this.setState({title: '', body: ''})
  }

  render() {
    console.log('WHY');
    return (
      <div>
        <label>Title</label>
        <input type='text' value={this.state.title} onChange={(e) => this.inputChange(e, 'title')}/>
        <br />
        <br />
        <label>Body</label>
        <textarea value={this.state.body} onChange={(e) => this.inputChange(e, 'body')}/>
        <br />
        <br />
        <button onClick={() => this.submitIdea()}>Submit</button>
      </div>
    )
  }
}

IdeaForm.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}
