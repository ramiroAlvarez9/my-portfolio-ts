import './header.scss'
import { Icon } from '@iconify/react';
import { BrowserRouter } from 'react-router-dom';

const Header = () => {

    const linkStyle = {
        styles: {
            textDecoration: 'none'
        },
    } as const;

    return (
        <>
            <header className="header">

                <span className="header__title">
                    Ramiro Alejandro Alvarez
                </span>
                <BrowserRouter>
                    <div className='header__iconContainer'>
                        <a href="https://github.com/ramiroAlvarez9" target="_blank" style={linkStyle.styles}>
                            <Icon icon="mdi:github" width="20" height="20" className='header__iconContainer--icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/ramiro-alvarez-80a432128/" target="_blank" style={linkStyle.styles} >
                            <Icon icon="mdi:linkedin" width="20" height="20" className='header__iconContainer--icon' />
                        </a>
                        <a href="https://www.instagram.com/ramiro.alvarez21/" target="_blank" style={linkStyle.styles}>
                            <Icon icon="mdi:instagram" width="20" height="20" className='header__iconContainer--icon' />
                        </a>

                        <Icon icon="mdi:resume" color="#fafafa" width="20" height="20" className='header__iconContainer--icon' />

                    </div>
                </BrowserRouter>
            </header>


        </>
    );
}

export default Header;

