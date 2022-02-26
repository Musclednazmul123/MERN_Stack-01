import React from 'react';
import "../Style/Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton  from '@mui/material/IconButton';
import Tooltip  from '@mui/material/Tooltip';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return <div className='header'>
    <Tooltip title="Profile">
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
    </Tooltip>

    <Tooltip title="Logo">
      <IconButton>
        <img 
        className='header__logo'
        src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
        alt='Tinder-logo'
        />
      </IconButton>

    </Tooltip>
    <Tooltip title="Profile">
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </Tooltip>
    
  </div>;

}

export default Header;