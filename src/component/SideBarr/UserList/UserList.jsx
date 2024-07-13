import styles from './styles.module.css';
import User from './User/User';


const UserList = (props) => {

    let userElement = props.users.map( i => {
        return(
            <User 
                user={i}
                key={i.id}
                handleClick={props.handleClick}
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