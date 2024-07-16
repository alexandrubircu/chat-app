import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import MessageInfo from './MessageInfo/MessageInfo'
import Messages from './Messages/Messages'
import SendMessages from './SendMessages/SendMessages'

const Chat = (props) => {
    const [selectedDialog, setSelectedDialog] = useState(null);

    useEffect(() => {
        if (props.authUserDialogs) {
            const dialog = props.authUserDialogs.filter(dialog => 
                dialog.participants.includes(+props.selectedUser.id)
            );
            setSelectedDialog(dialog);
        }
    }, [props.selectedUser, props.authUserDialogs]);

    return(
        <div className={styles.Messages}>
            <MessageInfo name={props.selectedUser.name}/>   
            <Messages selectedDialog={selectedDialog} authUser={props.authUser} />
            <SendMessages/>         
        </div>
    );
}

export default Chat;