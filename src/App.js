import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './api/api';
import ChatPage from './container/ChatPage/ChatPage';
import Login from './container/Login/Login';

function App() {
  const [counter, setCounter] = useState(0);
  const [userData, setUserData] = useState(null);
  const [dialogsData, setDialogsData] = useState([]);
  const [authUser, setAuthUser] = useState(null);
  const [authUserDialogs, setAuthUserDialogs] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/users');
      setUserData(res.data);
    } catch (error) {
      console.error("Eroare la preluarea utilizatorilor:", error);
    }
  }

  const fetchDialogs = async () => {
    try {
      const res = await api.get('/dialogs');
      setDialogsData(res.data);
    } catch (error) {
      console.error("Eroare la preluarea dialogurilor:", error);
    }
  }

  const sendNewMessage = async (id, newMessages) => {
    const dialog = dialogsData.find(dialog => dialog.id === id);

    if (dialog) {
      dialog.messages = newMessages;
      try {
        const res = await api.put(`/dialogs/${id}`, dialog);
        setDialogsData(prevDialogs => prevDialogs.map(d => d.id === id ? res.data : d));
      } catch (error) {
        console.error("Eroare la actualizarea dialogului:", error);
      }
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchDialogs();

    const interval = setInterval(() => {
      fetchUsers();
      fetchDialogs();
      setCounter(prevCounter => prevCounter + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (authUser && dialogsData.length > 0) {
      const filteredDialogs = dialogsData.filter(dialog => dialog.participants.includes(+authUser.id));
      setAuthUserDialogs(filteredDialogs);
    }
  }, [authUser, dialogsData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ?
            <ChatPage 
              authUser={authUser} 
              authUserDialogs={authUserDialogs} 
              userData={userData} 
              sendNewMessage={sendNewMessage} 
            /> :
            <Login 
              userData={userData} 
              setAuthUser={setAuthUser} 
            />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
