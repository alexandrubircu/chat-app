import React from "react";
import styles from './styles.module.css'
import HiImg from '../../../images/HiImg.png'

const NewConversation = () => {
    return(
        <div className={styles.NewConversation}>
            <div className={styles.NewConversationContent}>
                <img src={HiImg} alt=''/>
                <div className={styles.NewConversationText}>
                    <h1>Create</h1>
                    <h1>a New</h1>
                    <h1>Conversation</h1>
                </div>
            </div>
        </div>
    );
}

export default NewConversation;