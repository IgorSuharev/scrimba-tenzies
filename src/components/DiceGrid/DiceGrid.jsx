import styles from './styles.module.css'
import Dice from '../Dice/Dice'

export default function DiceGrid() {
  return (
    <div className={styles.diceGrid}>
      <Dice value='1' frozen/>
      <Dice value='2' />
      <Dice value='1' frozen/>
      <Dice value='4' />
      <Dice value='5' />
      <Dice value='3' />
      <Dice value='3' />
      <Dice value='5' />
      <Dice value='6' />
      <Dice value='1' frozen/>
    </div>
  )
}
