export function checkGuess(guess, answer) {
  const answerChars = answer.split('');
  let guessChars = guess.toUpperCase().split('');

  if (!guess) {
    guessChars = ['','','','',''];
  }




  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = 'correct';
    } else if (answerChars.includes(guessChar)) {
      status = 'misplaced';
    } else if(guessChar === '') {
      status = ''
    }else {
      status = 'incorrect';
    }
    return {
      key: Math.random(),
      letter: guessChar,
      status,
    };
  });
}
