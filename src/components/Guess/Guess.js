import React from 'react';
import {checkGuess} from "../../game-helpers";

function Guess({guess, answer}) {
  let guessArray = checkGuess(guess, answer)

  return (
      <p className="guess">
        {guessArray.map(letter => (
            <span key={letter.key} className={`cell ${letter.status}`}>{letter.letter}</span>
        ))}
      </p>
  );
}

export default Guess;
