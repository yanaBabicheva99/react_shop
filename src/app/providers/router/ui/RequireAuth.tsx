import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { routesPath } from 'shared/config/routerConfig/routerConfig';

export function RequireAuth({ children }: { children: ReactNode }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={routesPath.main} state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
