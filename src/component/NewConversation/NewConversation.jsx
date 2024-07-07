import React from "react";
import styles from './styles.module.css'
import NewConvImg from '../../images/newConv.png'

const NewConversation = () =>{
    return(
        <div className={styles.NewConversation}>
            <img className={styles.animatedimage} src={NewConvImg} alt=''/>
            <h1>Say hello</h1>
        </div>
    );
}

export default NewConversation