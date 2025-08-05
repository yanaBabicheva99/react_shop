import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = memo(() => {
    const routeWithAuth = useCallback((item: AppRouteProps) => (
        <Route
            key={item.path}
            path={item.path}
            element={item.authOnly
                ? <RequireAuth>{item.element}</RequireAuth>
                : item.element}

        />
    ), []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(routeWithAuth)}
            </Routes>
        </Suspense>
    );
});

export default AppRouter;
