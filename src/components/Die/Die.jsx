import styles from './styles.module.css'
import classNames from 'classnames'

export default function Die(props) {
  return (
    <button
      className={classNames(
        styles.die,
        { [styles.die_frozen]: props.frozen }
      )}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}