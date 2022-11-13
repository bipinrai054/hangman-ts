import styles from './HangmanKeyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetter: string[];
  inActiveLetter: string[];
  addGuessedLetter: (key: string) => void;
  disabled?: boolean;
};

export default function HangmanKeyboard({
  activeLetter,
  inActiveLetter,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(75px,1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = inActiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`${styles.btn} ${isActive ? styles.active : ''} ${
              isInActive ? styles.inactive : ''
            }  `}
            disabled={isActive || isInActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
