import React, { useState } from "react";
import styles from "./css/Inicio.module.css";
import Dado from './Dado';

const Inicio = () => {

  const [diceNumber, setDiceNumber] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    setDiceNumber(Math.floor(Math.random() * 6 + 1))
  }

console.log(diceNumber);
  return (
    <main>
      <section className={styles.btnContainer}>
        <button className={styles.btnPlay} onClick={ handleClick }>¡Lanzar dados!</button>
      </section>
      <section className={styles.diceContainer}>
        <Dado diceNumber ={diceNumber}/>
        {/* Componente Predicción y Opciones */}
      </section>
    </main>
  );
};

export default Inicio;
