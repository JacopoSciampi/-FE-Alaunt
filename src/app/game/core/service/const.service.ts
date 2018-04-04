import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstService {

    constructor(
        private http: Http
    ) { }

    public getGameConstant(userID: number) {
        return this.http.get(
            'http://localhost/Alaunt/gameConstant.php?userID=' + userID
        );
    }

}


/* HOW TO CATCH THE SUBSCRIPTION
    .subscribe((res: any) => {
        const data = JSON.parse(res._body) as BELoginResponce;
    });
*/
