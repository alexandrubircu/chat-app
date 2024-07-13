import React from 'react';
import styles from './styles.module.css';

const MesageElement = (props) => {


    return(

        <div className={styles.MesageElementBlock}>

            <div className={styles.MesageElement}>
                <p>{props.message}</p>

                <div className={styles.Mtime}>
                    <p>{props.time}</p>
                </div>
            </div>

        </div>
    )
}

export default MesageElement;
