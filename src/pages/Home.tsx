
import styles from "../App.module.scss";

import {Chip, Divider} from '@mui/material';
import {Helmet} from 'react-helmet-async';


export function HomePage() {
    return (
        <header className={styles.App_header}>
            <Helmet>
                <title>home</title>
            </Helmet>
            {/*<img src={logo} className={styles.App_logo} alt="logo"/>*/}
            <p>Hello Vite + React + Drupal 10 !</p>

            <div>
                <Divider variant='middle'>
                    <Chip label="Drupal 10 blog" color="primary"/>
                </Divider>
                <div>
tester
                </div>
            </div>
        </header>
    );
}

export default HomePage;
