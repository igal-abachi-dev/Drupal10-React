import {DrupalContent, DrupalContentDTO} from './api.types';
import {HttpClient, IHttpApiClient} from "./http";


/*
https://dev-test-dr-10.pantheonsite.io/api/pages

https://dev-test-dr-10.pantheonsite.io/api/posts/page1

https://dev-test-dr-10.pantheonsite.io/api/posts/page2
*/

export class DrupalApi {
    private _client: IHttpApiClient;

    constructor() {
//        this._client = new HttpClient(import.meta.env.VITE_API_SERVER); //"https://dev-test-dr-10.pantheonsite.io/api"

        this._client = new HttpClient(import.meta.env.VITE_Client_API);
    }

    async GetPages(): Promise<DrupalContent[]> {
        //const res = await this._client.get<DrupalContentDTO[]>("/pages");
        const res = await this._client.get<DrupalContentDTO[]>("GetPages/");
        return res.map(p => new DrupalContent(p));
    }

    async GetPage(nid: number): Promise<DrupalContent> {
        //const res = await this._client.get<DrupalContentDTO[]>("/pages/" + nid);
        const res = await this._client.get<DrupalContentDTO[]>("GetPageById/?nid=" + nid);
        return new DrupalContent(res[0]);
    }

    async GetPosts(page: number): Promise<DrupalContent[]> {
        //const res = await this._client.get<DrupalContentDTO[]>("/posts/page" + page);
        const res = await this._client.get<DrupalContentDTO[]>("GetPostsByPage/?page=" + page);
        return res.map(p => new DrupalContent(p));
    }
}
