import { useState } from 'react'
import DiceGrid from '../DiceGrid/DiceGrid'
import Header from '../Header/Header'
import GameButton from '../GameButton/GameButton'
import styles from './styles.module.css'

export default function App() {
  //#region Secondary functions
  function randomDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function randomDiceArray(n) {
    return Array.from({length: n}, () => ({
      value: randomDie(),
      frozen: false
    }))
  }
  //#endregion

  //#region States
  const [dice, setDice] = useState(() => randomDiceArray(10));
  //#endregion


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

  return (
    <div className={styles.App}>
      <main className={styles.main}>
        <div className={styles.main__inner}>
          <Header />
          <DiceGrid success={isDiceAreTheSame()} dice={dice} toggleDie={toggleDie} />
          <GameButton {...gameButtonProps} />
        </div>
      </main>
    </div>
  )
}