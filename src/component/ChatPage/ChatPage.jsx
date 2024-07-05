import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SideBarr from "../SideBarr/SideBarr";
import Mesages from "../Mesages/Mesages";
import { api } from "../../api/api";

const ChatPage = () => {
    const [userId, setUserId] = useState(null); 
    const [userName, setUserName] = useState("");
    const [userD, userDset] = useState([]);

    useEffect(() => {
        api.get('/user').then(res => {
            userDset(res.data);
        });
    }, []);

    useEffect(() => {
        if (userId !== null) {
            const selectedUser = userD.find(i => i.id === userId);
            if (selectedUser) {
                setUserName(selectedUser.name);
            }
        }
    }, [userId, userD]); 

    return (
        <div className={styles.ChatPage}>
            <SideBarr userD={userD} setUserId={setUserId} />
            <Mesages userId={userId} userName={userName} />
        </div>
    );
}

export default ChatPage;
