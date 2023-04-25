
import {ScopedCssBaseline} from '@mui/material';

import {
    BrowserRouter as Router,
    Routes,
    Route,
   // Link
} from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import styles from "./App.module.scss";
import Page1Page from "./pages/Page1";
import Page2Page from "./pages/Page2";

export function Layout() {
    return (
        <Router>
            <div className={styles.App}>
                <ScopedCssBaseline>
                    <Routes>
                        <Route path='/page1' element={<Page1Page/>}/>
                        <Route path='/page2' element={<Page2Page/>}/>
                        <Route path='/About' element={<AboutPage/>}/>
                        <Route path='/' element={<HomePage/>}/>
                    </Routes>

                </ScopedCssBaseline>
            </div>
            </Router>);
}

export default Layout;
