import { useState, useEffect, useCallback } from 'react';
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

  // const addGussedLetter = useCallback((key:string)) => {
  // }

  const addGussedLetter = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key)) return;
      setGuessedLetters((prev) => [...prev, key]);
    },
    [guessedLetters],
  );

  // const addGussedLetter = (key: string) => {
  // };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGussedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

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
