import React, { useState, useEffect, useRef } from "react";
import styles from './styles.module.css';
import sendImg from '../../images/send-icon-512x498-x3rvtgx0.png';
import userImg from '../../images/userImg.png';
import { api } from "../../api/api";
import MesageElement from "./MesageElement/MesageElement";

const Mesages = (props) => {
    const [mData, mdataSet] = useState()
    const [empty, setEmpty] = useState(false);
    const containerRef = useRef(null);
    {}
    const [messages, setMessages] = useState([])
    const [inputtext , setinputtext] = useState('');

    
    useEffect(() => {
        api.get(`/dialogs/${props.userId}`).then(res => {
            mdataSet(res.data);
            setMessages(res.data.messages)
            setEmpty(false);
        }).catch(() => {
            setEmpty(true);
        });
    }, [props.userId]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [mData]);

    return (
        <div className={styles.Mesages}>
            <div className={styles.mesageInf}>
                <img src={userImg} alt='' />
                <h1>{props.userName}</h1>
            </div>
            <div className={styles.mAry} ref={containerRef}>
                {!empty ? 
                    [...(messages || [])].reverse().map((i) => (
                        <MesageElement mesage={i.mesage} time={i.time} userId={i.userId} key={i.id} />
                    )) : 
                    <div>empty</div>
                }
            </div> 
            <div className={styles.sendM}>
                <div className={styles.SendMesageBarr} >
                    <input value={inputtext} onChange={(event)=>{
                        return setinputtext(event.target.value)
                    }}/>
                </div>
                <button onClick={()=>{
                    // const newMessage = {
                    //     id: 57, 
                    //     userId: 0, 
                    //     mesage: inputtext, 
                    //     time: '20:10'
                    // }
                    // api.put(`/dialogs/${props.userId}`, newMessage).then(res => console.log(res))
                    // setMessages([...messages, newMessage])
                    // setinputtext('')
                }}>
                    <img src={sendImg} alt='' />
                </button>
            </div>
        </div>
    );
};

export default Mesages;
