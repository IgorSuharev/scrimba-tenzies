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

  const [dice, setDice] = useState(() => randomDiceArray(10))

  function toggleDie(index) {
    setDice(oldDice => oldDice.map((die, i) => ({
      ...die,
      frozen: i === index ? !die.frozen : die.frozen
    })))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => ({
      ...die,
      value: die.frozen ? die.value : randomDie()
    })));
  }

  function resetDice() {
    setDice(randomDiceArray(10))
  }
  
  return [dice, toggleDie, rollDice, resetDice];
}
