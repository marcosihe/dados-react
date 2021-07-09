import React, { useState } from "react";
import styles from "./css/Inicio.module.css";
import Dado from './Dado';
import Predicion from "./Predicion";

const Inicio = () => {

  const randomNumber = () => Math.floor(Math.random() * 6 + 1)
  const [diceNumber, setDiceNumber] = useState(randomNumber());

  const handleClick = (e) => {
    e.preventDefault();
    setDiceNumber(randomNumber)
  }

console.log(diceNumber);
  return (
    <main>
      <section className={styles.btnContainer}>
        <button className={styles.btnPlay} onClick={ handleClick }>¡Lanzar dados!</button>
      </section>
      <section className={styles.diceContainer}>
        <Dado diceNumber ={diceNumber}/>
      </section>
      <section className={styles.btnContainer}>
      <Predicion diceNumber={diceNumber}/>
      </section>
    </main>
  );
};

export default Inicio;
