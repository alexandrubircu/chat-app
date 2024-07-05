import React, { useState, useEffect, useRef } from "react";
import styles from './styles.module.css';
import sendImg from '../../images/send-icon-512x498-x3rvtgx0.png';
import userImg from '../../images/userImg.png';
import { api } from "../../api/api";
import MesageElement from "./MesageElement/MesageElement";

const Mesages = (props) => {
    const [mData, mdataSet] = useState(null);
    const [empty, setEmpty] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputtext, setinputtext] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        api.get(`/dialogs/${props.userId}`).then(res => {
            mdataSet(res.data);
            setMessages(res.data.messages);
            setEmpty(false);
        }).catch(() => {
            setEmpty(true);
        });
    }, [props.userId]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputtext.trim()) return; 

        const newMessage = {
            id: Date.now(), 
            userId: 0, 
            mesage: inputtext, 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setinputtext('');

        api.patch(`/dialogs/${props.userId}`, { messages: updatedMessages })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

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
                <div className={styles.SendMesageBarr}>
                    <input 
                        value={inputtext} 
                        onChange={(event) => setinputtext(event.target.value)} 
                        onKeyDown={handleKeyDown} // Adăugăm evenimentul onKeyDown
                    />
                </div>
                <button onClick={handleSendMessage}>
                    <img src={sendImg} alt='' />
                </button>
            </div>
        </div>
    );
};

export default Mesages;
