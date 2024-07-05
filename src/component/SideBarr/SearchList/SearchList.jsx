import React from "react";
import styles from './styles.module.css'
import SearchImg from '../../../images/Search.svg.png'
import menuB from '../../../images/menuB.png'


const SearchList = () => {

    return(
        <div className={styles.SearchList}>

            <div className={styles.Mbutton}>
                <img src={menuB} alt=''/>
            </div>

            <div className={styles.sBarr}>
                <img src={SearchImg} alt=''/>
                <input></input>
            </div>
        </div>
    );
}

export default SearchList;