import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL_PATH } from './static';

@Injectable()
export class BuildService {
    constructor(
        private http: Http
    ) { }

    // COMMON

    public reditribuitePopulation(username: string) {
        return this.http.get(GLOBAL_PATH + 'refactorPop.php?username=' + username);
    }

    // STD

    public getbuildLevel(username: string) {
        return this.http.get(GLOBAL_PATH + 'common/build-level.php?username=' + username);
    }

    public getMainBuildInfo(level: number) {
        return this.http.get(GLOBAL_PATH + 'common/build/main.php?level=' + level);
    }

    public getHomeBuildInfo(level: number) {
        return this.http.get(GLOBAL_PATH + 'common/build/home.php?level=' + level);
    }

    public getFoodBuildInfo(level: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/build/food.php?level=' + level + '&username=' + username);
    }

    public getWoodBuildInfo(level: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/build/wood.php?level=' + level + '&username=' + username);
    }

    public getStoneBuildInfo(level: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/build/stone.php?level=' + level + '&username=' + username);
    }

    public getOreBuildInfo(level: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/build/ore.php?level=' + level + '&username=' + username);
    }

    public getIronBuildInfo(level: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/build/iron.php?level=' + level + '&username=' + username);
    }

    // UPDATE

    public isSomethingUpdating(username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/check.php?username=' + username);
    }

    public updateHome(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/update-home.php?workers=' + people + '&username=' + username);
    }

    public updateFood(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/update-food.php?workers=' + people + '&username=' + username);
    }

    public updateWood(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/update-wood.php?workers=' + people + '&username=' + username);
    }

    public updateStone(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/update-stone.php?workers=' + people + '&username=' + username);
    }

    public updateOre(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/update-ore.php?workers=' + people + '&username=' + username);
    }

    public updateIron(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/update-iron.php?workers=' + people + '&username=' + username);
    }

    // UPDATE WORKERS

    public updateFoodWokers(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/work/update-food-workers.php?workers=' + people + '&username=' + username);
    }

    public updateWoodWokers(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/work/update-wood-workers.php?workers=' + people + '&username=' + username);
    }

    public updateStoneWokers(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/work/update-stone-workers.php?workers=' + people + '&username=' + username);
    }

    public updateOreWokers(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/work/update-ore-workers.php?workers=' + people + '&username=' + username);
    }

    public updateIronWokers(people: number, username: string) {
        return this.http.get(GLOBAL_PATH + 'common/update/work/update-iron-workers.php?workers=' + people + '&username=' + username);
    }
}
