import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import MessageInfo from './MessageInfo/MessageInfo'
import Messages from './Messages/Messages'
import SendMessages from './SendMessages/SendMessages'

const Chat = (props) => {
    const [dialogId,setDialogId] = useState(null);
    const [selectedDialogMessages,setSelectedDialogMessages] = useState(null);
    
    const [updateDialogMessages,setupdateDialogMessages] = useState(null);
    
    useEffect(() => {
        if (props.authUserDialogs && props.selectedUser && props.selectedUser.id) {
            const dialog = props.authUserDialogs.filter(dialog => 
                dialog.participants.includes(+props.selectedUser.id)
            );
            setDialogId(dialog[0].id)
            setSelectedDialogMessages(dialog[0].messages)
        }
    }, [props.selectedUser,props.authUserDialogs]);
    
    useEffect(()=>{
        if(updateDialogMessages){
            setSelectedDialogMessages(updateDialogMessages);
            props.sendNewMessage(dialogId,updateDialogMessages);
        }     
    },[updateDialogMessages])    

    return(
        <div className={styles.Messages}>
            <MessageInfo name={props.selectedUser.name}/>   
            <Messages selectedDialogMessages={selectedDialogMessages} authUser={props.authUser} />
            <SendMessages selectedDialogMessages={selectedDialogMessages} setupdateDialogMessages={setupdateDialogMessages}  authUser={props.authUser}/>         
        </div>
    );
}

export default Chat;