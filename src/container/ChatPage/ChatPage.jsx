import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SideBarr from "../../component/SideBarr/SideBarr";
import Mesages from "../../component/Mesages/Mesages";


const ChatPage = (props) => {
    const [selectedUser,setSelectedUser] = useState('');
    const [selectedUserDialog,setSelectedUserDialog] = useState(null);

    const handleClick = (user) => {
        setSelectedUser(user);
        const filterDialog = props.dialogs?.filter(dialog => dialog.participants.includes(user.id));
        setSelectedUserDialog(filterDialog)
        console.log(filterDialog)
    }
    
    return (
        <div className={styles.ChatPage}>
            <SideBarr users={props.users} handleClick={handleClick}/>
            <Mesages selectedUser={selectedUser} selectedUserDialog={selectedUserDialog} />
        </div>
    );
}

export default ChatPage;
