import React from 'react';
import "../Style/Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton  from '@mui/material/IconButton';
import Tooltip  from '@mui/material/Tooltip';

function Header() {
  return <div className='header'>
    <Tooltip title="Profile">
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>
    </Tooltip>
    
  </div>;

}

export default Header;