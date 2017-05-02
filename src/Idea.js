import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IdeaForm from './IdeaForm';

export default class Idea extends Component {
  constructor() {
    super()
    this.state = {
      edit: false
    }
  }

  componentWillReceiveProps() {
    this.setState({ edit: false })
  }

  // handleClick(idea) {
  //   this.props.handleSubmit(Object.assign({}, idea, { id: this.props.id }  ))
  //   this.setState({ edit: false })
  // }

  render() {
    const { id, title, body, handleDelete, handleSubmit } = this.props

    if (this.state.edit) {
      return <IdeaForm title={title} body={body} handleSubmit={(idea) => handleSubmit(Object.assign({}, idea, {id: id }))} />
      // return <IdeaForm title={title} body={body} handleSubmit={(idea) => this.handleClick(idea)} />
    }

    return (
      <div>
        { title }
        <br />
        { body }
        <br />
        <button onClick={() => handleDelete(id) } >Delete</button>
        <button onClick={() => this.setState({ edit: true }) } >Edit</button>
      </div>
    )
  }
}

Idea.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  handleDelete: PropTypes.func,
  handleSubmit: PropTypes.func,
}
