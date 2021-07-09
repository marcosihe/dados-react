import React from 'react';
import styles from '../css/DadoCuatro.module.css';
import commonStyles from '../css/Dados.module.css';

const DadoCuatro = () => {
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
        </div>
    )
}

export default DadoCuatro
