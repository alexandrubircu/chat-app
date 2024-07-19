import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import SearchList from "./SearchList/SearchList";
import UserList from "./UserList/UserList";
import Menu from "./Menu/Menu";

const SideBarr = (props) => {
    const [users, setUsers] = useState([]);
    const [activeComponent, setActiveComponent] = useState('UserList');

    useEffect(() => {
        const filteredUsers = props.userData.filter(user => user.id !== props.authUser.id);        
        setUsers(filteredUsers);
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
            <SearchList onChangeComponent={onChangeComponent} />
            {activeComponent === 'UserList' ? 
                <UserList users={users} selectUser={selectUser} /> : 
                <Menu authUser={props.authUser}/>
            }
        </div>
    );
}

export default SideBarr;
