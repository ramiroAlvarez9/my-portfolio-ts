import React from 'react';
import { Icon } from '@iconify/react';
import './menu.scss';

const Menu = () => {

    //MI pagimenu__containerna va a tener: Inicio -  Proyectos - Tecnologias - Blog -  Contacto -  

    return (
        <>
            <div className="menu__container">
                <div className="elementsContainer">
            
                    <div className='elementsContainer__container ' >
                        <Icon icon="material-symbols:home" className='elementsContainer__container--icon' width="30" height="30" />
                        <h5 className='elementsContainer__container--title'> Inicio </h5>
                    </div>

                    <div className='elementsContainer__container'>
                        <Icon icon="ant-design:project-outlined" className='elementsContainer__container--icon' width="30" height="30" />
                        <h5 className='elementsContainer__container--title'> Proyectos </h5>
                    </div>
                    
                    <div className='elementsContainer__container'>
                        <Icon icon="grommet-icons:technology" className='elementsContainer__container--icon' width="30" height="30" />
                        <h5 className='elementsContainer__container--title'> Tecnologias </h5>
                    </div>

                    <div className='elementsContainer__container'>
                        <Icon icon="carbon:blog" className='elementsContainer__container--icon' width="30" height="30" />
                        <h5 className='elementsContainer__container--title'> Blog</h5>
                    </div>
            
                    <div className='elementsContainer__container'>
                        <Icon icon="material-symbols:contact-page-rounded" className='elementsContainer__container--icon' width="30" height="30" />
                        <h5 className='elementsContainer__container--title'> Contacto </h5>
                    </div>
                
                </div>
            
            </div>

        </>
    );
}

export default Menu;