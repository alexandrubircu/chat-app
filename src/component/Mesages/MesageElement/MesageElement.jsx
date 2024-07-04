import React, { useEffect, useState } from "react";
import styles from './styles.module.css';

const MesageElement = (props) => {

    const [meMesage , setmeMesage] = useState([])

    useEffect(()=>{
        if(props.userId == 0){
            setmeMesage({justi:"end" , borderR:"0px" , borderL:"10px" , backColor:"#000"})
        }
    },[props.userId])

    return(

        <div className={styles.MesageElementBlock} style={{justifyContent:meMesage.justi}}>

            <div className={styles.MesageElement} style={{borderBottomRightRadius:meMesage.borderR , borderBottomLeftRadius:meMesage.borderL , backgroundColor:meMesage.backColor}} >
                <p>{props.mesage}</p>
                <div className={styles.Mtime}>
                    <p>{props.time}</p>
                </div>
            </div>

        </div>
    )
}

export default MesageElement;