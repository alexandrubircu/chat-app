import React from "react";
import styles from './styles.module.css'
import userImg from '../../../images/userImg.png'

const Menu = (props) => {
    return(
        <div className={styles.Menu}>
            <div className={styles.userInfo}>
                <img src={userImg} alt='user'/>
                <h1>{props.authUser.name}</h1>
            </div>
            {/* <div className={styles.settings}>
                <p>setari</p>
            </div> */}
        </div>
    );
}

export default Menu