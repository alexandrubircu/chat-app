import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SideBarr from "../../component/SideBarr/SideBarr";
import Chat from "../../component/Chat/Chat";



const ChatPage = (props) => {
    const [selectedUser,setSelectedUser] = useState({});
    return (
        <div className={styles.ChatPage}>
            <SideBarr authUser={props.authUser} userData={props.userData} setSelectedUser={setSelectedUser}/>
            <Chat selectedUser={selectedUser} authUser={props.authUser} authUserDialogs={props.authUserDialogs}/>
        </div>
    );
}

export default ChatPage;




// const ChatPage = (props) => {

//     const [selectedUser,setSelectedUser] = useState('');
//     const [selectedUserDialog,setSelectedUserDialog] = useState(null);

//     const handleClick = (user) => {
//         setSelectedUser(user);
//         const filterDialog = props.dialogs?.filter(dialog => dialog.participants.includes(user.id));
//         setSelectedUserDialog(filterDialog)
//     }
    


//     return (
//         <div className={styles.ChatPage}>
//             <SideBarr users={props.users} handleClick={handleClick}/>
//             <Mesages selectedUser={selectedUser} selectedUserDialog={selectedUserDialog} />
//         </div>
//     );
// }

// export default ChatPage;
