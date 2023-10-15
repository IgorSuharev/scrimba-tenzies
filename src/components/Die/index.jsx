import styles from './Die.module.css'
import classNames from 'classnames'

export default function Die(props) {
  return (
    <button
      className={classNames(
        styles.die, {
          [styles.die_frozen]: props.frozen,
          [styles.die_success]: props.success
        }
      )}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
    >
      {props.value}
    </button>
  )
}