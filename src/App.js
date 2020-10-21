import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { selectUser } from "./features/userSlice";
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';


function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
            <>
           <Sidebar />  
           <Chat />
           </>
      ):(
        <Login />
      )}
   
    </div>
  );
}

export default App;
