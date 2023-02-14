import React from 'react';

function Guess({guess}) {
  let guessArray = (guess ? guess.split('') : ['','','','','']).map(letter => (
      {
        id: Math.random(),
        letter: letter
      }
  ))

  return (
      <p className="guess">
        {guessArray.map(letter => (
            <span key={letter.id} className="cell">{letter.letter}</span>
        ))}
      </p>
  );
}

export default Guess;
