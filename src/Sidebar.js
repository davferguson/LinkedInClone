import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    const user = useSelector(selectUser);

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src='https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            <Avatar src={user.photoURL} className='sidebar__avatar'>{user.displayName[0].toUpperCase()}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">1,240</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">48</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("vuejs")}
            {recentItem("springboot")}
            {recentItem("software")}
            {recentItem("dynamic")}
        </div>
    </div>
  )
}

export default Sidebar