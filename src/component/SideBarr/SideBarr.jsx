import React from "react";
import styles from './styles.module.css'
import SearchList from "./SearchList/SearchList";
import UserList from "./UserList/UserList";

const SideBarr = (props) => {
    return(
        <div className={styles.SideBarr}>
            <SearchList/>
            <UserList users={props.users}/>
            {/* <UserList userD={props.userD} setUserId={props.setUserId}/> */}
        </div>
    );
}

export default SideBarr;