import styles from './styles.module.css';
import User from './User/User';


const UserList = (props) => {

   

    let userElement = props.usersList.map( i => {
        return(
            <User 
                user={i}
                key={i.id}
                selectUser={props.selectUser}
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