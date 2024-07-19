import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SideBarr from "../../component/SideBarr/SideBarr";
import Chat from "../../component/Chat/Chat";



const ChatPage = (props) => {
    const [selectedUser,setSelectedUser] = useState({});

    return (
        <div className={styles.ChatPage}>
            <SideBarr authUser={props.authUser} userData={props.userData} setSelectedUser={setSelectedUser}/>
            <Chat selectedUser={selectedUser} authUser={props.authUser} authUserDialogs={props.authUserDialogs} sendNewMessage={props.sendNewMessage}/>
        </div>
    );
}

export default ChatPage;



