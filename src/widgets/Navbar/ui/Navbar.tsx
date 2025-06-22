import cls from './Navbar.module.scss';
import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {NavLink} from "shared/ui/NavLink/NavLink";
import {useTranslation} from "react-i18next";

export const Navbar = () => {
    const {t} = useTranslation();

  return (
   <div className={classNames(cls.Navbar, {})}>
       <div className={cls.links}>
           <NavLink to='/' className={cls.mainLink}>{t("Главная")}</NavLink>
           <NavLink to='/about'>{t("О нас")}</NavLink>
       </div>
   </div>
  );
};
