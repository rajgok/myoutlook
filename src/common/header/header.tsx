import React from 'react';
import { Nav, NavLink } from 'reactstrap';

export const Header = () => {
    return (
        <Nav>
            <NavLink href="#" >ABOUT ME</NavLink>
            <NavLink href="#" >ARTICLES</NavLink>
            <NavLink href="#" >CONTACT ME</NavLink>
        </Nav>
    );
}