import './styles/index.scss';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { NavBar } from '@/widgets/Navbar';
import { userActions, getUserInited } from '@/entities/User';
import { SideBar } from '@/widgets/SideBar';

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
