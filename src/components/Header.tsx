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
                        <a rel="noopener noreferrer" href="https://github.com/ramiroAlvarez9" target="_blank" style={linkStyle.styles}>
                            <Icon icon="mdi:github" width="20" height="20" className='header__iconContainer--icon' />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/ramiro-alvarez-80a432128/" target="_blank" style={linkStyle.styles} >
                            <Icon icon="mdi:linkedin" width="20" height="20" className='header__iconContainer--icon' />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.instagram.com/ramiro.alvarez21/" target="_blank" style={linkStyle.styles}>
                            <Icon icon="mdi:instagram" width="20" height="20" className='header__iconContainer--icon' />
                        </a>
                        <a rel="noopener noreferrer" href="https://www.canva.com/design/DADPqfH2fKs/bOyF2tJHhesPLmsBNOYs3A/view?utm_content=DADPqfH2fKs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" >
                            <Icon icon="mdi:resume" color="#fafafa" width="20" height="20" className='header__iconContainer--icon' />
                        </a>
                    </div>
                </BrowserRouter>
            </header>


        </>
    );
}

export default Header;

