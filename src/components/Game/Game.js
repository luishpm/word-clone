import React, {useState} from 'react';

import {range, sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

const getEmptyArray = (start = 0) => {
  return range(start,NUM_OF_GUESSES_ALLOWED).map(() => ({
    key: Math.random(),
    label: ''
  }))
}

function Game() {
  const [guesses, setGuesses] = useState(getEmptyArray())

  const [count, setCount] = useState(0)
  const addGuess = (guess) => {
    setGuesses([
      ...guesses.slice(0, count),
      {
        key: Math.random(),
        label: guess
      },
      ...getEmptyArray(count + 1)
    ])
    setCount(count + 1)
  }
  return (<>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput onAddGuess={addGuess} disabled={count >= NUM_OF_GUESSES_ALLOWED}/>
  </>);
}

export default Game;
