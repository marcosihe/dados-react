import React, { Fragment, useEffect, useState } from "react";
import styles from "./css/Prediccion.module.css";

const Prediccion = (props) => {
  const numbersArray = [1, 2, 3, 4, 5, 6];
  const { prediction } = props;
  const [selectedButton, setSelectedButton] = useState(1);
  useEffect( () => {
      setSelectedButton(props.chosenNumber);
    },
    [props.chosenNumber]
  );
  console.log("desde prediccion");

  return (
    <Fragment>
      <section className={styles.predictionContainer}>
        <h3>¿Qué número saldrá?</h3>
        <ul className={styles.btnContainer}>
          {numbersArray.map((item, index) => (
            <li key={index + 1} className={styles.liOptions}>
              {selectedButton !== index + 1 ? (
                <button
                  onClick={prediction}
                  className={styles.btnOptions}
                  id={index + 1}
                >
                  {item}
                </button>
              ) : (
                <button
                  onClick={prediction}
                  className={styles.selectedButton}
                  id={index + 1}
                >
                  {item}
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default Prediccion;
