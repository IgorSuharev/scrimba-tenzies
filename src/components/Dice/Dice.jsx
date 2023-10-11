import styles from './styles.module.css'

export default function Dice(props) {
  return (
    <button className={styles.dice}>{props.content}</button>
  )
}