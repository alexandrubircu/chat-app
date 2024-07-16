import React from "react";
import styles from './styles.module.css';
import MessageElement from "./MessageElement/MessageElement";

const Messages = (props) => {
    
    if (!props.selectedDialog || props.selectedDialog.length === 0) {
        return <div className={styles.messageArray}>No messages available.</div>;
    }

    if (!props.selectedDialog[0].messages) {
        return <div className={styles.messageArray}>No messages available.</div>;
    }

    return (
        <div className={styles.messageArray}>
            {props.selectedDialog[0].messages.map(m => (
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
