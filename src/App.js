import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './api/api';
import ChatPage from './container/ChatPage/ChatPage';
import Login from './container/Login/Login';


function App() {
  const [counter,setCounter] = useState(0)
  const [userData,setUserData] = useState(null);
  const [dialogsData,setDialogsData] = useState(null);
  const [authUser,setAuthUser] = useState(null);
  const [authUserDialogs,setauthUserDialogs] = useState();

  const fetchUsers = () => {
    api.get('/users').then((res) => {
      setUserData(res.data)
    })
  }

  const fetchDialogs = () => {
    api.get('/dialogs').then((res) => {
      setDialogsData(res.data);
    })
  }

  const sendNewMessage = (id , newMessages) => {
   const dialog = dialogsData.find(dialog => dialog.id === id);

    if (dialog) {
      dialog.messages = newMessages;
      api.put(`/dialogs/${id}`, dialog).then((res) => {
        console.log(res);
        setDialogsData(prevDialogs => prevDialogs.map(d => d.id === id ? res.data : d));
      }).catch(error => {
        console.error("Eroare la actualizarea dialogului:",error);
      });
    }
  }

  useEffect(()=>{
    fetchUsers();
    fetchDialogs();

    setTimeout(()=>{    
      fetchUsers();
      fetchDialogs();
      setCounter(counter+1)
    },"15000")
  },[counter])
  
  useEffect(() => {
    if(authUser){
      const filtredDialogs = dialogsData.filter(dialog =>dialog.participants.includes(+authUser.id))
      setauthUserDialogs(filtredDialogs);
    }
  },[authUser,dialogsData])
  return(
    <div className="App">
          <BrowserRouter>
            <Routes>
            <Route path="/" element={authUser ? <ChatPage authUser={authUser} authUserDialogs={authUserDialogs} userData={userData} sendNewMessage={sendNewMessage} /> : <Login userData={userData} setAuthUser={setAuthUser} />} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
