import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { GLOBAL_PATH } from './static';

@Injectable()
export class HomeService {
    constructor(
        private http: Http
    ) { }

    public getRiepilogo(username: string) {
        return this.http.get(GLOBAL_PATH + 'resources/home.php?username=' + username);
    }

}
