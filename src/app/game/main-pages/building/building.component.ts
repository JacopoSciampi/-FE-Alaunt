import { Component, OnInit, ViewChild } from '@angular/core';
import { BuildService } from '../../core/service/build.service';
import { GuardService } from '../../core/service/auth.guard';
import { BackEndBuildResponce } from '../../core/const/building.const';
import { ModelSingleBuild, HomeBuildModel, MainBuildModel, StandardBuildModel, IsUpdatingBEModel, FoodBuildModel } from './building.model';
import { Observable } from 'rxjs/Observable';
import { SingleBuildComponent } from '../../core/component/single-build/single-build.component';

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
    public level: BackEndBuildResponce;
    public model: ModelSingleBuild[] = [];
    public cost: StandardBuildModel[] = [];

    public isLoading = true;
    public isSomethingUpdating = false;

    constructor(
        private guard: GuardService,
        private service: BuildService,
    ) { }

    ngOnInit() {
        this.guard.currentUser = 'jeko';

        Observable.zip(
            this.service.getbuildLevel(this.guard.currentUser),
            this.service.isSomethingUpdating(this.guard.currentUser)
        )
            .subscribe(([buildLevel, somethingUpdate]: [any, any]) => {
                const data = JSON.parse(buildLevel._body) as BackEndBuildResponce;
                const isUpdating = JSON.parse(somethingUpdate._body) as IsUpdatingBEModel;

                if (!!data && data.status) {
                    this.level = data;
                    this.getInfoUpdate(isUpdating);
                }
            });
    }

    public getInfoUpdate(isUpdating: IsUpdatingBEModel): void {
        Observable.zip(
            this.service.getHomeBuildInfo(this.level.lvHome),
            this.service.getMainBuildInfo(this.level.lvMain),
            this.service.getFoodBuildInfo(this.level.lvFood, this.guard.currentUser),
            this.service.getWoodBuildInfo(this.level.lvWood, this.guard.currentUser),
            this.service.getStoneBuildInfo(this.level.lvStone, this.guard.currentUser),
            this.service.getOreBuildInfo(this.level.lvOre, this.guard.currentUser),
            this.service.getIronBuildInfo(this.level.lvIron, this.guard.currentUser),
        )
            .subscribe(([rHome, rMain, rFood, rWood, rStone, rOre, rIron]: [any, any, any, any, any, any, any]) => {
                const homeData = JSON.parse(rHome._body) as HomeBuildModel;
                const mainData = JSON.parse(rMain._body) as MainBuildModel;
                const foodData = JSON.parse(rFood._body) as FoodBuildModel;
                const woodData = JSON.parse(rWood._body) as FoodBuildModel;
                const stoneData = JSON.parse(rStone._body) as FoodBuildModel;
                const oreData = JSON.parse(rOre._body) as FoodBuildModel;
                const ironData = JSON.parse(rIron._body) as FoodBuildModel;

                if (homeData.status && mainData.status) {
                    this.cost.push(homeData);
                    this.cost.push(mainData);
                    this.cost.push(foodData);
                    this.cost.push(woodData);
                    this.cost.push(stoneData);
                    this.cost.push(oreData);
                    this.cost.push(ironData);

                    this.createModel();
                    if (isUpdating.isValid && isUpdating.message === 'yes') {
                        this.isSomethingUpdating = true;
                        switch (isUpdating.name) {
                            case 'b_home':
                                this.model[0].isUpdate = true;
                                this.model[0].timeStart = isUpdating.timeStart;
                                this.model[0].timeEnd = isUpdating.timeEnd;
                                this.model[0].timeTotal = isUpdating.timeTotal;
                                break;

                            case 'b_main':
                                this.model[1].isUpdate = true;
                                this.model[2].timeStart = isUpdating.timeStart;
                                this.model[3].timeEnd = isUpdating.timeEnd;
                                this.model[4].timeTotal = isUpdating.timeTotal;
                                break;

                            case 'b_food':
                                this.model[2].isUpdate = true;
                                this.model[2].timeStart = isUpdating.timeStart;
                                this.model[2].timeEnd = isUpdating.timeEnd;
                                this.model[2].timeTotal = isUpdating.timeTotal;
                                break;

                            case 'b_wood':
                                this.model[3].isUpdate = true;
                                this.model[3].timeStart = isUpdating.timeStart;
                                this.model[3].timeEnd = isUpdating.timeEnd;
                                this.model[3].timeTotal = isUpdating.timeTotal;
                                break;

                            case 'b_stone':
                                this.model[4].isUpdate = true;
                                this.model[4].timeStart = isUpdating.timeStart;
                                this.model[4].timeEnd = isUpdating.timeEnd;
                                this.model[4].timeTotal = isUpdating.timeTotal;
                                break;

                            case 'b_ore':
                                this.model[5].isUpdate = true;
                                this.model[5].timeStart = isUpdating.timeStart;
                                this.model[5].timeEnd = isUpdating.timeEnd;
                                this.model[5].timeTotal = isUpdating.timeTotal;
                                break;

                            case 'b_iron':
                                this.model[6].isUpdate = true;
                                this.model[6].timeStart = isUpdating.timeStart;
                                this.model[6].timeEnd = isUpdating.timeEnd;
                                this.model[6].timeTotal = isUpdating.timeTotal;
                                break;
                        }
                    }

                    this.isLoading = false;
                }
            });
    }

    public createModel(): void {
        this.model = [
            {
                level: this.level.lvHome,
                name: 'Residence',
                desc: `Your popolation lives in age-old trees that tower on great woods.
                Every residence houses a family of workers who take care of everyday
                village tasks.`,
                image: '/assets/images/building/home.png',
                woodCost: this.cost[0].woodCost,
                stoneCost: this.cost[0].stoneCost,
                points: this.cost[0].points,
                people: this.cost[0].people,
                timeToUpdate: this.cost[0].timeToUpdate,
                updateName: 'home'
            },
            {
                level: this.level.lvMain,
                name: 'Sacred Tree',
                desc: `This massive structure, build under your command, shows the rest
                of the world how much you have grown in this era, governed by superstition and
                magic. Your army can court on a great leader, and your notoriety reaches all across the
                whole continent.`,
                image: '/assets/images/building/main.png',
                woodCost: this.cost[1].woodCost,
                stoneCost: this.cost[1].stoneCost,
                ironCost: this.cost[1].ironCost,
                oreCost: this.cost[1].oreCost,
                points: this.cost[1].points,
                timeToUpdate: this.cost[1].timeToUpdate,
                updateName: 'main'
            },
            {
                level: this.level.lvFood,
                name: 'Fruit Orchard',
                desc: `Diet is composed mainly of fruit and cerealse with a little hunting
                thrown in once in a hwile for fresh meat. In every field you can grow many kinds of
                fruit, and you need workers to produce it.`,
                image: '/assets/images/building/food.png',
                woodCost: this.cost[2].woodCost,
                stoneCost: this.cost[2].stoneCost,
                points: this.cost[2].points,
                people: this.cost[2].people,
                timeToUpdate: this.cost[2].timeToUpdate,
                updateName: 'food',
                isProduction: true,
                productionMinute: this.cost[2].production,
                currentProduction: this.cost[2].currentProduction,
                atWork: this.cost[2].atWork
            },
            {
                level: this.level.lvWood,
                name: 'Enchanted Wood',
                desc: `Lumber rapresents the first and basic material to build your new Reign.
                In the Enchanted Wood, your workers gathers and chops lumber. It's an essential
                material for almost everything.`,
                image: '/assets/images/building/wood.png',
                woodCost: this.cost[3].woodCost,
                stoneCost: this.cost[3].stoneCost,
                points: this.cost[3].points,
                people: this.cost[3].people,
                timeToUpdate: this.cost[3].timeToUpdate,
                updateName: 'wood',
                isProduction: true,
                productionMinute: this.cost[3].production,
                currentProduction: this.cost[3].currentProduction,
                atWork: this.cost[3].atWork
            },
            {
                level: this.level.lvStone,
                name: 'Stone Quarry',
                desc: `Stone quarrying is one of the activities which requires the highest
                number of labourers. The enormus block of granite are exavated in the
                mountains of your feud, then they are cutted into building material
                necessary to construict civil and military structures.`,
                image: '/assets/images/building/stone.png',
                woodCost: this.cost[4].woodCost,
                stoneCost: this.cost[4].stoneCost,
                points: this.cost[4].points,
                people: this.cost[4].people,
                timeToUpdate: this.cost[4].timeToUpdate,
                updateName: 'stone',
                isProduction: true,
                productionMinute: this.cost[4].production,
                currentProduction: this.cost[4].currentProduction,
                atWork: this.cost[4].atWork
            },
            {
                level: this.level.lvOre,
                name: 'Gold Mine',
                desc: `Gold is the most important resource in a kingdom's economy. Trades
                need money, and your army needs money to pay their daily wages. Gold
                mines are to be found mainly in the mountains.`,
                image: '/assets/images/building/ore.png',
                woodCost: this.cost[5].woodCost,
                stoneCost: this.cost[5].stoneCost,
                points: this.cost[5].points,
                people: this.cost[5].people,
                timeToUpdate: this.cost[5].timeToUpdate,
                updateName: 'ore',
                isProduction: true,
                productionMinute: this.cost[5].production,
                currentProduction: this.cost[5].currentProduction,
                atWork: this.cost[5].atWork
            },
            {
                level: this.level.lvIron,
                name: 'Iron Mine',
                desc: `Iron is used to create weapons and protections. Even though
                tour men are more at ease with wooden materials, you should always
                consider the imortance of iron, both in attacking and defending.`,
                image: '/assets/images/building/iron.png',
                woodCost: this.cost[6].woodCost,
                stoneCost: this.cost[6].stoneCost,
                points: this.cost[6].points,
                people: this.cost[6].people,
                timeToUpdate: this.cost[6].timeToUpdate,
                updateName: 'iron',
                isProduction: true,
                productionMinute: this.cost[6].production,
                currentProduction: this.cost[6].currentProduction,
                atWork: this.cost[6].atWork
            },
        ];
    }

}
