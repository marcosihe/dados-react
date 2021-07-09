import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <header>
      <section>
        <h3 class={styles.headerTitle}>Flex-Dados</h3>
        <div class={styles.logoBox}>
          <span class={styles.mLetter}>M</span>
          <span class={styles.hLetter}>H</span>
        </div>
      </section>
      <nav>
        <ul class={styles.navigationUl}>
          <Link className={styles.link} to="/">Jugar</Link>
          <Link className={styles.link} to="/reglas">Reglas</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
