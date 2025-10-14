import React, { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

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
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!isRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
