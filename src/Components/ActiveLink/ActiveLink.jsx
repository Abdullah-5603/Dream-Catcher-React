import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink exact to={to} activeClassName="active" className="link">{children}</NavLink>
    );
};

export default ActiveLink;
