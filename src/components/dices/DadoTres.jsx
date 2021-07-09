import React from 'react';
import styles from '../css/DadoTres.module.css';
import commonStyles from '../css/Dados.module.css';

const DadoTres = () => {
    return (
        <div className={commonStyles.circlesContainer}>
            <div>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.centerPosition}>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.endPosition}>
                <div className={commonStyles.diceCircle}></div>
            </div>
        </div>
    )
}

export default DadoTres
