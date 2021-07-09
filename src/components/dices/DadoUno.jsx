import React from "react";
import styles from "../css/DadoUno.module.css";
import commonStyles from '../css/Dados.module.css';

const DadoUno = () => {
  return (
    <div className={styles.circleContainer}>
      <div className={commonStyles.diceCircle}></div>
    </div>
  );
};

export default DadoUno;
