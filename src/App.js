import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (curUser) => {
      if(curUser) {
        // user is logged in
        dispatch(login({
          email: curUser.email,
          uid: curUser.uid,
          displayName: curUser.displayName,
          photoURL: curUser.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

    {/* if no user, render login page */}
    {!user ? <Login /> : (
      <div className="app__body">
      <Sidebar />
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
    )}
        
    </div>
  );
}

export default App;
