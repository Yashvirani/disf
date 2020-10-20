import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { selectUser } from "./features/userSlice";
import { useSelector } from 'react-redux';


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
        <h2>You need to Login!</h2>
      )}
   
    </div>
  );
}

export default App;
