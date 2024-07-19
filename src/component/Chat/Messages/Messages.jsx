import React from "react";
import styles from './styles.module.css';
import MessageElement from "./MessageElement/MessageElement";

const Messages = (props) => {
    
    if (!props.selectedDialogMessages || props.selectedDialogMessages.length === 0) {
        return <div className={styles.messageArray}>No messages available.</div>;
    }
    

    return (
        <div className={styles.messageArray}>
            {props.selectedDialogMessages.map(m => (
                <MessageElement
                    authUser={props.authUser}
                    id={m.id}
                    userId={m.userId}
                    message={m.message}
                    time={m.time}
                    key={m.id}
                />
            ))}
        </div>
    );
}

export default Messages;
