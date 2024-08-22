import React, { useEffect, useState } from "react";
import styles from './styles.module.css';

const MessageElement = (props) => {
    const [authUserMessage, setAuthUserMessage] = useState(false);

    useEffect(() => {
        if (props.userId === +props.authUser.id) {
            setAuthUserMessage(true);
        } else {
            setAuthUserMessage(false);
        }
    }, [props.userId, props.authUser.id]);

    return(
        <div className={`${styles.MessageElementBlock} ${authUserMessage ? styles.AuthUserMessage : ''}`}>
            <div className={styles.MessageElement}>
                <p>{props.message}</p>
                <div className={styles.Mtime}>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    );
}

export default MessageElement;
