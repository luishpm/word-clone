import React, {useState} from 'react';

function GuessInput({onAddGuess, disabled}) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(guess.length < 5) {
      return;
    }
    setGuess('')
    onAddGuess(guess)
  }

  return (
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>

        <input id="guess-input"
               type="text"
               minLength={5}
               maxLength={5}
               value={guess}
               disabled={disabled}
               onChange={e => setGuess(e.target.value.toUpperCase())}/>
      </form>
  );
}

export default GuessInput;
