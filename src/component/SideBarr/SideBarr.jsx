import React from "react";
import styles from './styles.module.css'
import SearchList from "./SearchList/SearchList";
import UserList from "./UserList/UserList";

const SideBarr = () => {
    return(
        <div className={styles.SideBarr}>
            <SearchList/>
            <UserList/>
        </div>
    );
}

export default SideBarr;