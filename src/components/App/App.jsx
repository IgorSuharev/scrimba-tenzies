import Dice from '../Dice/Dice'
import Header from '../Header/Header'
import Roll from '../Roll/Roll'
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