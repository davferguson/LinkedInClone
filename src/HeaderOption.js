import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

function HeaderOption({ User, Icon, title }) {
  return (
    <div className='headerOption'>
        {/* if Icon is passed in as a prop */}
        {Icon && <Icon className='headerOption__icon' />}
        {User && <Avatar className='headerOption__icon' src={User.photoURL}>{User.displayName[0].toUpperCase()}</Avatar>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption