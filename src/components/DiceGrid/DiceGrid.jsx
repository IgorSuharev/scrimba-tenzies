import styles from './styles.module.css'
import Dice from '../Dice/Dice'

export default function DiceGrid() {
  return (
    <div className={styles.diceGrid}>
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
    </div>
  )
}
