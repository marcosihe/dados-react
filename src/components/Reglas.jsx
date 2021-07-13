import React from "react";
import styles from "./css/Reglas.module.css";

const Reglas = () => {
  return (
    <main className={styles.mainRules}>
      <section className={styles.sectionRules}>
        <h2 className={styles.rulesTitle}>Reglas</h2>
        <ul className={styles.ulRules}>
          <hr />
          <br />
          <li>
            Elije un número del recuadro inferior que contiene los números del 1
            al 6, haciendo click en cualquiera de ellos.
          </li>
          <br />
          <hr />
          <br />
          <li>
            Una vez que hayas elegido tu número, presiona el botón de 'Lanzar
            dados' y listo!
          </li>
          <br />
          <hr />
          <br />
          <li>
            Si el número que elegiste coincide con el número del dado entonces
            ganaste !
          </li>
          <br />
          <hr />
          <br />
          <li>
            Si no hay coincidencia podes seguir intentando, eligiendo otro
            número o el mismo número.
          </li>
          <br />
          <hr />
          <br />
          <li>
            Si no quieres cambiar la elección de tu número, no hacer falta que
            vuelvas a hacer click en el botón correspondiente al mismo,
            simplemente lanza los dados nuvamente.
          </li>
          <br />
          <hr />
          <br />
        </ul>
      </section>
      <section className={styles.extraSectionRules}></section>
    </main>
  );
};

export default Reglas;
