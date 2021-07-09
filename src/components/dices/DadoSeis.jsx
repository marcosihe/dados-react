import React from 'react';
import styles from '../css/DadoSeis.module.css';
import commonStyles from '../css/Dados.module.css';

const DadoSeis = () => {
    return (
        <div className={commonStyles.circlesContainer}>
            <div className={styles.spaceBetweenTwoCircles}>
                <div className={commonStyles.diceCircle}></div>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.spaceBetweenTwoCircles}>
                <div className={commonStyles.diceCircle}></div>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.spaceBetweenTwoCircles}>
                <div className={commonStyles.diceCircle}></div>
                <div className={commonStyles.diceCircle}></div>
            </div>
        </div>
    )
}

export default DadoSeis
