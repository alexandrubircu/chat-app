import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { api } from './api/api';
import ChatPage from './container/ChatPage/ChatPage';
import Login from './container/Login/Login';


function App() {
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

  useEffect(()=>{
    fetchUsers();
    fetchDialogs();
  },[])

  useEffect(() => {
    if(authUser){
      const filtredDialogs = dialogsData.filter(dialog =>dialog.participants.includes(+authUser.id))
      setauthUserDialogs(filtredDialogs);
    }
  },[authUser])

  return(
    <div className="App">
          <BrowserRouter>
            <Routes>
            <Route path="/" element={authUser ? <ChatPage authUser={authUser} authUserDialogs={authUserDialogs} userData={userData} /> : <Login userData={userData} setAuthUser={setAuthUser} />} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import ChatPage from './container/ChatPage/ChatPage';
// import Login from './container/Login/Login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { api } from './api/api';

// function App() {
//   const [users,setUsers] = useState(null)
//   const [authUser, setAuthUser] = useState(null); 
//   const [dialogs, setDialogs] = useState([]); 
//   const [redirectToChat, setRedirectToChat] = useState(false); 

//   useEffect(() => {
//     if (authUser) {
//       fetchDialogs(authUser.id);
//       setRedirectToChat(true);
//     }
//   }, [authUser]);


//   const handleLogin = (login, password) => {
//     api.get('/users')
//       .then(res => {
//         const allUsers = res.data;
//         const foundUser = allUsers.find(user => user.login === login && user.password === password);
        
//         if (foundUser) {
//           const filteredUsers = allUsers.filter(user => user.id !== foundUser.id);
//           setUsers(filteredUsers);
//           setAuthUser(foundUser);
//         } else {
//           alert("User not found or invalid credentials");
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   };




//   const fetchDialogs = (userId) => 
//     api.get('/dialogs')
//       .then(res => {
//         const userDialogs = res.data.filter(dialog =>
//           dialog.participants.includes(userId)
//         );
//         setDialogs(userDialogs);
//       })
//       .catch(error => {
//         console.error('Error fetching dialogs:', error);
//       });
//   };
  

  
  
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={authUser ? <ChatPage users={users} authUser={authUser} dialogs={dialogs} /> : <Login handleLogin={handleLogin} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
