import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { selectUser } from "./features/userSlice";
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { auth } from './components/firebase/firebase';
import {login,logout} from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('User is',authUser);
      if (authUser) {
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }
      else {
        dispatch(logout());
      }
    });
  },[dispatch]);
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
