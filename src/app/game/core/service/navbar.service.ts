import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

    constructor(
        private http: Http
    ) { }

    public getResources(username: string) {
        return this.http.get('http://localhost:800/Alaunt/resources/get-resources.php?username=' + username);
    }

}
