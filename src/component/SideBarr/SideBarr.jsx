import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SearchList from "./SearchList/SearchList";
import UserList from "./UserList/UserList";


const SideBarr = (props) => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const filteredUsers = props.userData.filter(user => user.id !== props.authUser.id);        
        setUsers(filteredUsers)
    },[props.userData])
    
    const selectUser = (user) => {
       props.setSelectedUser(user)
    }

    return(
        <div className={styles.SideBarr}>
            <SearchList/>
            <UserList users={users} selectUser={selectUser}/>
        </div>
    );
}

export default SideBarr;





// const SideBarr = (props) => {


//     return(
//         <div className={styles.SideBarr}>
//             <SearchList/>
//             <UserList users={props.users} handleClick={props.handleClick}/>
//         </div>
//     );
// }

// export default SideBarr;