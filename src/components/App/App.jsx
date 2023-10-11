import { useState } from 'react'
import DiceGrid from '../DiceGrid/DiceGrid'
import Header from '../Header/Header'
import RollButton from '../RollButton/RollButton'
import styles from './styles.module.css'

export default function App() {
  function randomDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const [dice, setDice] = useState(() => Array(10).fill(0).map((_, i) => ({
    value: randomDie(),
    frozen: i % 2 === 0
  })));

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


  return (
    <div className={styles.App}>
      <main className={styles.main}>
        <div className={styles.main__inner}>
          <Header />
          <DiceGrid dice={dice} toggleDie={toggleDie}/>
          <RollButton onClick={rollDice}/>
        </div>
      </main>
    </div>
  )
}