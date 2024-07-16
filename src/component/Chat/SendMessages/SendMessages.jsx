import React from "react";
import styles from './styles.module.css'
import sendBImg from '../../../images/send-icon-512x498-x3rvtgx0.png'

const SendMessages = () => {
    return(
        <div className={styles.sendMessage}>
            <div className={styles.sendMessageBar}>
                <input />
            </div>
            <button>
                <img src={sendBImg} alt='Send' />
            </button>
        </div>
    );
}

export default SendMessages;