import { useState } from "react";

export default function useDiceArray() {
  function randomDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function randomDiceArray(n) {
    return Array.from({ length: n }, () => ({
      value: randomDie(),
      frozen: false
    }))
  }

  const [diceArray, setDiceArray] = useState(() => randomDiceArray(10))

  function toggleDie(index) {
    setDiceArray(diceArray.map((die, i) => ({
      ...die,
      frozen: i === index ? !die.frozen : die.frozen
    })))
  }

  function rollDiceArray() {
    setDiceArray(diceArray.map(die => ({
      ...die,
      value: die.frozen ? die.value : randomDie()
    })));
  }

  function resetDiceArray() {
    setDiceArray(randomDiceArray(10))
  }
  
  return [diceArray, toggleDie, rollDiceArray, resetDiceArray];
}
