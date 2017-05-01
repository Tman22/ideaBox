import React, { Component } from 'react';
import CreateIdea from './CreateIdea';

export const Ideas = ({ ideas, handleDelete, handleSubmit }) => {
  const ideasArray = ideas.map((idea) => <Idea key={ idea.id } { ...idea } handleDelete={ handleDelete } handleSubmit={ handleSubmit } />)

  return (
    <div>
      {ideasArray}
    </div>
  )
}

class Idea extends Component {
  constructor() {
    super()
    this.state = {
      edit: false
    }
  }

  handleShit(idea) {
    this.props.handleSubmit(Object.assign({}, idea, { id: this.props.id }  ))
    this.setState({ edit: false })
  }

  render() {
    console.log('iweiwi');
    const { id, title, body, handleDelete } = this.props

    if (this.state.edit) {
      return <CreateIdea title={title} body={body} handleSubmit={(idea) => this.handleShit(idea) } />
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
