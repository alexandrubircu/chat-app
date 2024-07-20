import React, { useState } from "react";
import styles from './styles.module.css'
import sendBImg from '../../../images/send-icon-512x498-x3rvtgx0.png'

const SendMessages = (props) => {
    const [message,setMessage] = useState('');

    const onSend = () => {

        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        if(message && props.selectedDialogMessages){
            const messages = JSON.parse(JSON.stringify(props.selectedDialogMessages));
            const lastMessageId = messages.length
            const newMessage = {
                id: +lastMessageId + 1,
                userId: +props.authUser.id,
                message: message,
                time: `${hours}:${minutes}`
            };

            messages.unshift(newMessage);
            props.setupdateDialogMessages(messages);
        }else{
            const  firstmessage = {
                id: 1,
                userId: +props.authUser.id,
                message: message,
                time: `${hours}:${minutes}`
            }
            const newDialog = {
                participants:[+props.authUser.id,+props.selectedUser.id],
                messages:[firstmessage]
            }
            props.createNewConversation(newDialog);
        }
        setMessage('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSend();
        }
    };

    return(
        <div className={styles.sendMessage}>
            <div className={styles.sendMessageBar}>
                <input 
                    value={message} 
                    onChange={(e)=>setMessage(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
            </div>
            <button onClick={onSend}>
                <img src={sendBImg} alt='Send' />
            </button>
        </div>
    );
}

export default SendMessages;