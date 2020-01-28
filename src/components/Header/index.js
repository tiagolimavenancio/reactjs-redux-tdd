import React from 'react';
import Logo from '../../assets/logo.png'
import './styles.scss';

export default function Header(props) {
  return (
    <header data-test='headerComponent'>
        <div className='wrap'>
            <div className='logo'>
                <img data-test='logoIMG' src={Logo} alt='Logo' />
            </div>
        </div>
    </header>    
  );
}

