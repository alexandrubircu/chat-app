import React from "react";
import styles from './styles.module.css'
import SideBarr from "../SideBarr/SideBarr";
import Mesages from "../Mesages/Mesages";

const ChatPage = () => {
    return(
        <div className={styles.ChatPage}>
            <SideBarr/>
            <Mesages/>
        </div>
    );
}

export default ChatPage;