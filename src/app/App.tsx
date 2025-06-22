import './styles/index.scss';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {SideBar} from "widgets/SideBar/ui";
import React, {Suspense} from "react";
import {useTranslation} from "react-i18next";

function MyComponent() {
    const { t, i18n } = useTranslation();

    return <h1>{t('Тестовый пример')}</h1>
}

const App = () => {
    return (
        <div className={`app`}>
            <Suspense fallback=''>
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;