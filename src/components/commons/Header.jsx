import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <header>
      <section>
        <h3 className={styles.headerTitle}>Flex-Dados</h3>
        <div className={styles.logoBox}>
          <span className={styles.mLetter}>M</span>
          <span className={styles.hLetter}>H</span>
        </div>
      </section>
      <nav>
        <ul className={styles.navigationUl}>
          <Link className={styles.link} to="/dados-react">Jugar</Link>
          <Link className={styles.link} to="/dados-react/reglas">Reglas</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
