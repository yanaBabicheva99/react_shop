import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const routeWithAuth = useCallback((item: AppRouteProps) => (
        <Route
            key={item.path}
            path={item.path}
            element={(
                <div className="page-wrapper">
                    {item.authOnly
                        ? <RequireAuth>{item.element}</RequireAuth>
                        : item.element}
                </div>
            )}
        />
    ), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(routeWithAuth)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
