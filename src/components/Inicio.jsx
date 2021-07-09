import React from "react";
import styles from "./css/Inicio.module.css";

const Inicio = () => {
  return (
    <main>
      <section className={styles.btnContainer}>
        <button className={styles.btnPlay}>¡Lanzar dados!</button>
      </section>
      <section className={styles.diceContainer}>
        {/* Componente Dado */}
        {/* Componente Predicción y Opciones */}
      </section>
    </main>
  );
};

export default Inicio;
