import React, { useState } from "react";
import styles from "./css/Prediccion.module.css";
import Alerta from './Alerta';

const Predicion = (props) => {
    
    const numbersArray = [1, 2, 3, 4, 5, 6];
    const [chosenButton, setChosenButton] = useState(null);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setChosenButton(e.target.id);
    }


  return (
    <section className={styles.predictionContainer}>
      <h3>¿Qué número saldrá?</h3>
      <ul className={styles.btnContainer}>
        {numbersArray.map((item, index) => (
          <li key={index+1} className={styles.liOptions}>
            <button onClick={handleClick} className={styles.btnOptions} id={index+1}>{item}</button>
          </li>
        ))}
      </ul>
      <Alerta randomNumber={props.randomNumber} chosenButton={chosenButton}/>
    </section>
  );
};

export default Predicion;
