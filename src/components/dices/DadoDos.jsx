import React from 'react';
import styles from '../css/DadoDos.module.css';
import commonStyles from '../css/Dados.module.css';

const DadoDos = () => {
    return (
        <div className={commonStyles.circlesContainer}>
            <div>
                <div className={commonStyles.diceCircle}></div>
            </div>
            <div className={styles.endPosition}>
                <div className={commonStyles.diceCircle}></div>
            </div>
        </div>
    )
}

export default DadoDos
