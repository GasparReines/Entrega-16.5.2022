import React from 'react';
import logo from './logo.jpg';
import '../../styles/componentes/layout/Header.css';
const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <div className='logo'>
                    <img src={logo} width="75" alt="logo"/>
                    <p>Deportes Populares</p>
                </div>
            </div>
        </header>
    );
}
export default Header;