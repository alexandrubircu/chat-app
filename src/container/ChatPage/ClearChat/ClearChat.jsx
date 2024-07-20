import React from "react";
import styles from './styles.module.css'
import HiImg from '../../../images/HiImg.png'

const ClearChat = () => {
    return(
        <div className={styles.Messages}>
               <div className={styles.HiMseageBox}>
                    <div className={styles.HiMseage}>
                        <img src={HiImg} alt=''/>
                        <h1>Hi</h1>
                    </div>
                </div>
            </div>
    );
}

export default ClearChat;