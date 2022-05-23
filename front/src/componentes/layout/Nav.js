import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/componentes/layout/Nav.css'
const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/rugby">Rugby</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/basquet">Basquet</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/consultas">Consultas</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;