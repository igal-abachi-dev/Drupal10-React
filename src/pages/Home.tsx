import styles from "../App.module.scss";

import {Chip, Divider} from '@mui/material';
import {Helmet} from 'react-helmet-async';


export function HomePage() {
    return (
        <header className={styles.App_header}>
            <Helmet>
                <title>home</title>
            </Helmet>
            <div>
                <Divider variant='middle'>
                    <Chip label="blog" color="primary"/>
                </Divider>
                <div>
                    tester
                </div>
            </div>
        </header>
    );
}

export default HomePage;
