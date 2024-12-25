import React from 'react';
//images
import Logo from '../assets/Alankrit-removebg-preview.png';

const Header = () => {
  return <header className="px-2 translate-y-5 mb-0">
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
          {/*logo*/}
          <a href='#'>
            <img className='h-36' src={Logo} alt=''/>
          </a>
          {/*button*/}
          <button className='btn btn-sn'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
