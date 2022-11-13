import { useState, useEffect, useCallback } from 'react';
import word from './wordlist.json';

// components
import HangmanDrawing from './HangmanDrawing';
import HangmanKeyboard from './HangmanKeyboard';
import HangmanWord from './HangmanWord';

const getWord = () => {
  return word[Math.floor(Math.random() * word.length)];
};

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key) || isLoser || isWinner) return;
      setGuessedLetters((prev) => [...prev, key]);
    },
    [guessedLetters, isLoser, isWinner],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

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
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {isLoser ? 'You lost' : isWinner ? 'You won' : 'Guess the word'}
      </div>
      <HangmanDrawing numberOfGusses={incorrectGuesses.length} />
      <HangmanWord
        reveal={isLoser}
        gussedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: 'stretch' }}>
        <HangmanKeyboard
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          inActiveLetter={incorrectGuesses}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}
