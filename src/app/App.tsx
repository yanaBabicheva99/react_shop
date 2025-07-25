import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar/ui';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited';

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
