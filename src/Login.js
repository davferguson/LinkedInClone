import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => {
        if(!name) {
            return alert("Please enter a full name!")
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(
                        login({
                            email: userCredential.user.email,
                            uid: userCredential.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        })
                    );
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

  return (
    <div className='login'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png' alt='' />
        <form>
            <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type='text' />

            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />

            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>
            Not a member?{" "}
            <span className="login__register" onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login