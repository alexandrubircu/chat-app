import React, { useState } from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const Login = (props) => {
    const [login, setLogin] = useState('user1');
    const [password, setPassword] = useState('1233214');

    const handleSignIn = () =>{
        const foundUser = props.userData.find( user => user.login === login && user.password === password);
        props.setAuthUser(foundUser);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSignIn();
        }
    };
    
    return (
        <div className={styles.Login}>
            <div className={styles.loginblock}>
                <h1>Sign in</h1>
                <input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Login"
                    onKeyDown={handleKeyDown} 
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    onKeyDown={handleKeyDown} 
                />
                <div className={styles.buttonblock}>
                    <div className={styles.actionblock}>
                        <Link to="/register">Registration</Link>
                        <div className={styles.checkbox}>
                            <input type="checkbox"/>
                            <p>Remember me</p>
                        </div>
                    </div>
                    <button disabled={!login || !password} onClick={handleSignIn}>Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
