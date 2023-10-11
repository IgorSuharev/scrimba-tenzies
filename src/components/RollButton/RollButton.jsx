import styles from './styles.module.css'

export default function RollButton(props) {
  return (
    <button className={styles.rollButton} onClick={props.onClick}>Roll</button>
  )
}
