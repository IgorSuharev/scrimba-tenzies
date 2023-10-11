import Dice from '../Dice/Dice'
import Header from '../Header/Header'
import styles from './styles.module.css'

export default function App() {
  return (
    <div className={styles.App}>
      <main className={styles.main}>
        <div className={styles.main__inner}>
          <Header />
        </div>
      </main>
    </div>
  )
}