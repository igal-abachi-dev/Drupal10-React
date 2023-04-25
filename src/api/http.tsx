//import {nullable} from './api.types';
//import React, {useEffect, useState} from 'react';
//import axios, {AxiosInstance, AxiosResponse} from 'axios';
//import _ from 'lodash';
//import fetchAdapter from "@vespaiach/axios-fetch-adapter";

import ky from "ky";

export interface IHttpApiClient {

    get<T>(url: string, queryString: any): Promise<T>;

    get<T>(url: string): Promise<T>;

    get<T>(): Promise<T>;
}


export class HttpClient implements IHttpApiClient {
    constructor(baseApiUrl: string = '') {
        this.baseApiUrl = baseApiUrl;

    }

    private readonly baseApiUrl: string;

    async get<T>(url: string = '', queryString: any = null): Promise<T> {
        let qry: string = '';
        if (queryString != null) {
            const str = queryString as string;
            if (str != null && str.length > 0) {
//              const prefixed = qs.parse('?a=b&c=d', { ignoreQueryPrefix: true });
                qry = '?' + queryString;
            } else {
                qry = '?' + new URLSearchParams(queryString).toString();
            }
        }

        return await ky.get(`${url}${qry}`, {prefixUrl: this.baseApiUrl}).json()
            .then(res => {
                console.log('GET: ', url, res.data);
                return res;
            })
            .then(res => res.data as T)
            .catch(err => {
                console.error('GET: ', url, err);
                return err;
            });
    }
}
