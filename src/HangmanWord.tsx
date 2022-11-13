type HangmanWordProps = {
  gussedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  gussedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25rem',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => {
        return (
          <span style={{ borderBottom: '.1em solid black' }} key={index}>
            <span
              style={{
                visibility:
                  gussedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                color:
                  !gussedLetters.includes(letter) && reveal ? 'red' : 'black',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
