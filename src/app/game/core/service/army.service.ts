import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL_PATH } from './static';

@Injectable()
export class ArmyService {
    constructor(
        private http: Http
    ) { }

    public getAccademyInfo(level: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/army/accademy.php?level=' + level + '&username=' + username);
    }

    public getMainLevel(username: string) {
        return this.http.get(GLOBAL_PATH + 'common/army/mainLevel.php?username=' + username);
    }

}
