import DiceGrid from './DiceGrid';
import Header from './Header';
import GameButton from './GameButton';
import styles from './App/App.module.css';
import clickButton from '/sounds/clickButton.mp3';
import useDiceArray from '../hooks/useDiceArray';

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
    <main className='w-80 h-80 rounded-xl p-7 flex flex-col justify-between items-center text-center
    bg-neutral-100'>
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