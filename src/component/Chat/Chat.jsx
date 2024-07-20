import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import MessageInfo from './MessageInfo/MessageInfo'
import Messages from './Messages/Messages'
import SendMessages from './SendMessages/SendMessages'
import NewConversation from './NewConversation/NewConversation'


const Chat = (props) => {
    const [dialogId,setDialogId] = useState(null);
    const [selectedDialogMessages,setSelectedDialogMessages] = useState(null);
    const [updateDialogMessages,setupdateDialogMessages] = useState(null);
    const [chatState,setChatState] = useState(null)
    const [emptyChat, setEmptyChat] = useState(true)
    
    useEffect(() => {
        if (props.authUserDialogs && props.selectedUser && props.selectedUser.id) {
            setChatState(null)
            const dialog = props.authUserDialogs.filter(dialog => dialog.participants.includes(+props.selectedUser.id));
            if(Object.keys(dialog).length > 0){
                setDialogId(dialog[0].id)
                setSelectedDialogMessages(dialog[0].messages)
                setChatState(true)
            }else{
                setDialogId(null)
                setSelectedDialogMessages(null)
                setChatState(false)
            }
            setEmptyChat(false)
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
            {
                emptyChat ? <></> : !chatState ? <NewConversation/>: <Messages selectedDialogMessages={selectedDialogMessages} authUser={props.authUser} />
            }
            <SendMessages 
                selectedDialogMessages={selectedDialogMessages} 
                setupdateDialogMessages={setupdateDialogMessages}  
                authUser={props.authUser}
                selectedUser={props.selectedUser}
                createNewConversation={props.createNewConversation}
            />         
            
        </div>
    );
}

export default Chat;