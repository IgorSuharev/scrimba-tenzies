import DiceGrid from '../DiceGrid';
import Header from '../Header';
import GameButton from '../GameButton';
import styles from './App.module.css';
import clickButton from '/sounds/clickButton.mp3';
import useDiceArray from '../../hooks/useDiceArray';

export default function App() {
  const [diceArray, toggleDie, rollDiceArray, resetDiceArray] = useDiceArray();

  function handleButtonsMouseDown() {
    new Audio(clickButton).play();
  }

  function areDiceValuesEqual() {
    return diceArray.every(die => die.value === diceArray[0].value && die.frozen);
  }

  const gameButtonConditionalProps = areDiceValuesEqual() ? {
    onClick: resetDiceArray,
    value: 'Reset Game',
  } : {
    onClick: rollDiceArray,
    value: 'Roll'
  };

  return (
    <main className={styles.main}>
      <Header />
      <DiceGrid
        onMouseDown={handleButtonsMouseDown}
        success={areDiceValuesEqual()}
        diceArray={diceArray}
        toggleDie={toggleDie}
      />
      <GameButton
        {...gameButtonConditionalProps}
        onMouseDown={handleButtonsMouseDown}
      />
    </main>
  );
}