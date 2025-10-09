import React, { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

import { routesPath } from '@/shared/const/router';

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    const isRequiredRoles = useMemo(() => {
        if (!roles) return true;
        return userRoles?.some((userRole) => roles.includes(userRole));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={routesPath.main} state={{ from: location }} replace />;
    }

    if (!isRequiredRoles) {
        return <Navigate to={routesPath.forbidden} state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
