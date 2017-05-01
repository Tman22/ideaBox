import React from 'react';

export const Ideas = ({ ideas }) => {

  const ideasArray = ideas.map((idea) => <Idea key={ idea.id } { ...idea } />)
  console.log(ideasArray)
  
  return (
    <div>
      {ideasArray}
    </div>
  )
}

const Idea = ({ title, body, id }) => {

  return (
    <div>
      { title }
      <br />
      { body }
      <br />
    </div>
  )
}
