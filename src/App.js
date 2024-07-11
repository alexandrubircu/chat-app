import React, { useState, useEffect } from 'react';
import './App.css';
import ChatPage from './container/ChatPage/ChatPage';
import Login from './container/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './api/api';

function App() {
  const [users,setUsers] = useState(null)
  const [authUser, setAuthUser] = useState(null); 
  const [dialogs, setDialogs] = useState([]); 
  const [redirectToChat, setRedirectToChat] = useState(false); 

  useEffect(() => {
    if (authUser) {
      fetchDialogs(authUser.id);
      setRedirectToChat(true);
    }
  }, [authUser]);

  const handleLogin = (login, password) => {
    api.get('/users')
      .then(res => {
        const allUsers = res.data;
        const foundUser = allUsers.find(user => user.login === login && user.password === password);
        
        if (foundUser) {
          const filteredUsers = allUsers.filter(user => user.id !== foundUser.id);
          setUsers(filteredUsers);
          setAuthUser(foundUser);
        } else {
          alert("User not found or invalid credentials");
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const fetchDialogs = (userId) => {
    api.get('/dialogs')
      .then(res => {
        const userDialogs = res.data.filter(dialog =>
          dialog.participants.includes(userId)
        );
        setDialogs(userDialogs);
      })
      .catch(error => {
        console.error('Error fetching dialogs:', error);
      });
  };

  // console.log(users)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <ChatPage users={users} authUser={authUser} dialogs={dialogs} /> : <Login handleLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
