// import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import User from './User/User';


const UserList = (props) => {



   
    // let userElement = props.users.map(i => <User id={i.id} setUserId={props.setUserId} name={i.name} surname={i.surname} key={i.id}/>);
    let userElement = props.users.map( i => {
        return(
            <User 
                id={i.id} 
                name={i.name} 
                surname={i.surname} 
                key={i.id}
            />
        );
    })

    return(
        <div className={styles.UserList}>
            {userElement}
        </div>
    );
}

export default UserList;