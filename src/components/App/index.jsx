import { useState } from 'react'
import DiceGrid from '../DiceGrid'
import Header from '../Header'
import GameButton from '../GameButton'
import styles from './App.module.css'
import clickButton from '/sounds/clickButton.mp3'

export default function App() {
  //#region Secondary functions
  function randomDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function randomDiceArray(n) {
    return Array.from({ length: n }, () => ({
      value: randomDie(),
      frozen: false
    }))
  }
  //#endregion

  //#region States
  const [dice, setDice] = useState(() => randomDiceArray(10));
  //#endregion

  function handleMouseDown() {
    new Audio(clickButton).play();
  }

  function toggleDie(index) {
    setDice(oldDice => oldDice.map((die, i) => ({
      ...die,
      frozen: i === index ? !die.frozen : die.frozen
    })))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => ({
      ...die,
      value: die.frozen ? die.value : randomDie()
    })));
  }

  function resetDice() {
    setDice(randomDiceArray(10))
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
  gameButtonProps.onMouseDown = handleMouseDown

  return (
    <main className={styles.main}>
      <Header />
      <DiceGrid onMouseDown={handleMouseDown} success={isDiceAreTheSame()} dice={dice} toggleDie={toggleDie} />
      <GameButton {...gameButtonProps} />
    </main>
  )
}