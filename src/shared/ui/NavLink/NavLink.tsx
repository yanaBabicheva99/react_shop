import cls from './NavLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import {NavLink as Link, NavLinkProps as NavLinkRouter} from "react-router-dom";

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface NavLinkProps extends NavLinkRouter {
    className?: string;
    theme?: LinkTheme;
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const {
      children,
      className,
      theme = LinkTheme.PRIMARY,
      to,
      ...otherProps
  } = props;

  return (
   <Link
       to={to}
       className={classNames(cls.NavLink, {}, [className, cls[theme]])}
       {...otherProps}
   >
       {children}
   </Link>
  );
};
