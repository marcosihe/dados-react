import React, { useState } from "react";
import styles from "./css/Inicio.module.css";
import Dado from './Dado';
import Prediccion from "./Prediccion";

const Inicio = () => {

  const randomNumber = () => Math.floor(Math.random() * 6 + 1)
  const [diceNumber, setDiceNumber] = useState(1);
  const [clickedPlayButton, setClickedPlayButton] = useState(false);
  const [chosenNumber, setChosenNumber] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setDiceNumber(randomNumber());
    setClickedPlayButton(true);
  }
  const prediction = (e) => {
    e.preventDefault();
    setChosenNumber(parseInt(e.target.id));
    setShowAlert(false);
    setClickedPlayButton(false);
  }

  if(clickedPlayButton && (chosenNumber === diceNumber)){
    setClickedPlayButton(false);
    setShowAlert(true);
  }
  
  return (
    <main>
      <section className={styles.btnContainer}>
        <button className={styles.btnPlay} onClick={ handleClick }>¡Lanzar dado!</button>
      </section>
      <section className={styles.diceContainer}>
        <Dado diceNumber ={diceNumber}/>
      </section>
      <section className={styles.btnContainer}>
      <Prediccion prediction={prediction} chosenNumber={chosenNumber}/>
      </section>
      <section>
        {showAlert? ( setTimeout(function(){alert("ganaste")},1200)) : null}
      </section>
    </main>
  );
};

export default Inicio;
