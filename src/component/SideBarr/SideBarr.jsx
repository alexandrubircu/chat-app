import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import SearchList from "./SearchList/SearchList";
import UserList from "./UserList/UserList";
import Menu from "./Menu/Menu";

const SideBarr = (props) => {
    const [usersDb, setUsersDb] = useState([]);
    const [usersList , setUsersList] = useState([])
    const [activeComponent, setActiveComponent] = useState('UserList');

    useEffect(() => {
        const filteredUsers = props.userData.filter(user => user.id !== props.authUser.id);        
        setUsersDb(filteredUsers);
    }, [props.userData, props.authUser.id]);

    
    const selectUser = (user) => {
        props.setSelectedUser(user);
    }

    const onChangeComponent = () => {
        if (activeComponent === 'UserList') {
            setActiveComponent('Menu');
        } else if (activeComponent === 'Menu') {
            setActiveComponent('UserList');
        }
    }
    
    
    return (
        <div className={styles.SideBarr}>
            <SearchList onChangeComponent={onChangeComponent} usersDb={usersDb} setUsersList={setUsersList} selectUser={selectUser}/>
            {activeComponent === 'UserList' ? 
                <UserList usersList={usersList} selectUser={selectUser}/> : 
                <Menu authUser={props.authUser}/>
            }
        </div>
    );
}

export default SideBarr;
