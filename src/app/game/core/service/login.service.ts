import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { LoginAccountDataModel } from '../../../init/login/login-account.models';

@Injectable()
export class LoginService {

    constructor(
        private http: Http
    ) { }

    public executeLogin(user: LoginAccountDataModel) {
        return this.http.get(
            'http://localhost:800/Alaunt/login/script.php?username=' + user.username +
            '&password=' + user.password
        );
    }

}
