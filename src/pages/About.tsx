import  {useEffect, useState} from 'react';
import styles from "../App.module.scss";


import {Helmet} from 'react-helmet-async';
import {Chip, Divider} from "@mui/material";
import {DrupalApi} from "../api/Drupal.api";
import {DrupalContent, nullable} from "../api/api.types";

export function AboutPage() {

    const [page, setPage] = useState<nullable<DrupalContent>>(null);

    useEffect(()=>{
        //let isSubscribed = true;

        const fetchData = async () => {
            const api = new DrupalApi();
            const data = await api.GetPage(1);

          //  if (isSubscribed) {
                setPage(data);
           // }
        };

        fetchData().catch(console.error);

        return () => {
           // isSubscribed = false
        };
    },[]);

    return (
        <header className={styles.App_header}>
            <Helmet>
                <title>about</title>
            </Helmet>
            <div>
                <Divider variant='middle'>
                    <Chip label={page?.title} color="primary"/>
                </Divider>

                <div dangerouslySetInnerHTML={{__html: page?.body}}>

                </div>
            </div>
        </header>
    );
}

export default AboutPage;
