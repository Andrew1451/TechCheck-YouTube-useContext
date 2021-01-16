import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = props => {
    return (
        <nav className={classes.NavBar}>
            <NavLink className={classes.Logo} to={'/'}>TechCheck</NavLink>
             <ul className={classes.NavigationList} onClick={props.clicked}>
                <li link='/' exact><NavLink to={'/'}>Home</NavLink></li>
                <li link='/profile' exact><NavLink to={'/profile'}>Profile</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar