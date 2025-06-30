import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar/ui';
import React, { Suspense } from 'react';

const App = () => (
    <div className="app">
        <Suspense fallback="">
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
