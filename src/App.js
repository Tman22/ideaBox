import React, { Component } from 'react';
import './App.css';
import CreateIdea from './CreateIdea';
import { Ideas } from './Ideas';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea(idea) {
    this.state.ideas.push(Object.assign({}, idea, { id: Date.now() } ))
    this.setState(this.state)
  }

  deleteIdea(id) {
    const newIdeasArray = this.state.ideas.filter((idea) => {
      return idea.id !== id
    })

    this.setState({ ideas: newIdeasArray })
  }

  editIdea(idea) {
    const woot = this.state.ideas.map((i) => {
      if (i.id === idea.id) {
        return idea
      }
      return i
    })
    console.log(woot, this);
    this.setState({ ideas: woot })

  }

  render() {
    return (
      <div className="App">
        <h1>We should create an idea!</h1>
        <CreateIdea handleSubmit={ this.addIdea.bind(this) } />
        <br />
        <Ideas handleSubmit={ this.editIdea.bind(this) } handleDelete={ this.deleteIdea.bind(this) } ideas={ this.state.ideas }/>
      </div>
    );
  }
}

export default App;
