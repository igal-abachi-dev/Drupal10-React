import React, {useEffect} from 'react';
import {Chip, Divider, ScopedCssBaseline} from '@mui/material';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import styles from "./App.module.scss";

export function Layout() {
    return (
        <Router>
            <div className={styles.App}>
                <ScopedCssBaseline>
                    <Routes>
                        <Route path='/page1' element={<HomePage/>}/>
                        <Route path='/page2' element={<HomePage/>}/>
                        <Route path='/About' element={<AboutPage/>}/>
                        <Route path='/' element={<HomePage/>}/>
                    </Routes>

                </ScopedCssBaseline>
            </div>
            </Router>);
}

export default Layout;
