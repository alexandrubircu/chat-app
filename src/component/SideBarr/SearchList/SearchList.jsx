import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SearchImg from '../../../images/Search.svg.png'
import menuB from '../../../images/menuB.png'

const SearchList = (props) => {
    const [input, setInput] = useState('');
    const [selsctUser, setSelsctUser] = useState({});
    

    useEffect(() => {
        const users = props.usersDb;

        if (input.length > 0) {
            const filterList = users.filter(user => 
                user.name.toLowerCase().includes(input.toLowerCase())
            );
            props.setUsersList(filterList);
            
            if(filterList.length === 1){
                setSelsctUser(filterList[0]);
            }
            
        } else {
            props.setUsersList(users);
        }
    }, [input, props.usersDb]);
    

    const onPress = (event) =>{
        if(event.key === 'Enter'){
            props.selectUser(selsctUser);
        }
    }

    return(
        <div className={styles.SearchList}>

            <div className={styles.Mbutton} onClick={props.onChangeComponent} >
                <img src={menuB} alt=''/>
            </div>

            <div className={styles.sBarr}>
                <img src={SearchImg} alt=''/>
                <input  
                    placeholder="Search" 
                    onChange={(e)=>{
                        if(e.target.value !== ' '){
                            setInput(e.target.value)
                        }
                    }} 
                    onKeyDown={onPress}
                    value={input}
                />
            </div>
        </div>
    );
}

export default SearchList;