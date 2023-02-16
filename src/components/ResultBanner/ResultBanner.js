import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function ResultBanner({hasWon, attempts, rightAnswer}) {
  if (hasWon) {
    return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {attempts} guesses</strong>.
          </p>
        </div>
    )
  } else if (attempts >= NUM_OF_GUESSES_ALLOWED) {
    return (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{rightAnswer}</strong>.</p>
        </div>
    )
  } else {
    return <></>
  }
}

export default ResultBanner;
