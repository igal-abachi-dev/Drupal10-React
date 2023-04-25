import {useEffect, useState} from 'react';
import styles from "../App.module.scss";


import {Helmet} from 'react-helmet-async';
import {Chip, Divider} from "@mui/material";
import {DrupalApi} from "../api/Drupal.api";
import {DrupalContent, nullable} from "../api/api.types";

export function Page2Page() {

    const [page, setPage] = useState<nullable<DrupalContent>>(null);
    const [posts, setPosts] = useState<DrupalContent[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = new DrupalApi();
            const data = await api.GetPage(3);
            setPage(data);
            const data2 = await api.GetPosts(2);
            setPosts(data2);
        };
        fetchData().catch(console.error);
    }, []);

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
                {
                    posts.map(p => <div>
                        <Divider variant='middle'>
                            <Chip label={p?.title} color="secondary"/>
                        </Divider>
                        <div dangerouslySetInnerHTML={{__html: p?.body}}>

                        </div>
                    </div>)
                }

            </div>
        </header>
    );
}

export default Page2Page;
