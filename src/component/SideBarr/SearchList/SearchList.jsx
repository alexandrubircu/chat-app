import React from "react";
import styles from './styles.module.css'
import SearchImg from '../../../images/Search.svg.png'
import menuB from '../../../images/menuB.png'


const SearchList = (props) => {

    return(
        <div className={styles.SearchList}>

            <div className={styles.Mbutton} onClick={props.onChangeComponent} >
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