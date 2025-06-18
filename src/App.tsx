import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/global.scss';
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";

const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
           <Routes>
               <Route path={'/about'} element={<AboutPage />} />
               <Route path={'/'} element={<MainPage />} />
           </Routes>
        </div>
    );
};

export default App;