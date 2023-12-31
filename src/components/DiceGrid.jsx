import Die from './Die';
import successSoundEffect from '/sounds/success.wav';

export default function DiceGrid(props) {
  if (props.success) {
    new Audio(successSoundEffect).play();
  }

  const diceGrid = props.diceArray.map((die, ind) => (
    <Die
      key={ind}
      value={die.value}
      frozen={die.frozen}
      success={props.success}
      onClick={() => props.toggleDie(ind)}
      onMouseDown={props.onMouseDown}
    />
  ));
  return (
    <div className='grid grid-rows-2 grid-cols-5 gap-5'>
      {diceGrid}
    </div>
  );
}
