import React, { useState } from "react";
import styles from './styles.module.css'
import { Link } from "react-router-dom";
import goBack from '../../images/go-back-2-256.png'
const Register = (props) => {
    const [login,setLogin] = useState(null)
    const [password,setPassword] = useState(null);
    const [trypassword,setTryPassword] = useState(null);
    const [name,setName] = useState(null);
    const [surname,setSurname] = useState(null);
    const [error,setError] = useState(null);

    const handleRegister = () => {
        if(props.userData.length){
            if (!login || !password || !trypassword || !name || !surname) {
                setError('All fields are required.');
                return;
            }
            if (password !== trypassword) {
                setError('Passwords do not match.');
                return;
            }
            if (props.userData.some(user => user.login === login)) {
                setError('Login already exists.');
                return;
            }
            const lastUserId = props.userData.length
            const user = {
                id: +lastUserId+1,
                name: name,
                surname: surname,
                login: login,
                password: password
            }
            props.registerUser(user)
            setError('Succes');
            
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleRegister();
        }
    };

    return(
        <div className={styles.Register}>
            <div className={styles.infoBlock}>
                <Link to={'/'}  className={styles['custom-button']}>
                    <img src={goBack} alt='' />
                </Link>
                <p>create an account and return to login to start communicating with users</p>
                <p style={{ color: error === 'Succes' ? 'green' : 'red' }}>{error}</p>
            </div>
            <div className={styles.Registerblock}>
                <h1>Create <br/> New account</h1>
                <input 
                    placeholder="Login"
                    onChange={(e) => setLogin(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
                <input 
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
                <input 
                    placeholder="Surname"
                    onChange={(e) => setSurname(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
                <input 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
                <input 
                    placeholder="Repeat Password"
                    onChange={(e) => setTryPassword(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />

                <button onClick={handleRegister}>Sign in</button>
            </div>
        </div>
    );
}

export default Register;