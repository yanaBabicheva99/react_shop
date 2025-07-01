import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

export const NavBar = () => (
    <div className={classNames(cls.Navbar, {})} />
);
