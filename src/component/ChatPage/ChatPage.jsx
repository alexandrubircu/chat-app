import React from "react";
import styles from './styles.module.css'
import SideBarr from "../SideBarr/SideBarr";
import Mesages from "../Mesages/Mesages";
import { api } from "../../api/api";
import { useEffect , useState } from "react";


const ChatPage = () => {
    const [userId,setUserId] = useState([])
    const [userName,setUserName] = useState([])
    const [userD , userDset] = useState([])
    useEffect(()=>{
        api.get('/user').then(res=>{
            userDset(res.data)
        })
    }, [])
    useEffect(()=>{
        const selectedUser = userD && userD.filter((i)=>{
            return i.id === userId
        })
        if(selectedUser.length > 0){setUserName(selectedUser[0].name)}
        
    },[userId])
    
    return(
        <div className={styles.ChatPage}>
            <SideBarr userD={userD} setUserId={setUserId}/>
            <Mesages userId={userId} userName={userName}/>
        </div>
    );
}

export default ChatPage;