import React from 'react';
import PropTypes from 'prop-types';
import Idea from './Idea';

export const Ideas = ({ ideas, handleDelete, handleSubmit }) => {
  const ideasArray = ideas.map((idea) => <Idea key={ idea.id } { ...idea } handleDelete={ handleDelete } handleSubmit={ handleSubmit } />)

  return (
    <div>
      {ideasArray}
    </div>
  )
}

Ideas.propTypes = {
  ideas: PropTypes.array,
  handleDelete: PropTypes.func,
  handleSubmit: PropTypes.func,
}
