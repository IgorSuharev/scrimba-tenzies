import styles from './styles.module.css'

export default function Dice({value='0', ...props}) {
  return (
    <button className={styles.dice}>{value}</button>
  )
}