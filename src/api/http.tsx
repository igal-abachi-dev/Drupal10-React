//import {nullable} from './api.types';
//import React, {useEffect, useState} from 'react';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
//import _ from 'lodash';
//import fetchAdapter from "@vespaiach/axios-fetch-adapter";

export interface IHttpApiClient {

    get<T>(url: string, queryString: any): Promise<T>;

    get<T>(url: string): Promise<T>;

    get<T>(): Promise<T>;
}


export class HttpClient implements IHttpApiClient {
    constructor(baseApiUrl: string = '') {
        this.baseApiUrl = baseApiUrl;
        this.axClient = axios.create();//  ky / ky-universal / Wretch / bent
//fetch polyfill: https://github.com/developit/unfetch , /  isomorphic-unfetch

        if (baseApiUrl != null && baseApiUrl.length > 0)
            this.axClient.defaults.baseURL = this.baseApiUrl;

        this.axClient.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
        this.axClient.defaults.headers.common['Accept'] = 'application/json, text/plain, */*';
        this.axClient.defaults.timeout = 20 * 1000;
//        this.axClient.defaults.adapter = fetchAdapter;
        this.axClient.defaults.withCredentials = false;


        this.axClient.interceptors.response.use(function (res:AxiosResponse) {
            return res;
        }, (err) => {

            if (err != null) {
                if (err.response != null) {
                    const errCode = err.response.status;
                    if (errCode == 401) {
                        console.log(401, 'UnAuthorized!');
                    } else if (errCode == 403) {
                        console.log(403, 'Forbidden!');
                    } else if (errCode == 407) {
                        console.log(407, 'Proxy Authentication Required!');
                    } else if (errCode == 402) {
                        console.log(402, 'Payment Required!');//reserved for future use in browsers
                    }
                    //404 Not Found
                    //405 Method Not Allowed
                } else {
                    console.log(err);
                }
            }
            return Promise.reject(err);
        });

    }

    private readonly baseApiUrl: string;
    private readonly axClient: AxiosInstance;

    async get<T>(url: string = '', queryString: any = null): Promise<T> {
        if (this.axClient == null) {
            // @ts-ignore
            return Promise.resolve(null);
        }
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

        return await this.axClient.get(`${url}${qry}`)
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
