import React from 'react';
import './header.scss'
import { Icon } from '@iconify/react';


const Header = () => {
    return (
        <>
            <header className="header">

                <span className="header__title">
                    Ramiro Alejandro Alvarez
                </span>
                <div className='header__iconContainer'>
                    <Icon icon="mdi:github"    width="20" height="20" className='header__iconContainer--icon'/>
                    <Icon icon="mdi:linkedin"  width="20" height="20" className='header__iconContainer--icon'/>
                    <Icon icon="mdi:instagram" width="20" height="20" className='header__iconContainer--icon'/>
                    <Icon icon="mdi:resume" color="#fafafa" width="20" height="20" className='header__iconContainer--icon'/>
                </div>
            </header>


        </>
    );
}

export default Header;

