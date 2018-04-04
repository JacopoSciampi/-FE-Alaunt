import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { CreateAccountFormModel } from '../../../init/create-account/create-account.models';

@Injectable()
export class NewAccountService {

    constructor(
        private http: Http
    ) { }

    public createNewUser(user: CreateAccountFormModel) {
        return this.http.get(
            'http://localhost:800/Alaunt/new-account/script.php?username=' + user.username +
            '&password=' + user.password + '&email=' + user.email
        );
    }
}
