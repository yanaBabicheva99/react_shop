import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from '../ui/RequireAuth';
import { routerConfig } from '../config/routerConfig';
import { AppRouteProps } from '@/shared/types/router';

const AppRouter = memo(() => {
    const routeWithAuth = useCallback(
        (item: AppRouteProps) => (
            <Route
                key={item.path}
                path={item.path}
                element={item.authOnly ? <RequireAuth roles={item.roles}>{item.element}</RequireAuth> : item.element}
            />
        ),
        [],
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routerConfig).map(routeWithAuth)}</Routes>
        </Suspense>
    );
});

export default AppRouter;
