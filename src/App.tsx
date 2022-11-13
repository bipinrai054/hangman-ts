import React, { useState } from 'react';
import word from './wordlist.json';

// components
import HangmanDrawing from './HangmanDrawing';
import HangmanKeyboard from './HangmanKeyboard';
import HangmanWord from './HangmanWord';

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return word[Math.floor(Math.random() * word.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose Win</div>
      <HangmanDrawing numberOfGusses={incorrectGuesses.length} />
      <HangmanWord gussedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <HangmanKeyboard />
      </div>
    </div>
  );
}
