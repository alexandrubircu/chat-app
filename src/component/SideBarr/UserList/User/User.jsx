import React from "react";
import styles from './styles.module.css'
import userImg from '../../../../images/userImg.png'

const User = (props) => {

    return(
        <div className={styles.User} onClick={()=>{
            props.setUserId(props.id)
        }} >
            <img src={userImg} alt=''/>
            <div className={styles.userInfo}>
                <h2>{props.name}</h2>
                <p>{props.surname}</p>
            </div>
        </div>
    );
}

export default User;