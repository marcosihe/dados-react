import React from 'react';
import styles from '../css/DadoCinco.module.css';
import commonStyles from '../css/Dados.module.css';

const DadoCinco = () => {
    return (
        <div className={commonStyles.circlesContainer}>
            <div className={styles.spaceBetweenTwoCircles}>
                <div className={commonStyles.diceCircle}></div>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.centerPosition}>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.spaceBetweenTwoCircles}>
                <div className={commonStyles.diceCircle}></div>
                <div className={commonStyles.diceCircle}></div>
            </div>
        </div>
    )
}

export default DadoCinco
