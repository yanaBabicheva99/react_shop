import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss';
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";
import {AboutPageAsync} from "./pages/aboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/mainPage/MainPage.async";
import ThemeProvider from "./theme/ThemeProvider";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const { toggleTheme } = useTheme();
    return (
        <div className={`app`}>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;