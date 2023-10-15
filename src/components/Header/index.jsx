import styles from './styles.module.css'

export default function Header() {
  return (
    <header>
      <h1 className={styles.Header__h1}>Tenzies</h1>
      <p className={styles.Header__desc}>Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.</p>
    </header>
  )
}
