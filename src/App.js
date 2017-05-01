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

  render() {
    return (
      <div className="App">
        <h1>We should create an idea!</h1>
        <CreateIdea handleSubmit={this.addIdea.bind(this)} />
        <br />
        <Ideas ideas={this.state.ideas}/>
      </div>
    );
  }
}

export default App;
