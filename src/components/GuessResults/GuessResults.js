import React from 'react';
import Guess from "../Guess";

function GuessResults({guesses, answer}) {

  return (
      <div className="guess-results">
        {guesses.map(guess => (
            <Guess key={guess.key} guess={guess.label} answer={answer} />
        ))}
      </div>);
}

export default GuessResults;
