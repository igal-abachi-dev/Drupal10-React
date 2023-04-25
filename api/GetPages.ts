import fetch from 'node-fetch';

import type {VercelRequest, VercelResponse} from '@vercel/node';

export default async (request: VercelRequest, response: VercelResponse) => {
    let {} = request.query;
    const url = "https://dev-test-dr-10.pantheonsite.io/api" + "/pages";

    try {
        console.log('GET: ', url);
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'en-US,en;q=0.9'
            },
        });

        const data = await res.json();
        response.setHeader('Cache-Control', 's-maxage=30');
        return response.status(200).json(data);
    } catch (e) {
        console.error('GET: ', e);
        return response.status(500).send("error");
    }
};
