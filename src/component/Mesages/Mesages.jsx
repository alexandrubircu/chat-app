import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import userImg from '../../images/userImg.png'
import sendBImg from '../../images/send-icon-512x498-x3rvtgx0.png'
import MessageElement from './MesageElement/MesageElement'
import NewConversation from '../NewConversation/NewConversation'

const Messages = (props) => {    

    const [messages, setMessages] = useState(null);
    
    useEffect(() => {
        if (props.selectedUserDialog && props.selectedUserDialog[0]) {
            setMessages(props.selectedUserDialog[0].messages);
        }else{
            setMessages([]);
        }
    }, [props.selectedUserDialog]);


    return (
        <div className={styles.Messages}>
          { messages && props.selectedUser && <> <div className={styles.messageInfo}>
                <img src={userImg} alt='User' />
                {props.selectedUser && <h1>{props.selectedUser.name}</h1>}
            </div>
            <div className={styles.messageArray}>

                {messages?.length > 0 
                    ? messages.map((i) => <MessageElement key={i.id} message={i.message} time={i.time} userId={i.userId}/>)
                    : <div><NewConversation /></div>
                }

            </div> 
            <div className={styles.sendMessage}>
                <div className={styles.sendMessageBar}>
                    <input />
                </div>
                <button>
                    <img src={sendBImg} alt='Send' />
                </button>
            </div></>}
        </div>
    );
}

export default Messages;


