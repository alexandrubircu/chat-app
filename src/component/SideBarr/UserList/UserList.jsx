import React from "react";
import styles from './styles.module.css';
import User from './User/User';

let users = [
    {id:1 , name:"Alex" , surname:"Bircu"}
]

const UserList = () => {

    let userElement = users.map(i => <User name={i.name} surname={i.surname} key={i.id}/>);
    
    return(
        <div className={styles.UserList}>
            {userElement}
        </div>
    );
}

export default UserList;