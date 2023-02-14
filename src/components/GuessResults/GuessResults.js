import React from 'react';

function GuessResults({guesses}) {

  return (
      <div className="guess-results">
        {guesses.map(guess => (
            <p key={guess.key} className="guess">{guess.label}</p>
        ))}
      </div>);
}

export default GuessResults;
