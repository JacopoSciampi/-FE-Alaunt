import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GLOBAL_PATH } from './static';

@Injectable()
export class NavbarService {

    constructor(
        private http: Http
    ) { }

    public getResources(username: string) {
        return this.http.get(GLOBAL_PATH + 'resources/get-resources.php?username=' + username);
    }

    public updateResources(username: string): void {
        this.http.get(GLOBAL_PATH + 'updateResources.php?username=' + username);
    }

}
