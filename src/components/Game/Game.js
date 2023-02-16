import React, {useState} from 'react';

import {range, sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import ResultBanner from "../ResultBanner";


// To make debugging easier, we'll log the solution in the console.


const getEmptyArray = (start = 0) => {
  return range(start,NUM_OF_GUESSES_ALLOWED).map(() => ({
    key: Math.random(),
    label: ''
  }))
}

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS))
  const [guesses, setGuesses] = useState(getEmptyArray())
  const [hasWon, setHasWon] = useState(false)
  const [count, setCount] = useState(0)

  console.info({answer})
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
    setHasWon(guess === answer)
  }

  const reset = () => {
    const newAnswer = sample(WORDS)
    console.info({newAnswer});
    setAnswer(newAnswer)
    setGuesses(getEmptyArray())
    setHasWon(false)
    setCount(0)
  }
  return (<>
    <GuessResults guesses={guesses} answer={answer}/>
    <button onClick={reset}>Reset</button>
    <GuessInput onAddGuess={addGuess} disabled={count >= NUM_OF_GUESSES_ALLOWED || hasWon } />
    <ResultBanner attempts={count} hasWon={hasWon} rightAnswer={answer} />
  </>);
}

export default Game;
