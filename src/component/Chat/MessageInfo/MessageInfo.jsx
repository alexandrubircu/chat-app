import React from "react";
import styles from './styles.module.css';
import userImg from '../../../images/userImg.png';

const MessageInfo = (props) => {
    return(
        <div className={styles.messageInfo}>
            <img src={userImg} alt='User' />
            <h1>{props.name}</h1>
        </div>
    );
}

export default MessageInfo;