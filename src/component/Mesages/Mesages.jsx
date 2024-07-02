import React from "react";
import styles from './styles.module.css';
import sendImg from '../../images/send-icon-512x498-x3rvtgx0.png'
import userImg from '../../images/userImg.png'

const Mesages = () => {
    return(
        <div className={styles.Mesages}>
            <div className={styles.mesageInf}>
                <img src={userImg} alt=''/>
                <h1>Alex</h1>
            </div>
            <div className={styles.mAry}>

            </div>
            <div className={styles.sendM}>
                <div className={styles.SendMesageBarr}>
                    <input></input>
                </div>
                <button>
                    <img src={sendImg} alt=''/>
                </button>
            </div>
        </div>
    )
}

export default Mesages;