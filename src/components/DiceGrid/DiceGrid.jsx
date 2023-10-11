import styles from './styles.module.css'
import Die from '../Die/Die'

export default function DiceGrid(props) {
  const diceGrid = props.dice.map((die, ind) => (
    <Die
      key={ind}
      value={die.value}
      frozen={die.frozen}
      onClick={() => props.toggleDie(ind)}
    />
  ))
  return (
    <div className={styles.diceGrid}>
      {diceGrid}
    </div>
  )
}
