import DiceGrid from '../DiceGrid'
import Header from '../Header'
import GameButton from '../GameButton'
import styles from './App.module.css'
import clickButton from '/sounds/clickButton.mp3'
import useDiceArray from '../../hooks/useDiceArray'

export default function App() {
  const [dice, toggleDie, rollDice, resetDice] = useDiceArray()

  function handleMouseDown() {
    new Audio(clickButton).play();
  }

  function isDiceAreTheSame() {
    return dice.every(die => die.value === dice[0].value && die.frozen);
  }

  const gameButtonProps = isDiceAreTheSame() ? {
    onClick: resetDice,
    value: 'Reset Game'
  } : {
    onClick: rollDice,
    value: 'Roll'
  };
  gameButtonProps.onMouseDown = handleMouseDown;

  return (
    <main className={styles.main}>
      <Header />
      <DiceGrid
        onMouseDown={handleMouseDown}
        success={isDiceAreTheSame()}
        dice={dice}
        toggleDie={toggleDie}
      />
      <GameButton {...gameButtonProps} />
    </main>
  )
}