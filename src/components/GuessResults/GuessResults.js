import React from 'react';
import Guess from "../Guess";

function GuessResults({guesses}) {

  return (
      <div className="guess-results">
        {guesses.map(guess => (
            <Guess key={guess.key} guess={guess.label} />
        ))}
      </div>);
}

export default GuessResults;
