import React from 'react';
import './Header.css';

const Header = () => {
  console.log(' re-rendered Header');
  return <div className='header'>Header</div>;
};

export default React.memo(Header);
