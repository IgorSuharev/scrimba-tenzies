import styles from './styles.module.css'

export default function RollButton(props) {
  return (
    <button
      className={styles.gameButton}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
    >
      {props.value}
    </button>
  )
}
