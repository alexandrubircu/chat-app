import React from "react";
import styles from './styles.module.css'
import userImg from '../../../../images/userImg.png'

const User = (props) => {
    
    return(
        <div className={styles.User} onClick={()=>props.handleClick(props.user)} >
            <img src={userImg} alt=''/>
            <div className={styles.userInfo}>
                <h2>{props.user.name}</h2>
                <p>{props.user.surname}</p>
            </div>
        </div>
    );
}

export default User;